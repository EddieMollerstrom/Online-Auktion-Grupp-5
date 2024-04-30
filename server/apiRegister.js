import users from "./api/users.js";
import products from "./api/products.js";
import payments from "./api/payments.js";

export default function (server, db) {
  users(server, db);
  products(server, db);
  payments(server, db);
}
