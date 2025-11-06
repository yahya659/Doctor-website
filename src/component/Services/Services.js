import React from 'react'
import Buner from '../Blogservise/Buner'
// import React from "react";
import imgg17 from "../../Assets/imgg17.jpg";
import imgg3 from "../../Assets/imgg3.jpg";
import imgg14 from "../../Assets/imgg14.jpg";
import imgg2 from "../../Assets/imgg2.jpg";

function Services() {
  return (
    <>
    <Buner/>
   
         <div
           className="container"
           style={{ display: "flex", justifyContent: "space-around",flexWrap:"wrap"
            }}
         >
           <div class="card" style={{ width: "18rem", marginTop: "50px" }}>
             <img src={imgg3} class="card-img-top" alt="..." />
             <div class="card-body">
               <h5 class="card-title">Diagnostics</h5>
               <p class="card-text">
                Phasellus venenatis porta rhoncus. Integer et viverra felis.


               </p>
               <a href="#" class="btn btn-primary">
                 Go somewhere
               </a>
             </div>
           </div>
           <div class="card" style={{ width: "18rem", marginTop: "50px" }}>
             <img src={imgg14} class="card-img-top" alt="..." />
             <div class="card-body">
               <h5 class="card-title">Treatment</h5>
               <p class="card-text">
                Phasellus venenatis porta rhoncus. Integer et viverra felis.


               </p>
               <a href="#" class="btn btn-primary">
                 Go somewhere
               </a>
             </div>
           </div>
           <div class="card" style={{ width: "18rem", marginTop: "50px" }}>
             <img src={imgg17} class="card-img-top" alt="..." />
             <div class="card-body">
               <h5 class="card-title">Surgery</h5>
               <p class="card-text">
             Phasellus venenatis porta rhoncus. Integer et viverra felis.


               </p>
               <a href="#" class="btn btn-primary">
                 Go somewhere
               </a>
             </div>
           </div>
           <div class="card" style={{ width: "18rem", marginTop: "50px" }}>
             <img src={imgg2} class="card-img-top" alt="..." />
             <div class="card-body">
               <h5 class="card-title">Emergency</h5>
               <p class="card-text">
                 Phasellus venenatis porta rhoncus. Integer et viverra felis.


               </p>
               <a href="#" class="btn btn-primary">
                 Go somewhere
               </a>
             </div>
           </div>
         </div>
    </>
  )
}

export default Services