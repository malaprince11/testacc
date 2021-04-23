import React, { useState } from "react";

import "./Form.css";
const url = "https://reqres.in/api/users";

function Form({ setNewUser }) {
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    date: "",
  });

  const requestOptions = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  };

  const requeteFetch = fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setNewUser(data);
      console.log("data", data);
      console.log("request", requestOptions);
    });

  const addNom = (e) => {
    const newNomState = { ...user, nom: e.target.value };
    console.log("**NOM**", e.target.value);
    setUser(newNomState);
  };

  const addPrenom = (e) => {
    const newPrenomState = { ...user, prenom: e.target.value };
    console.log("**PRENOM**", e.target.value);
    setUser(newPrenomState);
  };

  const addDate = (e) => {
    const newDateState = { ...user, date: e.target.value };
    console.log("**Date**", e.target.value);
    setUser(newDateState);
  };

  return (
    <div className="form-align">
      <h1 className="title-form">Remplissez vos informations</h1>
      <form className="container-form">
        <label htmlFor="title">Nom</label>
        <input
          value={user.nom}
          onInput={addNom}
          type="text"
          id="nom"
          placeholder="Entrez votre nom"
        />
        <label htmlFor="title">Prenom</label>
        <input
          value={user.prenom}
          onInput={addPrenom}
          type="text"
          id="prenom"
          placeholder="Entrez votre prenom"
        />
        <label htmlFor="article">Date de naissance</label>
        <input type="date" value={user.date} onInput={addDate}></input>
      </form>
    </div>
  );
}

export default Form;

