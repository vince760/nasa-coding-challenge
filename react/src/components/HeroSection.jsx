import React from 'react';

class HeroSection extends React.Component {
  render() {
    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Welcome to NASA images!</h1>
              <p className="lead text-muted">
                Daily images brought to you from the NASA API. Search for a
                specific image, search by date, or browse the library!
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default HeroSection;
