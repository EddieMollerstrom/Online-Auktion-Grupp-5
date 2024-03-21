export default function ProductCard(props) {
  const { img, name, price, description } = props.product;

  return (
    <>
      <li className="flex gap-1">
        <img className="w-36 bg-contain" src={img} />
        <div className="flex flex-col gap-3 p-1.5 items-start">
          <h3 className="text-xl font-normal" key={name}>
            {name}
          </h3>
          <p className="text-base font-sm italic mb-auto">{description}</p>
          <span className="block text-base">{price}</span>
        </div>
      </li>
    </>
  );
}
