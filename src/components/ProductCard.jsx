export default function ProductCard(props) {
  const { img, name, price, description } = props.product;

  return (
    <>
      <li className="flex-col bg-custom-white inline-block border border-custom-grey p-1">
        <img className="w-64" src={img} />
        <div>
          <h2 key={name}>{name}</h2>
          <p>{description}</p>
          <span>{price}</span>
        </div>
      </li>
    </>
  );
}
