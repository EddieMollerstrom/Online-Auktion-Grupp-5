// Importing the required modules
const express = require('express');
const Stripe = require('stripe');

// Initialize the Express app
const app = express();

// Initialize Stripe with your secret key
const stripe = new Stripe('sk_test_51Ox5oZ00fCX7ZvxKqzYo7pgfpvSJ0Rrq5Vc76kzpu9160WDIqbaqB3VSPOVnzIBke1NMUxfLi8286gYNDzyG0cmR00tzP9G6DN');

// Route for creating a checkout session
app.post('/rest/create-checkout-session', async (req, res) => {
  // Map the incoming items to the format required by Stripe
  const line_items = req.body.items.map(item => ({
    price_data: {
      currency: 'sek',
      product_data: {
        name: item.title, //KOLLA PÅ DETTA MED DATABASEN
      },
      unit_amount: item.price * 100, // Convert price to cents
    },
    quantity: item.amount,
  }));

  // Create a new checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: line_items,
    mode: 'payment',
    success_url: 'http://localhost:3001/checkout-result/success',
    cancel_url: 'http://localhost:3001/checkout-result/cancel',
  });

  // Respond with the session ID
  res.json({ id: session.id });
});

// Log command line arguments (for debugging purposes)
console.log(process.argv);

// Determine the port from command line arguments
let port = 3000;
if (process.argv[2] === "--port") {
  port = process.argv[3];
}

// Serve static files from a directory named '.well-known'
app.use(express.static('.well-known'));

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
