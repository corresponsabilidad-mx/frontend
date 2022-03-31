import { Navbar, Nav, Image } from "react-bootstrap";
import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      id="top"
      className="fixed-top"
      expand="lg"     
      style={{backgroundColor: "lightgrey"}}
    >
      <div className="container">
        <Navbar.Brand className="col-md-8 col-lg-4" href="/">
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            style={{ width: "6.5rem", height:"6.5rem" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto navbar-nav flex-fill justify-content-between align-items-center">
            <Nav.Item>
              <Link href="/">
                <a className="nav-link active text-white primary-color a-navbar">
                  INICIO
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/conocenos">
                <a className="nav-link text-white primary-color a-navbar">
                  CONOCENOS
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/proyectos">
                <a className="nav-link text-white primary-color a-navbar">
                  PROYECTOS
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/galeria">
                <a className="nav-link text-white primary-color a-navbar">
                  GALERIA
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/blog">
                <a className="nav-link text-white primary-color a-navbar">
                  BLOG
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/participa">
                <a className="nav-link text-white primary-color a-navbar">
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
