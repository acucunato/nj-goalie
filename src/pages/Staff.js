import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Staff.css";

function Staff() {
  return (
    <>
      <Nav />
      <div className="hero">
        <div className="pagesHeader">
          <h1 className="pagesh1">Staff</h1>
        </div>
      </div>
      <div className="container text-center">
        <h2 className="text-center mt-0 titleText">Staff</h2>
        <p className="mx-5 mt-3">Patrick Raletz- Owner and Founder</p>
      </div>
      <br />
      <div class="horizontal-line"></div>
      <div className="container text-center pb-5">
        <h2 className="text-center mt-0 titleText">Coaching Experience</h2>
        <div className="mx-5 mt-3">
          <ul className="coachingExperienceList">
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>Mt. Laurel United Goalkeeper
              Coach- 2020-Present
            </li>
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>Philadelphia Union Youth
              Goalkeeper Staff Coach- 2021-Present
            </li>
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>Universal Soccer Academy and
              Medford Strikers Trainer/Coach- 2017-2020
            </li>
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>Winslow Township High School
              Boys JV Head Coach and Varsity Assistant- 2018-2019
            </li>
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>SoccerPlus Camps Goalkeeper
              Coach- 2015-2018
            </li>
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>Keepers’ Connection- 2013-2017
            </li>
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>Private Goalkeeping Trainer-
              2011-Present
            </li>
          </ul>
        </div>
      </div>
      <div class="horizontal-line"></div>
      <div className="container text-center pb-5">
        <h2 className="text-center mt-0 titleText">education</h2>
        <div className="mx-5 mt-3">
          <ul className="coachingExperienceList">
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>
              USSF Licensed Coach
            </li>
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>NSCAA/ United Soccer Coaches
              Goalkeeping 1 and 2 Diplomas
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Staff;
