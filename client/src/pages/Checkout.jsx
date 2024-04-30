import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function DeleteProduct ({ productId }) {
  const [completed, setCompleted] = useState(false);
useEffect(() => {
  console.log("Deleting product... gvyicviyciyctklhljovy");
  const deleteProduct = async () => {
    console.log("Deleting product... 0000000000000000");
    const response = await fetch(`/api/products/`, {
      method: "DELETE",
    });
    console.log(response);
    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
      window.location.href = result.url;
    } else {
      // Handle other status codes, if needed
      console.error("Failed to delete product:", response.statusText);
    }
  }
  deleteProduct()
}, []);
 

  return (
    <div className="text-custom-grey flex flex-col text-l uppercase tracking-widest font-bold place-items-center mt-6">
    <h2>Din betalning är genomförd</h2>
    <p>
      Go to the{" "}
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Homepage
      </Link>
      .
    </p>
  </div>
  );
};
/*const NotFound = () => {
  return (
    <div className="text-custom-grey flex flex-col text-l uppercase tracking-widest font-bold place-items-center mt-6">
      <h2>Din betalning är genomförd</h2>
      <p>
        Go to the{" "}
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Homepage
        </Link>
        .
      </p>
    </div>
  );
};*/

export { DeleteProduct };
