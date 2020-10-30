import React, { useState } from "react";
import { Button, Checkbox, Input } from "semantic-ui-react";
import "../sass/LoginForm.scss";
import { setAuthState } from "../helpers/authCheck";
import { useHistory } from "react-router-dom";
import usersJson from "../api-mock/user.json";

function LoginForm() {
  const router = useHistory();
  const [creditials, setCreditials] = useState({ email: "", password: "" });

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const user = usersJson.filter(
        (u) =>
          u.password === creditials.password && u.email === creditials.email
      );

      if (user.length) {
        setAuthState(user[0]);
        router.push("/");
      } else {
        alert("invalid user creditials");
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };

  const handleInputChanges = (e) => {
    setCreditials({ ...creditials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-form">
      <div className="header">
        <h1>Welcome</h1>
        <h4>Login to continue</h4>
      </div>
      <form onSubmit={onsubmit}>
        <Input
          name="email"
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Email Address"
          type="email"
          className="mb-10"
          required
          onChange={handleInputChanges}
          value={creditials.email}
        />
        <Input
          name="password"
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="password"
          type="password"
          required
          minLength={3}
          onChange={handleInputChanges}
          value={creditials.password}
        />
        <div className="remember-me-container">
          <Checkbox label="Remember Me" />
          <a href="#">Forgot Password?</a>
        </div>
        <Button color="blue" circular fluid type="submit">
          LOGIN
        </Button>
        <div className="divider-container">
          <div className="divider" />
          <label>Or</label>
          <div className="divider" />
        </div>
        <Button
          basic
          circular
          icon="key"
          labelPosition="left"
          content="LOGIN WITH SSO"
          fluid
          type="button"
        />
      </form>
    </div>
  );
}

export default LoginForm;
