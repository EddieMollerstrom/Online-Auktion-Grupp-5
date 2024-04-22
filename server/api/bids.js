import Bid from "../Model/Bid.js";
import Product from "../Model/Product.js";
import User from "../Model/User.js";

export default function (server, db) {
  server.post("/api/bids", async (req, res) => {
    try {
      const { ProductId } = req.body;
      console.log(ProductId);

      const product = await Product.findById(ProductId);
      console.log(product);

      if (!product) {
        return res.status(404).json({ message: "Auktionen hittades inte." });
      }

      const bid = await Bid.create({
        userId: req.body.id,
        productId: req.body.productId,
      });

      const user = await User.findById(id);
      user.bids.push(bid);
      await user.save();

      await Product.updateOne({ _id: ProductId }, { $inc: { bids: +1 } });
      await Product.save;

      console.log("Bud skapat");
      res.status(201).json(bid);
    } catch (error) {
      console.error("Fel vid köp skapande av bud");
      res.status(500).json({ error: "Serverfel." });
    }
  });
}
