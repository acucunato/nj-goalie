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
        <p className="mx-5 mt-3 pb-4">
          If you have any questions about our services or would like to further
          discuss training with us, please contact us using the information
          below.
        </p>
      </div>
      <div className="row justify-content-center text-center pb-5">
        <div class="col-lg-12 pb-3">
          <i class="far fa-envelope"></i>
          <a
            className="email-address"
            href="mailto:info@njgoalkeeperdevelopmentacademy.com"
          >
            {" "}
            info@njgoalkeeperdevelopmentacademy.com{" "}
          </a>{" "}
        </div>
        <div class="col-lg-12 pb-4">
          <i class="fas fa-phone"></i>
          <a className="phone-number" href="tel:+1-856-906-0087">
            {" "}
            (856) 906-0087
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
