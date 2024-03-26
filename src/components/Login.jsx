import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const HandleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      const user = users.find(
        (u) => u.userName === username && u.password === password
      );
      if (user) {
        setMessage(`Välkommen ${username}`);
        setUsername("");
        setPassword("");

        setTimeout(() => {
          setMessage("");
          //Routa till mina sidor?
        }, 2000);
      } else {
        setMessage("Fel användarnamn eller lösenord");
      }
    } catch (error) {
      console.error("Error", error);
      setMessage("Något gick fel. Prova igen!");
    }
  };

  return (
    <>
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
        <button className="login-btn bg-custom-yellow" onClick={HandleLogin}>
          LOGGA IN
        </button>
        <p className="login-msg text-custom-white">{message}</p>
      </div>
    </>
  );
}
