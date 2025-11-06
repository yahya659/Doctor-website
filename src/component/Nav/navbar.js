import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav.css";
import Logo from "../../Assets/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { RxLinkedinLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={Logo} title="LOGO" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="active">
              Home
            </Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                <Link to="/baunerabout">About Us</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/team"> Our Item</Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                {" "}
                <Link to="/Register">Login / Register</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/services"> Services</Link></NavDropdown.Item>
            
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/blog">Blog</Link>
              </NavDropdown.Item>
             
            </NavDropdown>
            <Link to="/contact" href="#home">
              Contact Us
            </Link>
            <Nav.Link href="#home">
              {/* <FontAwesomeIcon icon={faSearch} /> */}
            </Nav.Link>
            <Nav.Link href="#home">
              <a
                href="https://www.linkedin.com/in/yahya-alhaifi-81b886374/"
                target="_blank"
              >
                {" "}
                <RxLinkedinLogo className="linked" />
              </a>
              <FontAwesomeIcon icon={faPhone} /> +967 771940086
              {/* <span>Engineer/Yahya Al-haifi</span> */}
            </Nav.Link>

            <Nav.Link href="#home">
              <button>
                <Link to="/Regist">Contact Us </Link>
                <span>
                  <FontAwesomeIcon icon={faArrowCircleLeft} />
                </span>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
