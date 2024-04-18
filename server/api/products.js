import Product from "../Model/Product.js";

export default function (server, db) {
  server.get("/api/products", async (req, res) => {
    res.json(await Product.find());
  });

  server.get("/api/products/:id", async (req, res) => {
    const id = req.params.id;
    const products = await Product.findById(id);
    res.json(products);
  });
}
