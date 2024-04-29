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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center p-8 h-screen max-w-55 rounded-r-lg text-center relative bg-custom-white">
      <h2 className="relative bottom-16 text-5xl font-bold text-black">
        SKAPA KONTO
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-3 mb-4 bg-gray-200 rounded-md text-lg font-bold placeholder-black"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setMessage("");
          }}
          onKeyDown={handleKeyPress}
          required
        />
        <input
          className="w-full px-4 py-3 mb-4 bg-gray-200 rounded-md text-lg font-bold placeholder-black"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
          onKeyDown={handleKeyPress}
          required
        />
        <input
          className="w-full px-4 py-3 mb-4 bg-gray-200 rounded-md text-lg font-bold placeholder-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage("");
          }}
          onKeyDown={handleKeyPress}
          required
        />
        <button
          className="relative top-5 w-full px-6 py-4 text-white bg-custom-yellow rounded-full font-bold text-lg transition duration-300 ease-in-out hover:bg-yellow-500"
          type="submit"
        >
          Sign Up
        </button>
        <p className="relative top-20 break-words text-custom-green text-lg font-bold">
          {message}
        </p>
      </form>
    </div>
  );
}
