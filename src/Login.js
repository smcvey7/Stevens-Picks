import React, {useState} from "react";

function Login({ currentUser, handleLogIn, createAccount }){
  const [userInfo, setUserInfo] =useState({
    username: "",
    password: ""
  })
  const [hasAccount, setHasAccount]=useState(true)

  function handleChange(e){
    const updatedInfo = {
      ...userInfo,
      [e.target.name]: e.target.value
    }
    setUserInfo(updatedInfo)
  }

  function onSubmitClick(e){
    e.preventDefault();
    if (userInfo.username ==="" || userInfo.password==="") alert("Fields cannot be blank")
    else {
      handleLogIn(userInfo)
      setUserInfo({
        username: "",
        password: ""
      })
    }
  }

  function onCreateAccountClick(e){
    e.preventDefault();
    if (userInfo.username ==="" || userInfo.password==="") alert("Fields cannot be blank")
    else {
      createAccount(userInfo)
      setUserInfo({
        ...userInfo,
        password: ""
      })
      setHasAccount(true)
    }
  }


  if (!currentUser) return(
    hasAccount ?
    <div>
      <div className="accountForm">
      <h2>Login</h2>
        <form id="logInForm" onSubmit={onSubmitClick}>
          username:<input value={userInfo.username} name="username" onChange={handleChange}/><br/>
          password:<input type="password" name="password" value={userInfo.password} onChange={handleChange}/><br/>
          <a className="clickLink" onClick={()=>setHasAccount(false)}>Create an account here</a>
          <input type="submit" className="sendButton" id="submitLogIn" />
        </form>
      </div>
    </div>
    :
    <div>
      <div className=" accountForm" >
        <h2>Create Account</h2>
        <form  id="createAccountForm" onSubmit={onCreateAccountClick}>
          username:<input value={userInfo.username} name="username" onChange={handleChange}/><br/>
          password: <input type="password" name="password" value={userInfo.password} onChange={handleChange}/><br/>
          <a className="clickLink" onClick={()=>setHasAccount(true)}>Have an account? Login here</a>
          <input type="submit" className="sendButton" id="submitCreateAccount" />
        </form>
      </div>
    </div>
  )
}

export default Login