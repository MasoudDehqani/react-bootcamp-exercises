import React, { useState } from 'react'

const userInfo = {
  username: "username", password: "1234"
}

function Form() {

  const [userNameInput, setUserNameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [invalid, setInvalid] = useState(false)
  const [auth, setAuth] = useState(false)

  function handleInput(e: React.BaseSyntheticEvent) {
    console.log(e.target.name)
    e.target.name === 'username' && setUserNameInput(e.target.value)
    e.target.name === 'password' && setPasswordInput(e.target.value)
  }

  function submitHandle(e: React.BaseSyntheticEvent) {
    e.preventDefault()
    console.log(e.target.elements.username)
    if (e.target.elements.username.value === userInfo.username && e.target.elements.password.value === userInfo.password) {
      setAuth(true)
      setInvalid(false)
      alert("Wellcome")
    } else {
      setInvalid(true)
      setAuth(false)
    }
  }
  //whether id or name for inputs goes to e.target.elements
  return (
    <form onSubmit={(e) => submitHandle(e)}>
      <label htmlFor="username"></label>
      <input type="text" id="username" value={userNameInput} onChange={handleInput} name="username" />
      <label htmlFor="password"></label>
      <input type="text" id="password" value={passwordInput} onChange={handleInput} name="password" />
      <input type="submit"/>
      {auth && <p>Wellcome</p>}
      {invalid && <p>Invalid input</p>}
    </form>
  )
}

export default Form
