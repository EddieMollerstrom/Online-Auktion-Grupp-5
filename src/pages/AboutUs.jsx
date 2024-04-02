export default function AboutUs() {
  return (
    <div className="sm:flex items-center max-w-screen-xl bg-custom-white mx-auto">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center bg-custom-green p-10 rounded-xl">
          <img src="../public\images/hammer.png" alt="About Us" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-custom-yellow uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl text-custom-yellow">
            About <span className="text-custom-green">Our Company</span>
          </h2>
          <p className="text-custom-green text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            commodi doloremque, fugiat illum magni minus nisi nulla numquam
            obcaecati placeat quia, repellat tempore voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
}
