import React from "react";
import Logo from "../../Assets/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img src={Logo} className="footerlogo" />
            <p className="footer-p">
              Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et.
            </p>
            <div className="footer-conact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="footer-text">
                <h6>Contact Us</h6>
                <h4>+967 771940086</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2 className="footer-h">Quik Links</h2>
            <hr style={{width:"170px"}}/>
            <ul className="footer-ul">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Booking</a>
              </li>
              <li>
                <a href="#">Faqs</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2 className="footer-h">Our Service</h2>
            <hr style={{width:"190px"}}/>
            <ul className="footer-ul">
              <li>
                <a href="#">Dental Care</a>
              </li>
              <li>
                <a href="#">Cardiac Clinic</a>
              </li>
              <li>
                <a href="#">Massege Therapy</a>
              </li>
              <li>
                <a href="#">Cardiology</a>
              </li>
              <li>
                <a href="#">Precise Diagnosis</a>
              </li>
              <li>
                <a href="#">Abmbulance Services</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2 className="footer-h">Subcribe</h2>
            <hr style={{width:"150px"}}/>
            <form className="footer-form">
              <input type="email" placeholder="Email Address" />
              <button className="footer-btn" type="submit">
                Subscribe Now
              </button>
            </form>
            <ul className="footer-scroul">
              <li>
                <a
                  href="https://www.linkedin.com/in/yahya-alhaifi-81b886374/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yahya-alhaifi-81b886374/"
                  target="_blank"
                >
                  <FaFacebookSquare />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-button">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
           <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" ><span><MdOutlineEmail />yahayaalhaifi@gmail.com</span></a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
