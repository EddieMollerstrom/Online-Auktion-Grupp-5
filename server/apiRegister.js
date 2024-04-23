import users from "./api/users.js";
import products from "./api/products.js";
import bids from "./api/bids.js";

export default function (server, db) {
  users(server, db);
  products(server, db);
  bids(server, db);
}
