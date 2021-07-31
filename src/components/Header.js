import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component{
  render() {
    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Post App</Navbar.Brand>        
          <Nav>
              <Nav.Link href="/">Posts</Nav.Link>        
              <Nav.Link href="/newPost">Novo</Nav.Link>        
          </Nav>  
      </Navbar>
    );
  } 
}

export default Header;