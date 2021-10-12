import React, { useState } from "react";
import axios from "axios";

const MyForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/b08bb78b-eba5-4b22-ac8d-29c568d6370f",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(
          true,
          "Danke für Deine Anfrage!\nIch melde mich innerhalb von 24 Stunden bei Dir.",
          form
        );
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <div className="wrapper style1 align-center">
      <div className="kontakt">
        <h2 id="Terminanfrage">Kontakt</h2>
        <form onSubmit={handleOnSubmit}>
          <div className="form-group" id="emailBar">
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="E-Mail-Adresse"
              required="required"
            />
          </div>

          <div className="fields">
            <div className="field half">
              <input
                type="text"
                name="vorname"
                className="form-control"
                id="exampleInputVName"
                placeholder="Vorname"
                required="required"
              />
            </div>
            <div className="field half">
              <input
                type="text"
                name="nachname"
                className="form-control"
                id="exampleInputNName"
                placeholder="Nachname"
                required="required"
              />
            </div>
          </div>
          <div className="form-group" id="antwortBar">
            <label for="exampleFormControlSelect1">
              Wie bist Du auf mich aufmerksam geworden?
            </label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="platform"
              required="required"
            >
              <option>Social Media</option>
              <option>Google</option>
              <option>Empfehlung</option>
            </select>
          </div>

          <div className="field">
            <label for="message">Deine Nachricht an mich</label>
            <textarea
              name="message"
              id="message"
              rows="6"
              required="required"
              name="nachricht"
            ></textarea>
          </div>

          <input type="checkbox" checked />

          <ul className="actions special" id="buttonKontakt">
            <li>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={serverState.submitting}
              >
                Senden
              </button>
            </li>
            <li>
              <input type="checkbox" id="horns" name="horns"></input>
            </li>
          </ul>

          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default MyForm;
