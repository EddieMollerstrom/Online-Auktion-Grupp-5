import Login from "../components/Login.jsx";
import Signup from "../components/Signup.jsx";

export default function LoginSignup() {
  return (
    <>
      <div className="flex justify-between w-1/2 mx-auto my-10 rounded-lg shadow-xl">
        <Login />
        <Signup />
      </div>
    </>
  );
}
