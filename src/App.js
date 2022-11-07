import React, {useState} from 'react';
import {Route, Switch, useHistory} from "react-router-dom"
import './App.css';
import Home from './Home'
import NavBar from './NavBar';
import Read from './Read';
import Watch from './Watch';
import Listen from './Listen';
import Login from './Login';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  function handleLogIn(userInfo){

  }

  function createAccount(userInfo){
    const newUser = {
      username: userInfo.username,
      password: userInfo.password
    }
    
    fetch(`http://localhost:3000/users/`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      const userData = data.filter(user=>user.username === userInfo.username)
      if (userData.length !== 0) alert(`Username ${userInfo.username} already taken. Please select a different username.`)
      else{
        fetch(`http://localhost:3000/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("posted", data)
    })
        }
    })
  }

  return (
    <div className="App">
      <h1>Steven's Picks</h1>
      <NavBar currentUser={currentUser} />
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
          <Login currentUser={currentUser} handleLogIn={handleLogIn} createAccount={createAccount} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
