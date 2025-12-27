import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const Register = () => {
  const [error,setError]=useState('');
  const handleRegister = (event) => {
    event.preventDefault(); // Fixed capitalization

    const email = event.target.email.value;
    const password = event.target.password.value;

    // Call the function and chain the .then() directly to it
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("Success:", result.user);
      })
      .catch((error) => {
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
        setError(error.message)
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register Now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  {/* Added name="email" */}
                  <input name="email" type="email" className="input" placeholder="Email" required />
                  
                  <label className="label">Password</label>
                  {/* Added name="password" */}
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                {
                  error && <p className="text-red-500">{error}</p>
                }
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;