import React from "react";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Buner.css";
import Ourtem from "../Ourteam/Ourtem";

function Buner() {
  return (
    <>
      <section className="ourteam">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1>OUR TEAM</h1>
              {/* <h1>{props.tittle}</h1> */}
              <li>
                <Link to="/home">
                  <FontAwesomeIcon icon={faHome} />
                  home
                </Link>
                / OUR-TEAM
                {/* <Link to="/home">
                    <FontAwesomeIcon icon={faHome}/>home
                    </Link>/  {props.smtittle} */}
              </li>
            </div>
          </div>
        </div>
      </section>
      
      
    </>
  );
}

export default Buner;
