import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {

      const navigate = useNavigate()
      const loginNavigate = () => { 
            navigate("/login")
      }

      const handelRegistered = (event) => {
            event.preventDefault()  
            const name = event.target.name.value
            const email = event.target.email.value
            const password = event.target.password.value
      }
  return (
    <div className="register-form mt-4">
      <h1>Please register this form</h1>
      <form onSubmit={handelRegistered}>
        <input type="text" name="name" id="" placeholder="Enter Your name" />
        <br />
        <input type="email" name="email" id="" placeholder="Enter Your Email" />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Please Enter Your PassWord"
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Registerd
        </button>
      </form>
      <p>
        Already Registerd?{" "}
        <Link
          to={"/login"}
          className="text-danger text-decoration-none"
          onClick={loginNavigate}
        >
          login
        </Link>
      </p>
    </div>
  );
};

export default Register;
