import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

function Navbarr({settext, setrate}) {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
      <Navbar.Brand href="#"><img src="logo.svg" alt="logo" className='logo' width={110}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
            <Link to="/">
            </Link> 
            <Nav.Link ><Link to="/Home">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/About">About</Link></Nav.Link>
            <Nav.Link ><Link to="/Trailer">Trailer</Link></Nav.Link>
            <Nav.Link ><Link to="/Movie">Movie</Link></Nav.Link>
           
          </Nav>
          <div>
        <ReactStars onChange={(newrating) =>setrate(newrating)}
        count={5} 
    size={24}
     activeColor="#ffd700"
    
     />
        </div>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) =>settext(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;