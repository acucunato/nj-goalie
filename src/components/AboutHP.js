import React from "react";
import goaliegloves from "../img/goaliegloves.jpg";

// about section below jumbotron

function AboutHP() {
  return (
    <section className="page-section-about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="text-center mt-0 aboutHeadline">Train with us!</h2>
            <br />
            <img
              src={goaliegloves}
              alt="goaliegloves"
              className="goalieGloves"
            />
            <p className="text-muted mb-0" style={{ textIndent: "25px" }}>
              The goal of the staff at NJGDA is to help goalkeepers of all ages
              reach their goals and improve every time they step on the pitch.
              If you or your child has a desire to take your development to the
              next level, feel free to reach out to us to discuss a development
              plan that best fits your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHP;
