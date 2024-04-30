import Product from "../Model/Product.js";
import User from "../Model/User.js";

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
      console.log(req.body);
      const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        img: req.body.img,
        created: new Date(),
        ends: req.body.ends,
        price: req.body.price,
        minimumBid: req.body.minimumBid,
        shipping: req.body.shipping,
        category: req.body.category,
      });

      const savedProduct = await newProduct.save();

      const id = savedProduct.id;

      const userCreatedProduct = await User.findById(req.session.login);

      userCreatedProduct.createdProducts.push(id);

      const savedUserCreatedProduct = await userCreatedProduct.save();

      res.status(201).json({ savedProduct, savedUserCreatedProduct });
    } catch (err) {
      res.status(500).json({ message: "Något gick fel." }, err);
    }
  });

  //Ta bort en produkt
  server.delete("/api/products/:id", async (req, res) => {
    try {
    const id = req.params.id;

    await Product.findByIdAndDelete(id);

    res.status(204).json(); }
    catch (error){
      console.error(error)
      res.status(400).json()
    }
  });

  server.delete("/api/products/", async (req, res) => {
    console.log(1111);
    try{
      console.log(2222);
      console.log(req.session);
      if(req.session.productId){
      console.log(3);
      const id = req.session.productId
      console.log(3);
      console.log(id)
      await Product.findByIdAndDelete(id);
  
      res.status(200).json();
    } }
    catch ( error){
      console.error(error)
      res.status(400).json({errorMessage: error.message})
    }
    

  });

  server.patch("/api/products/:id", async (req, res) => {
    try {
      const id = req.params.id;

      const bid = {
        userId: req.session.login,
        bidAmount: req.body.bidAmount,
      };

      const productBid = await Product.findById(id);

      productBid.bids.push(bid);

      const savedProduct = await productBid.save();

      const userBid = await User.findById(req.session.login);

      userBid.userBids.push(id);

      const savedUserBid = await userBid.save();

      res.status(201).json({ savedProduct, savedUserBid });
    } catch (error) {
      res.status(500).json({ message: "Något gick fel", error });
    }
  });
}
