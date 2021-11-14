import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Nav />
      <div className="hero">
        <div className="pagesHeader">
          <h1 className="pagesh1">Contact Us</h1>
        </div>
      </div>
      <div className="container text-center">
        <h2 className="text-center mt-0 titleText">Contact</h2>
        <p className="mx-5 mt-3">
          If you have any questions about our services or would like to further
          discuss training with us, please contact us using the information
          below.
        </p>
      </div>
      <div className="container text-center pb-5">
        <p className="mx-5 mt-3">
          <i class="far fa-envelope"></i>
          <a
            className="email-address"
            href="info@njgoalkeeperdevelopmentacademy.com"
          >
            {" "}
            info@njgoalkeeperdevelopmentacademy.com{" "}
          </a>{" "}
          | <i class="fas fa-phone"></i>
          <a className="phone-number" href="tel:+1-856-906-0087">
            {" "}
            (856) 906-0087
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
