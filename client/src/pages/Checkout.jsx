import React from 'react';

async function tryStripe() {
  console.log(1)
  const response = await fetch("/api/payments", {
    method: "post",
    headers: { "Content-Type": "application/json" }
  })
  let result = await response.json()
  if (response.status === 200) {
    location.href = result.url
  }
}
function PaymentButton() {
  return (
    <button onClick={tryStripe}>Gå till betalning</button>
  );
}

export default PaymentButton;
