import Bid from "../Model/Bid.js";
import Product from "../Model/Product.js";
import User from "../Model/User.js";

export default function (server, db) {
  server.post("/api/bids/:id", async (req, res) => {
    try {
      console.log(req.params.id);
      const product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(404).json({ message: "Auktionen hittades inte." });
      }

      const user = await User.findById(req.body.userId);

      const bid = await Bid.create({
        userId: user._id,
        productId: product._id,
        bidAmount: req.body.bidAmount,
      });

      user.bids.push(bid);

      await Product.updateOne({ _id: product }, { $inc: { bids: +1 } });

      await Product.updateOne(
        { _id: product },
        { currentHighestBid: req.body.bidAmount }
      );

      await user.save();
      console.log("Bud skapat");
      res.status(201).json(bid);
    } catch (error) {
      console.error("Fel vid köp skapande av bud");
      res.status(500).json({ error: "Fel vid budivning" });
    }
  });

  server.get("/api/bids", async (req, res) => {
    res.json(await Bid.find());
  });
}
