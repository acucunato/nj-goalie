import React from "react";
import goaliegloves from "../img/goaliegloves.jpg";

// about section below jumbotron

function AboutHP() {
  return (
    <section className="page-section-about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="text-center mt-0 aboutHeadline">Train with us</h2>
            <br />
            <img
              src={goaliegloves}
              alt="goaliegloves"
              className="goalieGloves"
            />
            <p className="text-muted mb-0" style={{ textIndent: "25px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHP;
