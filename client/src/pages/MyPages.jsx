import { useEffect, useState } from "react"
import ProductList from "../components/ProductList.jsx"

export default function MyPages() {
  const [userData, setUserData] = useState({
    currentSales: [],
    sold: [],
    notSold: [],
  })
  const values = {
    title: "AKTIVA ANNONSER:",
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/testUsers")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error("Fel vid fetch", error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <section className="p-16">
        <h2 className="font-bold text-custom-green">
          Välkommen {userData.firstName}!
        </h2>
        <p className="text-custom-green">Det här är dina sidor.</p>

        <div className="overview border-4 border-custom-green">
          <div className="head border-b-[3px] border-custom-green  flex justify-start items-center font-bold text-custom-green">
            FÖRSÄLJNINGSÖVERSIKT:
          </div>
          <div className="activeWrapper w-full flex text-center text-custom-gry">
            <section className="flex justify-center items-center">
              {userData.currentSales.length}
              <br />
              AKTIVA
            </section>
            <section className="flex justify-center items-center">
              {userData.sold.length}
              <br />
              SÅLDA
            </section>
            <section className="flex justify-center items-center">
              {userData.notSold.length}
              <br />
              EJ SÅLDA
            </section>
          </div>
        </div>

        <ProductList values={values} />
      </section>
    </>
  )
}
