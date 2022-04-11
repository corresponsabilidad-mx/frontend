import { Navbar, Nav, Image } from "react-bootstrap";
import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      id="top"
      className="fixed-top navbar-style"
      expand="lg"     
      style={{backgroundColor: "#f5f5f5"}}
    >
      <div className="container">
        <Navbar.Brand className="col-lg-3" href="/">
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            style={{ width: "5rem"}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto navbar-nav flex-fill justify-content-between align-items-center">
            <Nav.Item>
              <Link href="/">
                <a className="nav-link a-navbar">
                  INICIO                
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/conocenos">
                <a className="nav-link a-navbar">
                CONOCENOS                  
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/proyectos">
                <a className="nav-link a-navbar">
                PROYECTOS                
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/galeria">
                <a className="nav-link a-navbar">
                GALERIA              
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/blog">
                <a className="nav-link a-navbar">
                BLOG                 
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/participa">
                <a className="nav-link a-navbar">
                PARTICIPA                 
                </a>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
