import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Icon from "components/core/view/Icon";
import LanguageSelector from "components/core/view/LanguageSelector";
import "./navBar.scss";
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
        <li>
          <Link to={"/"} className="nav-link">
            {t("navBar.home")}
            <Icon name="home" boxSize={25} />
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="nav-link">
            {t("navBar.contact")}
            <Icon name="contact" boxSize={25} />
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="nav-link">
            {t("navBar.about")}
            <Icon name="info" boxSize={25} />
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
        </Button>
      </Form>
    </Navbar>
  );
}
