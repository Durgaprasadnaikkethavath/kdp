import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="login_container">
        <div>
          <h1 className="great-vibes-regular login_heading">{currentState}</h1>
          <form onSubmit={onSubmitHandler} className="login_part">
            {currentState === "Login" ? (
              ""
            ) : (
              <input type="text" placeholder="Name" />
            )}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="forget_password_container">
              <p>Forget your password?</p>
              <div>
                {currentState === "Login" ? (
                  <p onClick={() => setCurrentState("Sign Up")}>
                    Create account
                  </p>
                ) : (
                  <p onClick={() => setCurrentState("Login")}>Login Here</p>
                )}
              </div>
            </div>
            <div className="login_sign_btn">
              <button>
                {currentState === "Login" ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
