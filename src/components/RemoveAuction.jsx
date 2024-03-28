export default function RemoveAuction() {
  function removeAuction() {}

  return (
    <>
      <div>
        <button
          onClick={removeAuction}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Remove Auction
        </button>
      </div>
    </>
  );
}
