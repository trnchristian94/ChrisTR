import React, { useState } from "react";
import "./contact.scss";
import Alert from "components/core/view/Alert";
import { TIMEOUT } from "dns";

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 10000);

    setArray((arr: any) => [...arr, {}]);
  };

  const [array, setArray] = useState<any>([]);

  return (
    <div>
      <h2>Contact</h2>
      Si lo deseas puedes contactarme a los siguientes enlaces: Vale? vale
      <button onClick={handleClick}>Hola</button>
      {array.map((key: any) => {
        return (
          <Alert
            showAlert={showAlert}
            setShowAlert={setShowAlert}
            text={"Hoola"}
          ></Alert>
        );
      })}
    </div>
  );
}
