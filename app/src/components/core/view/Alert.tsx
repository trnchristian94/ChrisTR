import "./alert.scss";
import React, { useState } from "react";
import ReactSVG from "react-svg";

import { Button } from "react-bootstrap";

interface IProps {
  text: string;
  showAlert: boolean;
  setShowAlert: (mostrar: boolean) => void;
}

export default function Alert({ text, showAlert, setShowAlert }: IProps) {
  const handleClick = () => {
    setShowAlert(false);
    alertFadeIn(!alertFade);
  };
  const [alertFade, alertFadeIn] = useState(true);

  return (
    showAlert && (
      <div
        className={`alertComplete`} //  ${alertFade ? "alert_fadeIn" : "alert_fadeOut"}`}
      >
        <div className="alertBackground"></div>
        <div className="alertElement">
          <div className="alertText">{text}</div>
          <Button className="alertAccept_button" onClick={handleClick}>
            Aceptar
          </Button>
        </div>
      </div>
    )
  );
}
