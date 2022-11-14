import React, {useState, useEffect} from 'react';
import {Route, Switch, useHistory} from "react-router-dom"
import './App.css';
import Home from './Home'
import NavBar from './NavBar';
import Category from './Category';
import Login from './Login';
import NewPost from './NewPost';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [createNew, setCreateNew] = useState(false)
  const [posts, setPosts] = useState({
    read: null,
    watch: null,
    listen: null
  })
  const history = useHistory()

  useEffect(()=>{
    fetch(`http://localhost:3000/posts/`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      const updatedPosts = {
        read: [],
        watch: [],
        listen: []
      }
      data.map(post=>{
        updatedPosts[post.type].push(post)
      })
      setPosts(updatedPosts)
    })
  }, [])

  function handleLogIn(userInfo){
    fetch(`http://localhost:3000/users/`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      const userData = data.filter(user=>user.username === userInfo.username)
      if (userData.length === 0) alert(`Username ${userInfo.username} does not exist. Please try again or create an account.`)
      else if (userInfo.username !== userData[0].username || userInfo.password !== userData[0].password) {
        alert("Incorrect username/password combo. Please try again or create an account.")}
      else if (userInfo.username === userData[0].username && userInfo.password === userData[0].password){
        setCurrentUser(userData[0])
        history.push("/")
      }
    })
  }

  function handleCreateAccount(newUser){
    fetch(`http://localhost:3000/users/`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      const userData = data.filter(user=>user.username === newUser.username)
      if (userData.length !== 0) alert(`Username ${newUser.username} already taken. Please select a different username.`)
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
      console.log("account created", data)
    })
        }
    })
  }

  function updateLikes(postId, newLikeCount, type){
    const likeUpdate = {likes: newLikeCount}
    fetch(`http://localhost:3000/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(likeUpdate)
    })
    .then(res=>res.json())
    .then(data=>{
      const postUpdate = posts[type].map(post=>{
        if (post.id === postId){
          return {
            ...post,
            likes: data.likes
          }
        }else return post
      })
      setPosts({
        ...posts,
        [type]: postUpdate
      })
    })
  }

  function createPost(newPost){
    console.log(newPost)
  }

  return (
    <div className="App">
      <h1>Steven's Picks</h1>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {currentUser && !createNew ? <button onClick={()=>setCreateNew(true)}>Create New</button> : <></> }
      {createNew ? <NewPost setCreateNew={setCreateNew} currentUser={currentUser} createPost={createPost}/> : <></>}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/read">
          <Category posts = {posts.read} title="Read" updateLikes={updateLikes} />
        </Route>
        <Route exact path="/watch">
          <Category posts = {posts.watch} title="Watch" updateLikes={updateLikes}/>
        </Route>
        <Route exact path="/listen">
          <Category posts = {posts.listen} title="Listen" updateLikes={updateLikes}/>
        </Route>
        <Route exact path="/login">
          <Login handleLogIn={handleLogIn} handleCreateAccount={handleCreateAccount} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
