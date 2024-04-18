import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-custom-grey flex flex-col text-l uppercase tracking-widest font-bold place-items-center mt-6">
      <h2>Page not found!</h2>
      <p>
        Go to the{" "}
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Homepage
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
