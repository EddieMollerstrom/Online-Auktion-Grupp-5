import Product from "../Model/Product.js";

export default function (server, db) {
  //Hämtar alla produkter
  server.get("/api/products", async (req, res) => {
    res.json(await Product.find());
  });

  //Hämtar en specifik produkt
  server.get("/api/products/:id", async (req, res) => {
    const id = req.params.id;
    const products = await Product.findById(id);
    res.json(products);
  });

  //Skapar ett event
  server.post("/api/products", async (req, res) => {
    try {
      const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        img: req.body.img,
        created: new Date(),
        ends: req.body.ends,
        bidCount: req.body.bidCount,
        currentHighestBid: req.body.currentHighestBid,
        price: req.body.price,
        minimumBid: req.body.minimumBid,
        shipping: req.body.shipping,
        category: req.body.category,
      });

      const savedProduct = await newProduct.save();

      res.status(201).json(savedProduct);
    } catch (err) {
      res.status(400).json({ message: "Något gick fel." }, err);
    }
  });

  //Ta bort en produkt
  server.delete("/api/products/:id", async (req, res) => {
    const id = req.params.id;

    await Product.findByIdAndDelete(id);

    res.status(204).send();
  });

  server.patch("/api/products/:id", async (req, res) => {
    const id = req.params.id;

    const updateBid = {
      bidCount: req.body.bidCount,
      currentHighestBid: req.body.currentHighestBid,
    };

    await Product.findByIdAndUpdate(id, updateBid);
  });
}
