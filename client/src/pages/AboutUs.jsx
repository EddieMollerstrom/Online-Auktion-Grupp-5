export default function AboutUs() {
  return (
    <div className="flex flex-col my-10 mx-auto w-2/3">
      <div className="sm:flex items-center max-w-screen-lg bg-custom-white mx-auto">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center bg-custom-green p-10 rounded-full">
            <img src="../images/workpicture.png" alt="About Us" />
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
              möjlighet att föra hem en del av naturens skönhet. Från
              majestätiska lejon till eleganta svanar, vårt urval hyllar
              mångfalden i djurlivet.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-custom-white p-5 w-full mx-auto">
        <h2 className="text-center my-8 text-custom-green text-4xl font-medium">
          Sociala medier
        </h2>
        <div className="flex justify-evenly">
          <a href="https://facebook.com" target="_blank">
            <img
              className="h-16 px-5 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
              alt="facebooklogo"
            />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img
              className="h-16 px-5 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              alt="instagramlogo"
            />
          </a>
          <a href="https://x.com" target="_blank">
            <img
              className="h-16 px-5 cursor-pointer"
              src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1713312000&semt=ais"
              alt="xlogo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
