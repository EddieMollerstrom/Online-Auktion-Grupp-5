import React from 'react';

async function tryStripe() {
  console.log(1);
  try {
    const response = await fetch("/api/payment/create-checkout-session", {
      method: "post",
      headers: { "Content-Type": "application/json" }
    });
    const result = await response.json();
    if (response.status === 200) {
      console.log(result); // För felsökning
    }
  } catch (error) {
    console.error("Fel:", error);
  }
}



function PaymentButton() {
  return (
    <button onClick={tryStripe}>Gå till betalning</button>
  );
}

export default PaymentButton;
