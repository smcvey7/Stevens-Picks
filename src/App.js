import React, {useState} from 'react';
import {Route, Switch, useHistory} from "react-router-dom"
import './App.css';
import Home from './Home'
import NavBar from './NavBar';
import Read from './Read';
import Watch from './Watch';
import Listen from './Listen';

function App() {
  return (
    <div className="App">
      <h1>Steven's Picks</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/read">
          <Read />
        </Route>
        <Route exact path="/watch">
          <Watch />
        </Route>
        <Route exact path="/listen">
          <Listen />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
