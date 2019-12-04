import React, { useState, useEffect, forwardRef } from "react";
import firebase from "src/Firebase/firebase";
import { useTranslation } from "react-i18next";
import { getCurrentDateAndTime } from "utils/Date";
import { getRandomNumber } from "utils/Digit";

import "./comments.scss";

let randomNumber: any;
randomNumber = getRandomNumber(1, 60);
export default function Comment() {
  // inicializamos nuestro estado inicial
  const [form, setForm] = useState({});
  const [alert, setAlert] = useState(false);
  const [alertData, setAlertData] = useState();
  const { t } = useTranslation();

  let contactForm: any;
  let inputName: any;
  let textAreaMessage: any;

  // Mostrar una alerta cuando se envia el formulario
  let showAlert = (type: any, message: string): any => {
    setAlertData({ type, message });
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 4000);
  };

  // Con esta funcion borramos todos los elementos del formulario
  const resetForm = () => {
    let lastInputName = inputName.value;
    contactForm.reset();
    inputName.value = lastInputName;
  };

  // Funcion para enviar la informacion del formulario a Firebase Database
  const sendMessage = (e: any) => {
    // Detiene la acción predeterminada del elemento
    e.preventDefault();

    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      name: inputName.value,
      message: textAreaMessage.value,
      avatarNumber: randomNumber + "-avatar",
      date: getCurrentDateAndTime("-")
    };
    if (params.name && params.message) {
      // Enviar objeto a firebase
      firebase
        .database()
        .ref("comments")
        .push(params)
        .then(() => {
          // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
          showAlert(t("comments.success"), t("comments.success_message"));
        })
        .catch(() => {
          // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error
          showAlert(t("comments.error"), t("comments.error_message"));
        });
      // limpiamos nuestro formulario llamando la funcion resetform
      resetForm();
    } else {
      // En caso de no llenar los elementos necesario despliega un mensaje de alerta
      showAlert(t("comments.warning"), t("comments.warning_message"));
    }
  };

  return (
    <div>
      {alert && (
        <div className={`alert alert-${alertData.type}`} role="alert">
          <div>{alertData.message}</div>
        </div>
      )}
      <div>
        <div>
          <div>
            <h2>{t("comments.title")}</h2>
            <form
              onSubmit={sendMessage.bind(this)}
              ref={input => {
                contactForm = input;
              }}
            >
              <div className="form-group">
                <label htmlFor="name">{t("comments.name")}</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder={t("comments.name")}
                  value={inputName}
                  ref={input => {
                    inputName = input;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t("comments.comment")}</label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder={t("comments.comment")}
                  ref={input => {
                    textAreaMessage = input;
                  }}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
