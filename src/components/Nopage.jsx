import React from 'react'

const elementStyle = {
  textAlign: "center",
  fontWeight: "800",
  color: "black",
  fontSize: "2rem",
  textTransform: "Capitalize"
}

export default function Nopage() {
  return (
    <>
      <h1 style={elementStyle}> 404 - Page Not Found </h1>
      <p style={elementStyle}> The page you are looking for does not exist </p>
    </>
  )
}
