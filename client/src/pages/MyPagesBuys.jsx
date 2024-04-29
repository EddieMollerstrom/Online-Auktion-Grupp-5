import ProductList from "../components/ProductList.jsx";

export default function MyPagesBoughtObjects() {
  const values = {
    title: "DINA KÖP:",
  };

  return (
    <>
      <section className="p-16">
        <h2 className="font-bold text-custom-green">Dina köp!</h2>
        <p className="text-custom-green">Här kan du se dina köpta object.</p>
        <ProductList values={values} />
      </section>
    </>
  );
}
