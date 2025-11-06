import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css"
import Imgg12 from "../../Assets/imgg12.jpg";
import Imgg11 from "../../Assets/imgg11.jpg";
import Imgg16 from "../../Assets/imgg16.jpg";
import Imgg18 from "../../Assets/imgg18.jpg";

function Buner(props) {
  return (
    <>
    <section className="blog">
      <div className="container">

        <div className="row">
            <div className="col-lg-12 col-md-12">
                <h1>Blog Grid 3</h1>
                {/* <h1>{props.tittle}</h1> */}
                <li>
                    <Link to="/home">
                    <FontAwesomeIcon icon={faHome}/>home
                    </Link>/  Blog Grid 3
                    {/* <Link to="/home">
                    <FontAwesomeIcon icon={faHome}/>home
                    </Link>/  {props.smtittle} */}
                </li>
            </div>

        </div>
      </div>
      
      
    </section>
    
          <div
            className="container"
            style={{ display: "flex", justifyContent: "space-around",flexWrap:"wrap" }}
          >
            <div class="card" style={{ width: "18rem", marginTop: "50px" }}>
              <img src={Imgg18} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card’s content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem", marginTop: "50px" }}>
              <img src={Imgg12} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card’s content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem", marginTop: "50px" }}>
              <img src={Imgg16} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card’s content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem", marginTop: "50px" }}>
              <img src={Imgg11} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card’s content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
    </>
    
  );
}

export default Buner;
