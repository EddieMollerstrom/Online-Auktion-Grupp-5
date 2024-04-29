import { useEffect, useState } from "react"

export default function ProductList(props) {
  const values = props.values
  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    const fetchProductsData = async () => {
      if (values.products) {
        try {
          const productDetails = []
          for (const productId of values.products) {
            const response = await fetch(`/api/products/${productId}`)
            if (!response.ok) {
              throw new Error("Failed to fetch product details")
            }
            const productData = await response.json()
            productDetails.push(productData)
          }
          setProductsData(productDetails)
        } catch (error) {
          console.error("Error fetching product details:", error)
          setProductsData([]) // Set productsData to empty array in case of error
        }
      }
    }

    fetchProductsData()
  }, [values.products])

  if (!values.products) {
    return <div className="text-custom-gry">Laddar...</div>
  }

  return (
    <>
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
  )
}
