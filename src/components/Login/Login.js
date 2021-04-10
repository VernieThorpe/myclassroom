import { Button } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logo.png";
import { useLocalContext } from "../../context/context";
import "./style.css";

const Login = () => {
  const { login, loggedInUser } = useLocalContext();

  console.log(loggedInUser);
  return (
    <div className="login">
      <img className="login__logo" src={logo} alt="Classroom" width="500" />

      <Button
        style={{
          maxWidth: "1000px",
          maxHeight: "1000px",
          minWidth: "500px",
          minHeight: "100px",
          marginBottom: "150px",
        }}
        variant="outlined"
        color="secondary"
        size="large"
        onClick={() => login()}
      >
        Login Now!
      </Button>
    </div>
  );
};

export default Login;
