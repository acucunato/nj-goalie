import React from "react";
import AboutHP from "../components/AboutHP";
import ContactHP from "../components/ContactHP";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";

function HomePage() {
  return (
    <>
      <Nav />
      <Jumbotron />
      <AboutHP />
      <ContactHP />
      <Footer />
    </>
  );
}

export default HomePage;
