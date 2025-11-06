import React from 'react'
import Phone from "../Assets/imgg19.png";
import Emaill from "../Assets/imgg20.png";
// import addres from "../../Assets/add.png"
import addres from "../Assets/add.png"
import "./Pages/Contact.css"
function Main() {
  return (
     <section className="contact-uu">
            <div className="container">
              <div className="row">
                <div
                  
                  className="row row-cols-1 row-cols-lg-2 row-cols-lg-3"
                >
                  <div className="contact-number">
                    <div>
                      <img src={Phone} />
                    </div>
                    <p className="contact-p">Contact Number</p>
                    <hr style={{width:"250px"}}/>
                    <div className="contact-pp">
                      <p>+001 123 456 790 </p>
                      <p>+002 3424 44 00 </p>
                    </div>
                  </div>
                  <div className="contact-emailaddrees">
                   <div>
                     <img src={Emaill}/>
                   </div>
                    <p className="contact-p"> Email Addres</p>
                    <hr style={{width:"200px"}}/>
                    <div className="contact-pp">
                      <p>info@yourdomain.com</p>
                      <p>example@support.com</p>
                    </div>
                  </div>
                  <div className="contact-addrees">
                    <div>
                      <img src={addres}/>
                    </div>
                    <p className="contact-p">Address</p>
                    <hr style={{width:"150px"}}/>
                    <div className="contact-pp">
                      <p>2005 Stokes Isle Apt. 896, Venaville</p>
                      <p>10010, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Main