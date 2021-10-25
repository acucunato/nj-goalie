import React from "react";

// jumbotron

function Jumbotron() {
  return (
    <header className="masthead" id="page-top">
      <div className="container-jumbotron h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <h1 className="col-lg-10 align-self-end headline">
            NJ Goalkeeper Development Academy
          </h1>
          <div className="col-lg-8 align-self-baseline">
            <p className="tagLine">tagline</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Jumbotron;
