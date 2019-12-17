import "./navBarMenu.scss";
import * as React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Icon from "components/core/view/Icon";
import LightSwitch from "components/theme/LightSwitch";
import LanguageSelector from "components/core/view/LanguageSelector";
import { useTranslation } from "react-i18next";

export default function NavbarMenu() {
  const { t } = useTranslation();
  return (
    <div className="navBarMenu">
      <Icon name="menu" boxSize={20} />
      <DropdownButton
        id="dropdown-navbarMenu"
        className="dropdownNavbarMenu"
        title=""
      >
        <LightSwitch />
        <LanguageSelector />
        {/*<Form inline className="searchBar">
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
        </Form>*/}
      </DropdownButton>
    </div>
  );
}
