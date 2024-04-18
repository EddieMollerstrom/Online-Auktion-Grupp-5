export default function ProductList(props) {
  const values = props.values;

  return (
    <>
      <div className="overview border-4 border-custom-green">
        <div className="head border-b-[3px] border-custom-green  flex justify-start items-center font-bold text-custom-green">
          {values.title}
        </div>
        <div className="activeWrapper w-full flex text-center text-custom-gry"></div>
      </div>
    </>
  );
}
