import React from "react";

// Contact section below About

function ContactHP() {
  return (
    <section className="page-section-contact">
      <div class="horizontal-line-homepage"></div>
      <div className="container">
        <h2 className="text-center mt-0 contactHeadline pb-4">Contact</h2>
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
      </div>
    </section>
  );
}

export default ContactHP;
