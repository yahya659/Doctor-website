import React from "react";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Buner.css";
import About from "../About/About";

function Buner() {
  return (
    <>
      <section className="bunerabout">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1>About Us</h1>
              {/* <h1>{props.tittle}</h1> */}
              <li>
                <Link to="/home">
                  <FontAwesomeIcon icon={faHome} />
                  home
                </Link>
                / About-Us
                {/* <Link to="/home">
                    <FontAwesomeIcon icon={faHome}/>home
                    </Link>/  {props.smtittle} */}
              </li>
            </div>
          </div>
        </div>
      </section>
      <About />
      {/* card */}
      <div className="container">
        {/* <img src="..." class="card-img-top" alt="" /> */}
        <div className="card-card">
            
          <h3>12</h3>

          <div class="card-body">
            <h5 class="card-title">Years With You</h5>
            <p class="card-text">
              Etiam ante ante, molestie vitae cursus ac, pharetra euismod
              libero.
            </p>
          </div>

        
        </div>
      </div>
    </>
  );
}

export default Buner;
