import User from "../Model/User.js";
import Product from "../Model/Product.js";
import crypto from "crypto";
import { log } from "console";
const salt = "detsaltigastesaltet";

function getHash(password) {
  let hash = crypto
    .pbkdf2Sync(password, salt, 1000, 32, `sha512`)
    .toString(`hex`);
  return hash;
}

export default function (server, db) {
  // get all user
  server.get("/api/users", async (req, res) => {
    res.json(await User.find());
  });

  // get one user
  server.get("/api/users/:id", async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    res.json(user);
  });

  // create user

  server.post("/api/users", async (req, res) => {
    try {
      const existingUser = await User.findOne({
        $or: [{ email: req.body.email }, { username: req.body.username }],
      });

      if (existingUser) {
        return res.status(400).json({
          message: "konto med samma användarnamn eller mail finns redan.",
        });
      }

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: getHash(req.body.password),
      });

      await newUser.save();

      res.status(201).json({ message: "Ny användare skapad." });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  });

  // Login

  server.post("/api/login", async (req, res) => {
    try {
      if (req.session.login) {
        res
          .status(406)
          .json({ message: "Det finns redan en användare inloggad." });
      } else {
        const user = await User.findOne(
          {
            username: req.body.username,
            password: getHash(req.body.password),
          },
          "-password"
        );
        if (user) {
          // Sparar den inloggade användaren i req.session.login
          req.session.login = user._id;
          console.log(req.session.login);
          console.log(user);
          res.status(200).json({
            message: `Du har loggat in som ${user.username}.`,
            user: user,
          });
        } else {
          res.status(401).json({ message: "Fel användare eller lösenord." });
        }
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Något gick fel.", error: error.message });
    }
  });

  // kolla om någon är inloggad
  server.get("/api/login", async (req, res) => {
    if (req.session.login) {
      res.json({
        isLoggedIn: true,
        _id: req.session.login,
      });
    } else {
      res.status(400).json({ isLoggedIn: false });
    }
  });

  // logga ut user

  server.delete("/api/login", async (req, res) => {
    if (req.session.login) {
      const user = await User.findById(req.session.login);
      delete req.session.login;
      res.status(200).json({ message: "Hejdå" });
    } else {
      res.status(400).json({
        message: "Ingen är inloggad",
      });
    }
  });

  server.get("/api/userSession", async (req, res) => {
    const user = await User.findById(req.session.login).populate([
      {
        path: "userBids",
        select: "title bids",
      },
      {
        path: "createdProducts",
        select: "title bids",
      },
      {
        path: "savedProducts",
        select: "title price bids",
      },
    ]);
    console.log(req.session.user);
    res.status(200).json(user);
  });

  //Lägg till produkt i favoriter
  server.patch("/api/users/products/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById(req.session.login);
      //const product = await Product.findById(id);

      if (user.savedProducts.includes(id)) {
        return res.status(400).json({
          message: "Denna produkt finns redan i dina sparade objekt.",
        });
      }

      user.savedProducts.push(id);
      const savedSavedProducts = await user.save();

      res.status(200).json({
        savedSavedProducts,
        message: "Produkten har lagts till i dina sparade objekt.",
      });
    } catch (error) {
      console.error("Error adding product to user:", error);
      res
        .status(500)
        .json({ error: "Kunde inte lägga till produkten i favoriter." });
    }
  });
}
