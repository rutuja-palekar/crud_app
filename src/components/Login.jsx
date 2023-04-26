import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from './Navbar';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const verifyUsernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const verifyPasswordHandler = (event) => {
    setPassword(event.target.value)
  }

  const setLoginCredentials = () => {
    localStorage.setItem(username, "username")
    localStorage.setItem(password, "password")
  }
  
  const isUserValidHandler = () => {
    const storedUsername = localStorage.getItem("username")
    const storedPassword = localStorage.getItem("password")

    if (username === storedUsername  && password === storedPassword) {
      navigate('/Home')
    }
    else {
      alert("Invalid username or password")
    }
  }

  return (
    <>
      <Navbar />
      <form action="">
        <div className="login">
          <h1>Login</h1>

          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={verifyUsernameHandler} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={verifyPasswordHandler} />
          
          <div className="submitContainer">
          <button className="submit" type="submit" onClick={isUserValidHandler}>Submit</button>
          </div>

        </div>
      </form>
    </>
  )
}

