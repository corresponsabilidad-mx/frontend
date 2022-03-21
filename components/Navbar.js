import { Navbar, Nav, Image } from 'react-bootstrap';
import Link from 'next/link';

export default function NavBar() {
  return ( 
    <Navbar collapseOnSelect id="top" className="fixed-top" expand="lg" bg="light" variant="light" >   
      <div className="container">   
        <Navbar.Brand className="col-md-8 col-lg-4" href="/">
          <Image src="/images/logo/logo.jpg" className="" alt="logo" style={{ width: "7.5rem" }}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto navbar-nav flex-fill justify-content-between align-items-center">
            <Nav.Item>
              <Link href="/">
                <a className="nav-link active text-white primary-color a-navbar">INICIO</a>
              </Link>
            </Nav.Item> 
            <Nav.Item>
              <Link href="/quienes-somos">
                <a className="nav-link text-white primary-color a-navbar">¿Quiénes somos?</a>
              </Link>
            </Nav.Item>   
            <Nav.Item>
              <Link href="/proyectos">
                <a className="nav-link text-white primary-color a-navbar">Proyectos</a>
              </Link>
            </Nav.Item>   
            <Nav.Item>
              <Link href="/galeria">
                <a className="nav-link text-white primary-color a-navbar">Galería</a>
              </Link>
            </Nav.Item>   
	    <Nav.Item>
              <Link href="/blog">
                <a className="nav-link text-white primary-color a-navbar">Blog</a>
              </Link>
            </Nav.Item>   
	    <Nav.Item>
              <Link href="/participa">
                <a className="nav-link text-white primary-color a-navbar">Participá</a>
              </Link>
            </Nav.Item>                
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>           
  )
}