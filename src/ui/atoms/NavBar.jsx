import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/gyz-logo.png';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar fixed="top" expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand href="#home">
          <Image id="logo" src={Logo} fluid/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#gallery">Our Talent</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;