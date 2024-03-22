import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        email: email,
        userName: username,
        password: password,
      };
      await axios.post("http://localhost:3000/users", newUser);

      setEmail("");
      setUsername("");
      setPassword("");
      alert("User signed up successfully!");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred while signing up.");
    }
  };

  return (
    <div className="signup-container bg-custom-white">
      <h2 className="title-signup">SKAPA KONTO</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="signup-btn bg-custom-yellow" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default function LoginSignup() {
  return (
    <>
      <div className="login-signup-main-container">
        <div className="login-container bg-custom-green">
          <h2 className="title-login">VÄLKOMMEN TILLBAKA</h2>
          <div className="login-position-handler">
            <input type="text" placeholder="ANVÄNDARNAMN" />
            <input type="password" placeholder="LÖSENORD" />
          </div>
          <button className="login-btn bg-custom-yellow">LOGGA IN</button>
        </div>
        <Signup />
      </div>
    </>
  );
}
