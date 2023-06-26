import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        username,
        password,
      });
      // Handle successful login here
      console.log("Login success:", response.data);
    } catch (error) {
      // Handle login error here
      console.error("Login error:", error);
      setLoginError(true);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      {loginError && <div className="error">Login failed. Please try again.</div>}
    </div>
  );
};

export default LoginPage;
