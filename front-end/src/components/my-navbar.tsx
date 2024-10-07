import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

function MyNav() {
  return(
    <>
    <Navbar expand="lg" data-bs-theme="dark" bg="secondary" className='fixed'>
      <Container>
        <Navbar.Brand href="/" className='darker'>Gavin McGuinness</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href='/resume'>Resume</Nav.Link>
            <Nav.Link href='/about-this-page'>About</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Outlet />
    </>
  )
}

export default MyNav