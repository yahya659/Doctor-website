import React from "react";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Buner.css";

function Buner() {
  return (
    <>
      <section className="blogservise">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1>Services</h1>
              {/* <h1>{props.tittle}</h1> */}
              <li>
                <Link to="/home">
                  <FontAwesomeIcon icon={faHome} />
                  home
                </Link>
                / Services
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
