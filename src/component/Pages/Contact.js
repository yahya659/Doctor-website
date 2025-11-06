import React from "react";
import Buner from "../Buner/Buner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMap } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineEmail } from "react-icons/md";
import "./Contact.css";
import ContactRE from "../ContacRE";
import Main from "../Main";
function Contact() {
  return (
    <>
      <Buner />
      {/* <Buner tittle="Contact Us" smtittle="Contact"/> */}
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <ContactRE /> {/*Specific to the form */}
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="sids">
                <div className="overlay">
                  <h3>Contact Us For Any Informations</h3>
                  <li>
                    <FontAwesomeIcon icon={faMap} />
                    Location
                  </li>
                  <hr />
                  <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                  <li>
                    <MdOutlineEmail />
                    Email & Phone
                  </li>
                  <hr />
                  <p>yahayaalhaifi@gmail.com</p>
                  <p>(+967) 771940086</p>
                  <li>
                    <FontAwesomeIcon icon={faGlobe} />
                    Follow Us
                  </li>
                  <hr />
                  <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faGlobe} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faGlobe} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faGlobe} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Main/>     
    </>
  );
}

export default Contact;
