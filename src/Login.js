import React, {useState} from "react";

function Login({handleCreateAccount, handleLogIn}){
  const [hasAccount, setHasAccount]=useState(true)
  const [userInfo, setUserInfo]=useState(
    {
      username: "",
      password: ""
    }
    )

    function handleChange(e){
      const updatedInfo = {
        ...userInfo,
        [e.target.name]: e.target.value
      }
      setUserInfo(updatedInfo)
    }

    function handleLogInClick(e){
      e.preventDefault()
      handleLogIn(userInfo)
    }

    function handleCreateAccountClick(e){
      e.preventDefault()
      if (userInfo.username === "" || userInfo.password === ""){
        alert("Username and password cannot be left blank")
      }else {
        handleCreateAccount(userInfo)
        setHasAccount(true)
      }
    }

  return(
    <div className="accountForm">
      <form id={hasAccount ? "logInForm" : "createAccountForm"} onSubmit={hasAccount ? handleLogInClick : handleCreateAccountClick} >
        username:<input value={userInfo.username} name="username" onChange={handleChange} /><br/>
        password:<input type="password" value={userInfo.password} name="password" onChange={handleChange} />
        <br/>
        <a className="clickLink" onClick={()=>setHasAccount(!hasAccount)}>{hasAccount ? "Create an account" : "Have an account? Login" }</a>
        <input type="submit" className="sendButton" id="submitLogIn" />
      </form>
    </div>
  )
}

export default Login