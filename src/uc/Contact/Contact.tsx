import React, { useState } from "react";
import "./contact.scss";
import Alert from "components/core/view/Alert";

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <h2>Contact</h2>
      Si lo deseas puedes contactarme a los siguientes enlaces: Vale? vale
      <button onClick={handleClick}></button>
      <Alert
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        text={"Hoola"}
      ></Alert>
    </div>
  );
}
