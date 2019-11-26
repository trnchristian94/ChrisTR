import "./navBar.scss";
import * as React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Icon from "components/core/view/Icon";
import LanguageSelector from "components/core/view/LanguageSelector";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavigationBar() {
  const { t } = useTranslation();

  return (
    <Navbar bg="dark" variant="dark">
      <a href="#home">
        <div id="navBar-webName">
          <Navbar.Brand className="name">{t("navBar.title")}</Navbar.Brand>
          <Icon name="logo" />
        </div>
      </a>
      <Nav className="mr-auto">
        <li className="navButton">
          <Link to={"/"} className="nav-link">
            {t("navBar.home")}
            <Icon name="home" boxSize={20} />
          </Link>
        </li>
        <li className="navButton">
          <Link to={"/contact"} className="nav-link">
            {t("navBar.contact")}
            <Icon name="contact" boxSize={20} />
          </Link>
        </li>
        <li className="navButton">
          <Link to={"/about"} className="nav-link">
            {t("navBar.about")}
            <Icon name="info" boxSize={20} />
          </Link>
        </li>
      </Nav>
      <Form inline>
        <LanguageSelector />
        <FormControl
          type="text"
          placeholder={t("navBar.search")}
          className="mr-sm-2"
        />
        <Button className="searchBtn" variant="outline-info">
          {t("navBar.searchBtn")}
          <Icon name="search" boxSize={20} />
        </Button>
      </Form>
    </Navbar>
  );
}
