import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <div className="app__login">
      <div className="app__login__wrapper">
        <h2>Hey 👋, Welcome</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
