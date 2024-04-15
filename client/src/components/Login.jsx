import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      setMessage("Login successful");

      // Reset form fields
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error during login:", error);
      setMessage(error.message);
    }
  };

  return (
    <div className="login-container bg-custom-green">
      <h2 className="title-login">VÄLKOMMEN TILLBAKA</h2>
      <div className="login-position-handler">
        <input
          type="text"
          placeholder="ANVÄNDARNAMN"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="LÖSENORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-btn bg-custom-yellow" onClick={handleLogin}>
        LOGGA IN
      </button>
      <p className="login-msg">{message}</p>
    </div>
  );
}
