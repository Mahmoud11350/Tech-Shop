require("dotenv").config();
const { connect } = require("mongoose");
const dummyProducts = require("./lib/dummyShop.js");
const Product = require("./model/Product.js");

async function populateProducts() {
  await connect(process.env.MONGO_URL);
  await Product.create(dummyProducts);
  console.log("dummy products created successfully");
  process.exit();
}
populateProducts();
