import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header />
      <HeroSection />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
