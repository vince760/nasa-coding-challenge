import React from 'react';
import DatePicker from 'react-datepicker';
import * as nasaService from '../services/nasaCalls';
import 'react-datepicker/dist/react-datepicker.css';
import { SpinnerDotted } from 'spinners-react';

class Content extends React.Component {
  state = {
    visibility: true,
    startDate: '',
    endDate: '',
    quantity: 9,
    startObject: {},
    endObject: {},
    submitting: true,
    mappedImages: [],
  };

  componentDidMount() {
    nasaService.initialApodCall().then((res) => this.setState({
      mappedImages: res.items.map(this.mapImages),
      submitting: false,
    }));
  }

  // Map through the returned images and set box contents.
  // Set them to state, then render
  mapImages = (image) => (
    <div
      key={image.copyright ? image.copyright : image.title}
      className="col"
    >
      <div className="card shadow-sm">
        <img
          style={{ width: '100%', height: '100%' }}
          src={image.url}
          alt={image.media_type}
        />
        <div
          style={{ maxHeight: '250px', overflowY: 'scroll' }}
          className="card-body align-items-stretch flex-shrink"
        >
          <p className="card-text ">{image.explanation}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <b>{image.copyright}</b>
            </div>
            <small className="text-muted">{image.date}</small>
          </div>
        </div>
      </div>
    </div>
  );

  // Get current month for date selector
  getSelectedMonth = (date) => {
    const dateString = date.toString();
    const dateStringSplit = dateString.split(' ');
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const month_index = months.findIndex(
      (month) => month === dateStringSplit[1],
    );
    const dateObject = {
      year: parseInt(dateStringSplit[3]),
      month: month_index + 1,
      day: parseInt(dateStringSplit[2]),
    };
    return dateObject;
  };

  // Set the start date for calandar, or allow to specify date plus quantity.
  setStartDate = (date) => {
    if (date) {
      const startObject = this.getSelectedMonth(date);
      this.setState({ startDate: date, startObject });
    } else {
      this.setState({
        startDate: '',
        startObject: {},
        endDate: '',
        endObject: {},
      });
    }
  };

  // Set end date, can only be paired with start date
  setEndDate = (date) => {
    if (date) {
      const endObject = this.getSelectedMonth(date);
      this.setState({ endDate: date, endObject });
    } else {
      this.setState({ endDate: '', endObject: {} });
    }
  };

  setQuantity = (e) => {
    console.log(e.target.value);
    if (e.target.value) {
      this.setState({ quantity: parseInt(e.target.value) });
    } else {
      this.setState({ quantity: 9 });
    }
  };

  // Wire up the onClick to the submit button.
  // Check and see which values will be sent and which call to make.
  handleOnSubmit = () => {
    this.setState({ submitting: !this.state.submitting });
    if (this.state.startDate !== '' && this.state.endDate === '') {
      const date = `${this.state.startObject.year}-${this.state.startObject.month}-${this.state.startObject.day}`;
      nasaService
        .searchByStartDate(date)
        .then((res) => this.setState({
          mappedImages: res.items.map(this.mapImages),
          submitting: !this.state.submitting,
        }));
    } else if (
      (this.state.quantity !== 9 || this.state.quantity === 9)
      && this.state.startDate === ''
      && this.state.endDate === ''
    ) {
      nasaService
        .searchByQuantity(this.state.quantity)
        .then((res) => this.setState({
          mappedImages: res.items.map(this.mapImages),
          submitting: !this.state.submitting,
        }));
    } else if (this.state.startDate !== '' && this.state.endDate !== '') {
      const startDate = `${this.state.startObject.year}-${this.state.startObject.month}-${this.state.startObject.day}`;
      const endDate = `${this.state.endObject.year}-${this.state.endObject.month}-${this.state.endObject.day}`;
      nasaService
        .searchByDateRange(startDate, endDate)
        .then((res) => this.setState({
          mappedImages: res.items.map(this.mapImages),
          submitting: !this.state.submitting,
        }));
    }
  };

  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center ">
              <li>
                <div
                  style={{ paddingRight: '10px' }}
                  className="col text-center"
                >
                  <DatePicker
                    disabled={this.state.quantity !== 9}
                    placeholderText="Select your start date"
                    selected={this.state.startDate}
                    onChange={(date) => this.setStartDate(date)}
                  />
                </div>
              </li>
              <div style={{ paddingRight: '10px' }} className="col text-center">
                <DatePicker
                  disabled={this.state.quantity !== 9}
                  placeholderText="Select your end date"
                  selected={this.state.endDate}
                  onChange={(date) => this.setEndDate(date)}
                />
              </div>
              <li style={{ paddingRight: '10px' }}>
                <input
                  disabled={
                    !!((this.state.startDate && this.state.endDate)
                    || this.state.endDate
                    || this.state.startDate)
                  }
                  onChange={(e) => {
                    this.setQuantity(e);
                  }}
                  placeholder="How many images?"
                />
              </li>
              <li style={{ justifyContent: 'center' }} className="col">
                <div
                  style={{ justifyContent: 'center', marginTop: '-15px' }}
                  className="text-end"
                >
                  <button
                    onClick={this.handleOnSubmit}
                    disabled={
                      this.state.startDate === ''
                      && this.state.endDate === ''
                      && this.state.quantity === 9
                    }
                    type="button"
                    className="btn btn-lg btn-primary"
                  >
                    Search
                  </button>
                </div>
              </li>
            </ul>
          </header>
        </div>

        <div className="container">
          {this.state.mappedImages.length > 0 && this.state.submitting === false ? (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {this.state.mappedImages}
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <SpinnerDotted
                size={250}
                enabled={this.state.submitting === true}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Content;
