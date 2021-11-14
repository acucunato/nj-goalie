import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./Training.css";

function Training() {
  return (
    <>
      <Nav />
      <div className="hero">
        <div className="pagesHeader">
          <h1 className="pagesh1">Training</h1>
        </div>
      </div>
      <div className="container text-center">
        <h2 className="text-center mt-0 titleText">Private Training</h2>
        <p className="mx-5 mt-3">
          Private training at NJGDA provides keepers with 1-on-1 training that
          is based on a development plan that is agreed up by the goalkeeper and
          NJGDA staff. Each session consists of an hour-long session that
          addresses the five elements of goalkeeping development: technical,
          tactical, physical, psychological, and social.
        </p>
      </div>
      <div className="mx-5 mt-3 text-center">
        <h5 className="dk-blue-header">Areas of Focus</h5>
        <ul className="trainingList">
          <li className="list-item">
            <i class="far fa-futbol px-2"></i>Footwork
          </li>
          <li className="list-item">
            <i class="far fa-futbol px-2"></i>Set Position
          </li>
          <li className="list-item">
            <i class="far fa-futbol px-2"></i>Handling
          </li>
          <li className="list-item">
            <i class="far fa-futbol px-2"></i>Diving
          </li>
          <li className="list-item">
            <i class="far fa-futbol px-2"></i>Crosses
          </li>
          <li className="list-item">
            <i class="far fa-futbol px-2"></i>Breakaways/ 1v1 situations
          </li>
          <li className="list-item">
            <i class="far fa-futbol px-2"></i>Reaction Saves
          </li>
          <li className="list-item">
            <i class="far fa-futbol px-2"></i>Communication
          </li>
          <li className="list-item">
            <i class="far fa-futbol px-2"></i>Distribution
          </li>
        </ul>
      </div>
      <div className="mx-5 mt-3 text-center">
        <h5 className="dk-blue-header">Cost Per Session</h5>
        <ul className="trainingList">
          <li className="list-item">
            <i class="far fa-futbol px-2"></i>1 Session: $50
          </li>
          <li className="list-item">
            <i class="far fa-futbol px-2"></i>5 Sessions: $225
          </li>
          <li className="list-item">
            <i class="far fa-futbol px-2"></i>10 Sessions: $400
          </li>
        </ul>
        <div className="caption-under-training text-muted">
          *Most training is completed at Peter Volpa Park- 569 Sickler Ave,
          Sicklerville, NJ 08081* <br />
          Arrangements can be made to complete training at a location near you
        </div>
      </div>
      <div class="horizontal-line"></div>
      <div className="container text-center pb-5">
        <h2 className="text-center mt-0 titleText">Group Training</h2>
        <div className="mx-5 mt-3 text-center">
          <h5 className="dk-blue-header">Cost Per Session</h5>
          <ul className="trainingList">
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>2 Goalkeepers: $40 per student
            </li>
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>3 Goalkeepers: $35 per student
            </li>
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>4 Goalkeepers: $30 per student
            </li>
            <li className="list-item">
              <i class="far fa-futbol px-2"></i>5+ Goalkeepers: Please contact
              us for pricing
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Training;
