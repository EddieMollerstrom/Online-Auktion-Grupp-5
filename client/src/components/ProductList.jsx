export default function ProductList({ values }) {
  const { title } = values;

  return (
    <>
      <div className="p-4 head border-4 border-solid rounded-t-2xl  border-custom-green flex justify-start items-center font-bold text-custom-green">
        {title}
      <div className="overview border-4 border-custom-green">
        <div className="head border-b-[3px] border-custom-green  flex justify-start items-center font-bold text-custom-green">
          {values.title}
        </div>
        <div className="activeWrapper w-full flex text-custom-gry flex-col">
          {productsData.map((product) => (
            <div key={product._id} className="product-item ml-4">
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

{
  /* <div className="activeWrapper w-full flex text-center text-custom-gry"></div>; */
}
