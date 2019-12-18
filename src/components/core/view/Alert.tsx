import "./alert.scss";
import React, { useState, useEffect } from "react";
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
  };

  return (
    showAlert && (
      <div className="alertComplete">
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
