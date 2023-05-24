// importing package
// const dotenv = require("dotenv");
// dotenv.config();
const bodyparser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());
// const username = process.env.db_username;
// const password = process.env.db_password;
// connectiong database
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    `mongodb+srv://pranjalrana:pranjalrana@cluster1.vxthoqp.mongodb.net/?retryWrites=true&w=majority `
  );
  console.log("connected");
}
app.use(require("./routes/router.js"));
// listening
app.listen(80, () => {
  console.log(`server running ${5000} `);
});
