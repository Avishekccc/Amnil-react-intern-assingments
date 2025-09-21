import React from 'react'
import LoginForm from '../organism/LoginForm'

const LoginPage = () => {
  return (
    <div
      style={{
        minHeight: "80dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <LoginForm />
    </div>
  );
}

export default LoginPage