import ProductList from "../components/ProductList.jsx";

export default function MyPagesBids() {
  const values = {
    title: "DINA BUD:",
  };

  return (
    <>
      <section className="p-16">
        <h2 className="font-bold text-custom-green">Dina Bud!</h2>
        <p className="text-custom-green">Här kan du se dina bud!.</p>
        <ProductList values={values} />
      </section>
    </>
  );
}
