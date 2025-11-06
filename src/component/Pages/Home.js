import React from "react";
import Headerimg from "../../Assets/hederimgg.png";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import About from "../About/About";
import ContactRE from "../ContacRE";
// import Imgg3 fro
import Imgg12 from "../../Assets/imgg12.jpg";
import Imgg11 from "../../Assets/imgg11.jpg";
import Imgg16 from "../../Assets/imgg16.jpg";
import Imgg18 from "../../Assets/imgg18.jpg";

function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <h5>We Provide All Health Care Solution .</h5>
              <h2>Protect Your Health And Take Care To Of Your Health</h2>
              <button>
                <a>Read More</a>
              </button>
              <span>+</span>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="header-box">
                <img src={Headerimg} />
                <FontAwesomeIcon icon={faSquare} />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* About-us */}
      <About />
      <div className="container">
        <p className=" Latest-News">Our Latest News :</p>
      </div>

      <div className="con">
        <div
          className="container"
          style={{ display:"flex", justifyContent: "space-between",flexWrap:"wrap" }}
        >
          <div
            class="card"
            style={{ width: "18rem", marginTop: "50px"}}
          >
            <img src={Imgg12} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div
            class="card"
            style={{ width: "18rem", marginTop: "50px" }}
          >
            <img src={Imgg16} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div
            class="card"
            style={{ width: "18rem", marginTop: "50px"}}
          >
            <img src={Imgg11} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
