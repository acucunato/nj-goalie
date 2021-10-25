import React from "react";
import AboutHP from "../components/AboutHP";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";

function HomePage() {
  return (
    <>
      <Nav />
      <Jumbotron />
      <AboutHP />
      <Footer />
    </>
  );
}

export default HomePage;
