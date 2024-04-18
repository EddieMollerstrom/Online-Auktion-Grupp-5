import users from "./api/users.js";
import products from "./api/products.js";

export default function (server, db) {
  users(server, db);
  products(server, db);
}
