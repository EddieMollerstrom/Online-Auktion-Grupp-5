export default function LoginSignup() {
  return (
    <>
      <div className="login-signup-main-container">
        <div className="login-container">
          <h2 className="title-login">VÄLKOMMEN TILLBAKA</h2>
          <div className="login-position-handler">
            <input type="text" placeholder="ANVÄNDARNAMN" />
            <input type="password" placeholder="LÖSENORD" />
          </div>
          <button className="login-btn">LOGGA IN</button>
        </div>
        <div className="signup-container">
          <h2 className="title-signup">SKAPA KONTO</h2>
          <div className="signup-position-handler">
            <input type="text" placeholder="ANVÄNDARNAMN" />
            <input type="email" placeholder="EMAIL" />
            <input type="password" placeholder="LÖSENORD" />
          </div>
          <button className="signup-btn">SIGN UP</button>
        </div>
      </div>
    </>
  );
}
