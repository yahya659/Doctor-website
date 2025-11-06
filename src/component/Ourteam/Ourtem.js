import React from "react";
import dr1 from "../../Assets/dr1.jpg";
import dr2 from "../../Assets/dr2.jpg";
import dr3 from "../../Assets/dr3.jpg";
import dr4 from "../../Assets/dr4.jpg";
import Buner from "../Bunerteam/Buner";
function Ourtem() {
  return (
    <>
      <Buner/>

      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-around",flexWrap:"wrap"
         }}
      >
        <div class="card" style={{ width: "18rem", marginTop: "50px" }}>
          <img src={dr4} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Dr. Addition Smith</h5>
            <p class="card-text">
             Dentist
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem", marginTop: "50px" }}>
          <img src={dr1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Dr. Mahfuz Riad</h5>
            <p class="card-text">
             Cardiologist
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem", marginTop: "50px" }}>
          <img src={dr2} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Dr. Mahfuz Riad</h5>
            <p class="card-text">
          Chiropractor
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem", marginTop: "50px" }}>
          <img src={dr3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Dr. David Benjamin</h5>
            <p class="card-text">
              Cardiologist
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

export default Ourtem;
