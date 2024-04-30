export default function ProductList({ values }) {
  const { title } = values;

  return (
    <>
      <div className="p-4 head border-4 border-solid rounded-t-2xl  border-custom-green flex justify-start items-center font-bold text-custom-green">
        {title}
      </div>
    </>
  );
}
