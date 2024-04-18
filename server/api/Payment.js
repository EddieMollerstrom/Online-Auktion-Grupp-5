const express = require('express');
const Stripe = require('stripe');
require('dotenv').config();

const app = express();

app.use(express.json());

const stripe = new Stripe(process.env.sk_test_51Ox5oZ00fCX7ZvxKqzYo7pgfpvSJ0Rrq5Vc76kzpu9160WDIqbaqB3VSPOVnzIBke1NMUxfLi8286gYNDzyG0cmR00tzP9G6DN);

app.post('/rest/create-checkout-session', async (req, res) => {
    try {
        if (!req.body.items || !Array.isArray(req.body.items)) {
            return res.status(400).json({ error: 'Invalid input data' });
        }
        const line_items = req.body.items.map(item => ({
            price_data: {
                currency: 'sek',
                product_data: {
                    name: item.title,
                },
            },
            quantity: item.amount,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: line_items,
            mode: 'payment',
            success_url: `${process.env.SUCCESS_URL}`,
            cancel_url: `${process.env.CANCEL_URL}`,
        });

        res.json({ id: session.id });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
console.log(process.argv);

let port = process.env.PORT || 3000;
if (process.argv[2] === "--port" && process.argv[3]) {
    port = parseInt(process.argv[3]);
}

app.use(express.static('well-known'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});