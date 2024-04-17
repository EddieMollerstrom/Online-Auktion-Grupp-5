import React, { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
      } else {
        setUsername("");
        setEmail("");
        setPassword("");

        setMessage("Ny användare skapad!");
      }

      // Reset form fields
    } catch (error) {
      console.error("Error creating user:", error);
      setMessage(error.message);
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
          onChange={(e) => {
            setUsername(e.target.value);
            setMessage("");
          }}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage("");
          }}
          required
        />
        <button className="signup-btn bg-custom-yellow" type="submit">
          Sign Up
        </button>
        <p className="relative top-20 break-words text-custom-green text-lg font-bold">
          {message}
        </p>
      </form>
    </div>
  );
}
