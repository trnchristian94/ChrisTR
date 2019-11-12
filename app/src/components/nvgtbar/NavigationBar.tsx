import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Icon from "components/core/view/Icon";
import './navBar.scss';

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
              <a href="#home">
                <div id="navBar-webName">
                  <Navbar.Brand className="name">Christian T.R.</Navbar.Brand>
                  <Icon name="logo"/>
                </div>
              </a>
              <Nav className="mr-auto">
                <li>
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"} className="nav-link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </li>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
          );
      }
}

export default NavigationBar;
