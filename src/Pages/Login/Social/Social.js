import React from "react";
import google from "../../../images/google1.png";
import facebook from "../../../images/facebook.png";
import github from "../../../images/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";


  

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  let errorElement;

  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message} {error1?.message }</p>
      </div>
    );
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }
  if (loading || loading1) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1.5px" }} className="bg-dark w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1.5px" }} className="bg-dark w-50"></div>
      </div>
      <p>{errorElement}</p>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-50 d-flex mx-auto justify-content-center  my-3"
        >
          <img src={google} alt="" />
          <span className="px-2 mt-2">Google Sign in</span>
        </button>
        <button className="btn btn-primary w-50 d-flex mx-auto justify-content-center my-3">
          <img src={facebook} alt="" />
          <span className="px-2 mt-2">Facebook Sign in</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary w-50 d-flex mx-auto justify-content-center my-3"
        >
          <img src={github} alt="" />
          <span className="px-2 mt-2">Github Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default Social;
