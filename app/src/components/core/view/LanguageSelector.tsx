import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function LanguageSelector(props: any) {
  const [idioma, setLang] = useState("es");
  const { t } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };
  return (
    <DropdownButton
      id="dropdown-basic-button"
      className="dropdownLanguageSelector"
      title={t("navBar.languageSelector.language")}
    >
      <Dropdown.Item
        onClick={() => changeLanguage("es")}
        active={idioma === "es"}
      >
        {t("navBar.languageSelector.spanish")}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => changeLanguage("en")}
        active={idioma === "en"}
      >
        {t("navBar.languageSelector.english")}
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => changeLanguage("fr")}
        active={idioma === "fr"}
      >
        {t("navBar.languageSelector.french")}
      </Dropdown.Item>
    </DropdownButton>
  );
}
