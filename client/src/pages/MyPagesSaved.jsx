import { useEffect, useState } from "react"
import ProductList from "../components/ProductList.jsx"

export default function MyPagesSavedObjects() {
  const [savedProducts, setSavedProducts] = useState([])

  useEffect(() => {
    async function fetchSavedProducts() {
      try {
        const response = await fetch("/api/login")
        const data = await response.json()
        setSavedProducts(data.user.savedProducts)
      } catch (error) {
        console.error("Error fetching saved products:", error)
      }
    }
    fetchSavedProducts()
  }, [])

  const values = {
    title: "SPARADE OBJEKT:",
    products: savedProducts,
  }

  return (
    <>
      <section className="p-16">
        <h2 className="font-bold text-custom-green">Sparade objekt!</h2>
        <p className="text-custom-green">Här kan du se dina sparade objekt.</p>
        <ProductList values={values} />
      </section>
    </>
  )
}
