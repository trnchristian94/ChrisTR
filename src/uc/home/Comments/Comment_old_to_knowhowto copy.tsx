import React, { useState, useEffect, forwardRef } from "react";
import firebase from "src/Firebase/firebase";

import "./comments.scss";

export default function Comment() {
  // inicializamos nuestro estado inicial
  const [form, setForm] = useState({});
  const [alert, setAlert] = useState(false);
  const [alertData, setAlertData] = useState();

  let contactForm: any;
  let inputName: any;
  let inputEmail: any;
  let inputCity: any;
  let inputPhone: any;
  let textAreaMessage: any;

  // Mostrar una alerta cuando se envia el formulario
  let showAlert = (type: any, message: string): any => {
    setAlert(true);
    setAlertData({ type, message });
    setTimeout(() => {
      setAlert(false);
    }, 4000);
  };

  // Con esta funcion borramos todos los elementos del formulario
  const resetForm = () => {
    contactForm.reset();
  };

  // Funcion para enviar la informacion del formulario a Firebase Database
  const sendMessage = (e: any) => {
    // Detiene la acción predeterminada del elemento
    e.preventDefault();

    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      name: inputName.value,
      email: inputEmail.value,
      city: inputCity.value,
      phone: inputPhone.value,
      message: textAreaMessage.value
    };

    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
    if (
      params.name &&
      params.email &&
      params.phone &&
      params.phone &&
      params.message
    ) {
      // enviamos nuestro objeto "params" a firebase database
      firebase
        .database()
        .ref("form")
        .push(params)
        .then(() => {
          // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
          showAlert("success", "Your message was sent successfull");
        })
        .catch(() => {
          // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error
          showAlert("danger", "Your message could not be sent");
        });
      // limpiamos nuestro formulario llamando la funcion resetform
      resetForm();
    } else {
      // En caso de no llenar los elementos necesario despliega un mensaje de alerta
      showAlert("warning", "Please fill the form");
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
            <h2>Contact Form</h2>
            <form
              onSubmit={sendMessage.bind(this)}
              ref={input => {
                contactForm = input;
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  ref={input => {
                    inputName = input;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  ref={input => {
                    inputEmail = input;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <select
                  className="form-control"
                  id="city"
                  ref={input => {
                    inputCity = input;
                  }}
                >
                  <option value="México">México</option>
                  <option value="Guadalajara">Guadalajara</option>
                  <option value="Monterrey">Monterrey</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="+52 1"
                  ref={input => {
                    inputPhone = input;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
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
