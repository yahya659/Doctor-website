import React from "react";
import Img22 from "../../Assets/imgg22.jpg";
import Img2 from "../../Assets/imgg2.jpg";
import Img3 from "../../Assets/imgg3.jpg";
import Buner from "../Bunerabout/Buner";
function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="aboutimg">
              <img className="imgg2" src={Img22} />
              <img src={Img2} />
            </div>
            <div className="aboutimg2">
              <img src={Img3} />
              <h3>
                20
                <h2>Year Experience</h2>
              </h3>
            </div>
          </div>
          <div
            style={{ marginTop: "150px", height: "50%" }}
            className="col-lg-6 col-md-6"
          >
            <div className="about-2">
              <h2>About Us </h2>
              <hr style={{ width: "250px" }} />
              <div>
                <h3>The Great Place Of Medical Hospital Center</h3>
                <p>
                  We provide the special tips and advice’s of heath care
                  treatment and high level of best technology involve in the our
                  hospital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
