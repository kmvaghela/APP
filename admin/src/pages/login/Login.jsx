import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50%",
          width: "50%",
          boxShadow: "1px 3px 5px 1px #0000001A",
          borderRadius: 15,
        }}
      >
        <h2
          style={{ marginBottom: 20, color: "gray", fontFamily: "monospace" }}
        >
          Login
        </h2>
        <input
          style={{ padding: 10, marginBottom: 20, width: 250 }}
          placeholder="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{ padding: 10, marginBottom: 20, width: 250 }}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleClick}
          style={{ padding: 10, marginTop: 20, width: 100 }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
