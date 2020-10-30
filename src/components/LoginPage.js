import React from "react";
import LoginForm from "./LoginForm";
import "../sass/LoginPage.scss";

function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="content">
        <div className="logo-container">
          <h1>Company Logo</h1>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h3>
        </div>
        <LoginForm />
      </div>
      <div className="footer">
        @
        <a href="#" className="company-name">
          Company Name
        </a>{" "}
        2020, All Rights Reserved.
      </div>
    </div>
  );
}

export default LoginPage;
