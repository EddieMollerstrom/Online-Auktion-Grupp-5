export default function AboutUs() {
  return (
    <div className="sm:flex items-center max-w-screen-lg bg-custom-white mx-auto">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center bg-custom-green p-10 rounded-full">
          <img src="../public\images/workpicture.png" alt="About Us" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-custom-green border-b-2 border-custom-yellow uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl text-custom-yellow">
            About <span className="text-custom-green">Our Company</span>
          </h2>
          <p className="text-custom-green text-xl">
            Upptäck vår unika auktionsplattform för djur där varje bud är en
            möjlighet att föra hem en del av naturens skönhet. Från majestätiska
            lejon till eleganta svanar, vårt urval hyllar mångfalden i
            djurlivet.
          </p>
        </div>
      </div>
    </div>
  );
}
