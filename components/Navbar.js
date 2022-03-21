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
                <a className="nav-link active text-dark">Inicio</a>
              </Link>
            </Nav.Item> 
            <Nav.Item>
              <Link href="/quienes-somos">
                <a className="nav-link text-success">¿Quiénes somos?</a>
              </Link>
            </Nav.Item>   
            <Nav.Item>
              <Link href="/proyectos">
                <a className="nav-link text-success">Proyectos</a>
              </Link>
            </Nav.Item>   
            <Nav.Item>
              <Link href="/">
                <a className="nav-link text-success">Galería</a>
              </Link>
            </Nav.Item>   <Nav.Item>
              <Link href="/">
                <a className="nav-link text-success">Blog</a>
              </Link>
            </Nav.Item>   <Nav.Item>
              <Link href="/">
                <a className="nav-link text-success">Participá</a>
              </Link>
            </Nav.Item>                
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>           
  )
}