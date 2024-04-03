export default function ProductCard(props) {
  const { img, title, price, ends, bidCount } = props.product;

  return (
    <>
      <li className="flex flex-col gap-1 size-52">
        <img
          className="size-52 bg-contain aspect-square pointer-events-auto"
          src={img}
        />
        <div className="flex flex-col gap-3 p-1.5 items-start ">
          <h3
            className="text-xl font-normal cursor-pointer hover:underline"
            key={title}
          >
            {title}
          </h3>
          <p className="text-base font-sm mb-auto cursor-pointer">{ends}</p>
          <span className="block text-base font-normal cursor-pointer">
            {price}kr {bidCount} bud
          </span>
        </div>
      </li>
    </>
  );
}
