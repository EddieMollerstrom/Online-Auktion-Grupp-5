  import 'dotenv/config';
  import Stripe from "stripe";
  import express from "express";

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const app = express();
  app.use(express.json());


  export default function payment(server) {

    server.post("/api/payments", async (req, res) => {
      try {
        req.session.productId = req.body.productId;
        console.log("");
        let line_item = {
          price_data: {
            currency: 'sek',
            product_data: {
              name: req.body.title,
            },
            unit_amount: req.body.price * 100,
          },
          quantity: 1, //om tid hade funnits hade vi velat utveckal möjlighet till att betala fler samtidigt.
        };

        const session = await stripe.checkout.sessions.create({
          line_items: [line_item],
          mode: 'payment',
          success_url: `http://localhost:5173/Checkout`,
          cancel_url: `http://localhost:5173/`,
        });

        res.status(200).json({ url: session.url });
      } catch (error) {
        res.status(500).json({ message: "Något gick fel på servern", errorMessage: error });
      }
    });
  };

