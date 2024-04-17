import User from "../Model/User.js";

export default function (server, db) {
  // get all user
  server.get("/api/users", async (req, res) => {
    res.json(await User.find());
  });

  // get one user
  server.get("/api/users/:id", async (req, res) => {
    const id = req.param.id;
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
        password: req.body.password,
      });

      await newUser.save();

      res.status(201).json({ message: "Ny användare skapad." });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Could not create user" });
    }
  });

  // Login

  server.post("/api/login", async (req, res) => {
    try {
      if (req.session.login) {
        res.json({ message: "Det finns redan en användare inloggad." });
      } else {
        const user = await User.findOne({
          username: req.body.username,
          password: req.body.password,
        });
        if (user) {
          // Sparar den inloggade användaren i req.session.login
          req.session.login = user;
          console.log(req.session.login);
          res.json({ message: `Du har loggat in som ${user.username}.` });
        } else {
          res.json({ message: "Fel användare eller lösenord." });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Något gick fel." }, error);
    }
  });
}
