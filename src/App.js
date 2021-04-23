// import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Component/Navbar/Navbar";

import Home from "./Container/Home/Home";
import Form from "./Component/Form/Form";

function App() {
  const [newUser, setNewUser] = useState("");

  return (
    <div className="App">
      <h1>hello mala</h1>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home newUser={newUser} />
          </Route>
          <Route exact path="/formulaire">
            <Form setNewUser={setNewUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
