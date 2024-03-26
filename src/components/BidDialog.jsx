export default function BidDialog() {
  return (
    <>
      <dialog id="bidDialog" className="h-44 w-80 rounded-md p-5">
        <div className="flex flex-col justify-center">
          <h2 className="text-center">Lägg bud</h2>
          <input
            type="text"
            placeholder="Bud"
            className="border-2 rounded-md p-1 mt-2 mb-2 border-solid border-custom-grey"
          />
          <br />
          <button
            onClick={() => document.getElementById("bidDialog").close()}
            className="border-2 border-solid border-custom-green bg-custom-green text-custom-white rounded-md p-1 hover:bg-custom-white hover:text-custom-green"
          >
            Stäng
          </button>
        </div>
      </dialog>

      <dialog id="buyDialog" className="h-44 w-80 rounded-md p-5">
        <div className="flex flex-col justify-center">
          <h2 className="text-center mb-2">Köp nu</h2>
          <button className="border-2 border-solid border-custom-green hover:bg-custom-green hover:text-custom-white rounded-md p-1 bg-custom-white text-custom-green">
            Köp
          </button>
          <br />
          <button
            onClick={() => document.getElementById("buyDialog").close()}
            className="border-2 border-solid border-custom-green bg-custom-green text-custom-white rounded-md p-1 hover:bg-custom-white hover:text-custom-green"
          >
            Stäng
          </button>
        </div>
      </dialog>
    </>
  );
}
