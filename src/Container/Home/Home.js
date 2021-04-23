import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const moment = require("moment");

function Home({ newUser }) {

  let daysUntilBirthday;
  if (newUser.date) {
    const birthdate = newUser.date;

    const today = moment().format("YYYY-MM-DD");

    const years = moment().diff(birthdate, "years");

    const adjustToday = birthdate.substring(5) === today.substring(5) ? 0 : 1;

    const nextBirthday = moment(birthdate).add(years + adjustToday, "years");

    daysUntilBirthday = nextBirthday.diff(today, "days");
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>
      <div>
        <h3>
          Bonjour {newUser.nom} {newUser.prenom} votre anniversaire est dans :{" "}
          {newUser.date ? daysUntilBirthday : "entrez votre date de naissance "}
          jour(s).Si cela est incorrect vous pouvez modifier les informations{" "}
          <Link to="/formulaire">ici</Link>{" "}
        </h3>
      </div>
    </div>
  );
}

export default Home;
