import "./navBar.scss";
import * as React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  Container,
  Row,
  Col
} from "react-bootstrap";

import Icon from "components/core/view/Icon";
import LightSwitch from "components/theme/LightSwitch";
import LanguageSelector from "components/core/view/LanguageSelector";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavigationBar() {
  const { t } = useTranslation();

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid={true}>
        <Row
          id="navbar_row"
          noGutters={true}
          className="d-flex justify-content-center"
        >
          <Col>
            <a href="#home">
              <div id="navBar-webName">
                <Navbar.Brand className="name">
                  {t("navBar.title")}
                </Navbar.Brand>
                <Icon name="logo" />
              </div>
            </a>
          </Col>
          <Col>
            <Nav className="mr-auto">
              <li className="navButton">
                <Link to={"/"} className="nav-link">
                  <span className="navText">{t("navBar.home")}</span>
                  <Icon name="home" boxSize={20} />
                </Link>
              </li>
              <li className="navButton">
                <Link to={"/contact"} className="nav-link">
                  <span className="navText">{t("navBar.contact")}</span>
                  <Icon name="contact" boxSize={20} />
                </Link>
              </li>
              <li className="navButton">
                <Link to={"/about"} className="nav-link">
                  <span className="navText">{t("navBar.about")}</span>
                  <Icon name="info" boxSize={20} />
                </Link>
              </li>
              <li className="navButton">
                <Link to={"/comments"} className="nav-link">
                  <span className="navText">{t("navBar.comments")}</span>
                  <Icon name="comment" boxSize={20} />
                </Link>
              </li>
            </Nav>
          </Col>
          <Col className="justify-content-end">
            <LightSwitch />
            <LanguageSelector />
            <Form inline className="searchBar">
              <div>
                <FormControl
                  type="text"
                  placeholder={t("navBar.search")}
                  className="mr-sm-2"
                />
                <Button className="searchBtn" variant="outline-info">
                  {t("navBar.searchBtn")}
                  <Icon name="search" boxSize={20} />
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
