import React from "react";
import "./Register.scss";
const Register = () => {
  return (
    <div className="app__register">
      <div className="app__register__wrapper">
        <h2>Hey 👋, Welcome</h2>
        <form>
          <label htmlFor="email">Full Name</label>
          <input type="text" />
          <label htmlFor="companyName">Company Name</label>
          <input type="text" />
          <label htmlFor="email">Work Email</label>
          <input type="email" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
