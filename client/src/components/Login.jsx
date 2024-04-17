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
      } else {
        setUsername("");
        setPassword("");

        setMessage(`Välkommen ${username}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage(error.message);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center p-8 h-screen max-w-80 rounded-l-lg text-center relative bg-custom-green">
      <h2 className="relative bottom-24 text-3xl font-bold text-white">
        VÄLKOMMEN TILLBAKA
      </h2>
      <div className="relative bottom-5">
        <input
          className="w-full px-4 py-3 mb-4 bg-gray-200 rounded-md text-lg font-bold placeholder-black"
          type="text"
          placeholder="ANVÄNDARNAMN"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setMessage("");
          }}
        />
        <input
          className="w-full px-4 py-3 mb-4 bg-gray-200 rounded-md text-lg font-bold placeholder-black"
          type="password"
          placeholder="LÖSENORD"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage("");
          }}
        />
      </div>
      <button
        className="w-full px-6 py-4 text-white bg-custom-yellow rounded-full font-bold text-lg transition duration-300 ease-in-out hover:bg-yellow-500"
        onClick={handleLogin}
      >
        LOGGA IN
      </button>
      <p className="relative top-20 break-words text-custom-white text-lg font-bold">
        {message}
      </p>
    </div>
  );
}
