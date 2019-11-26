import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";

export default function LanguageSelector(props: any) {
  //const [idioma, setLang] = useState("es");
  /*const cookies = new Cookies();
  if (!cookies.get("lng")) {
    console.log("No cookies");
    cookies.set("lng", "language", { path: "/" });
    cookies.get("lng");
  }*/
  const { t } = useTranslation();

  return (
    <DropdownButton
      id="dropdown-basic-button"
      className="dropdownLanguageSelector"
      title={t("navBar.languageSelector.language")}
    >
      <Dropdown.Item
        onClick={() => i18n.changeLanguage("es")}
        active={i18n.language === "es"}
      >
        {t("navBar.languageSelector.spanish")}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => i18n.changeLanguage("en")}
        active={i18n.language === "en"}
      >
        {t("navBar.languageSelector.english")}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => i18n.changeLanguage("fr")}
        active={i18n.language === "fr"}
      >
        {t("navBar.languageSelector.french")}
      </Dropdown.Item>
    </DropdownButton>
  );
}
