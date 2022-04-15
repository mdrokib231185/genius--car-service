import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Social from "../Social/Social";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const loginNavigate = () => {
    navigate("/login");
  };
  if (user) {
    console.log("user", user);
    navigate("/home");
  }
  if (loading || updating) {
    return <Loading></Loading>
  }

  const handelRegistered = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    
  };
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
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={agree ? "ps-2 text-primary" : "ps-2 text-danger"}
          htmlFor="terms"
        >
          Accept Terms and Conditions
        </label>
        <button
          disabled={!agree}
          className=" w-50  mx-auto d-block btn btn-primary"
          type="submit"
        >
          Registered
        </button>
      </form>
      <p>
        Already Registered?{" "}
        <Link
          to={"/login"}
          className="text-danger text-decoration-none"
          onClick={loginNavigate}
        >
          login
        </Link>
      </p>
      <Social></Social>
    </div>
  );
};

export default Register;
