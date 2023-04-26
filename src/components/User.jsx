import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import './User.css'
import { useNavigate } from 'react-router-dom'

export default function User() {
  const [editingPassword, setEditingPassword] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [storedPassword, setStoredPassword] = useState(localStorage.getItem("password"))
  const navigate = useNavigate();

  const toggleChangePassword = () => {
    setEditingPassword(!editingPassword)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    localStorage.setItem("password", newPassword)
    setNewPassword('')
    setEditingPassword(!editingPassword)
  }

  useEffect(() => {
    setStoredPassword(localStorage.getItem("password"))
  }, [])

  return (
    <>
      <Navbar />
      <div className="userDetails">
        <div className="username">
          <label className="userProfile" htmlFor="username">Username : </label>
          <input type="text" className="userNameInput userProfile" id="username" value="admin" readOnly />
        </div>
        <div className="password">
          {editingPassword ? (
            <>
              <label className="userProfile" htmlFor="newPassword">New Password :</label>
              <input
                type="password"
                className="newPassword"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </>
          ) : (
            <>
              <label className="userProfile" htmlFor="password">Password :</label>
              <input type="text" className="userNameInput" id="password" value="*****" readOnly />
            </>
          )}
        </div>

        <div className="buttonContainer">
          {editingPassword ? (
            <button className="userProfileButton" onClick={submitHandler}>
              Save Password
            </button>
          ) : (
            <button className="userProfileButton" onClick={toggleChangePassword}>
              Change Password
            </button>
          )}
          <button className="userProfileButton" onClick={() => navigate('/Login')}>Logout</button>
        </div>
      </div>
    </>
  )
}
