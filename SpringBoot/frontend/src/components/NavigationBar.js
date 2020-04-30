import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class NavigationBar extends React.Component {
    render () {
      return (
        <Navbar bg="dark" variant="dark">
          <Link to={""} className="navbar-brand">
            Workforce Data Entry
          </Link>
          <Nav className="mr-auto">
            <Link to={"add"} className="nav-link">Add Employee</Link>
            <Link to={"list"} className="nav-link">Employee List</Link>
          </Nav>
        </Navbar>
      );
    }
}

export default NavigationBar;
