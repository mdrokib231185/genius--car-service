import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import "./Login.css";
import Social from "./Social/Social";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handelSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email, password);
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://boiling-wildwood-15479.herokuapp.com/login",
      { email }
    );
    console.log(data);
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  const SendPasswordReset = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please Enter Your email");
    }
  };

  if (user) {
    // navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  const registerNavigate = (event) => {
    navigate("/register");
  };

  return (
    <div id="login-form" className="container  w-50 mx-auto mt-5 color-white">
      <h2 className="text-center">Please Login</h2>

      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button
          className="w-50 text-center  mx-auto d-flex"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      {errorElement}

      <p>
        New to genius car?{" "}
        <Link
          to={"/register"}
          className="text-primary text-decoration-none"
          onClick={registerNavigate}
        >
          Register Now
        </Link>
      </p>
      <p>
        ForgetPassword?{" "}
        <button
          className="btn btn-link text-decoration-none"
          onClick={SendPasswordReset}
        >
          Forget Password
        </button>
      </p>
      <Social></Social>
    </div>
  );
};

export default Login;
