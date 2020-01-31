import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">GoPaperless</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/documents">Pending Documents</Nav.Link>
              <Nav.Link href="/notice">Notices/Circulars</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
