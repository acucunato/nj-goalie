import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./About.css";

function AboutUs() {
  return (
    <>
      <Nav />
      <div className="hero">
        <div className="pagesHeader">
          <h1 className="pagesh1">About Us</h1>
        </div>
      </div>
      <div className="container text-center">
        <h2 className="text-center mt-0 titleText">About</h2>
        <p className="mx-5 mt-3">
          The New Jersey Goalkeeper Development Academy is a goalkeeper-specific
          training organization that is focused on providing educational
          services to goalkeepers of all ages. By addressing the five elements
          of goalkeeping development: technical, tactical, physical,
          psychological, and social, NJGDA students will be provided with a
          chance to enhance their skills in a positive learning environment that
          encourages keepers to challenge themselves during each session.
        </p>
      </div>
      <br />
      <div class="horizontal-line"></div>
      <div className="container text-center pb-5">
        <h2 className="text-center mt-0 titleText">Mission Statement</h2>
        <p className="mx-5 mt-3">
          To educate and guide goalkeepers to achieve their goals and grow both
          on and off of the pitch.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
