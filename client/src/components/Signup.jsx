import React, { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      console.log("User created successfully");

      // Reset form fields
      setUsername("");
      setEmail("");
      setPassword("");

      // Handle success, e.g., redirect to login page
    } catch (error) {
      console.error("Error creating user:", error);
      alert(error.message);
    }
  };

  return (
    <div className="signup-container bg-custom-white">
      <h2 className="title-signup">SKAPA KONTO</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
}
