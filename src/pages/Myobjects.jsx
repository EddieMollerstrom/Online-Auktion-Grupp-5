import ProductList from "../components/ProductList.jsx";

export default function Myobjects() {
    const values = {
      title: "MINA ANNONSER:",
    };
  
    return (
      <>
        <section className="p-16">
          <h2 className="font-bold text-custom-green">Sparade Annonser!</h2>
          <p className="text-custom-green">Här kan du se dina sparade annonser.</p>
          <ProductList values={values} />
        </section>
      </>
    );
  }
  
  