import React from "react";

// Contact section below About

function ContactHP() {
  return (
    <section className="page-section-contact">
      <div class="horizontal-line-homepage"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="text-center mt-0 contactHeadline">Contact</h2>
            <br />
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHP;
