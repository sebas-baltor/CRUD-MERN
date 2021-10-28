const express = require("express"),
  app = express(),
  router = require("./routs/router"),
  mongoose = require("mongoose"),
  uri = "mongodb://localhost/CRUD-MERN",
  cors = require("cors");
/* ============== SETTINGS ============== */
const PORT = process.env.PORT || 5000;
app.set("port", PORT);
/* ============== MIDDLEWARE ============== */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:"http://localhost:3000"}))
/* ============== ROUTS ============== */
app.use("/", router);
/* ============== START THE SERVER ============== */
try {
  mongoose.connect(uri);
  app.listen(PORT, () => {
    console.log("server on port: ", PORT);
  });
  mongoose.connection.on("connected",()=>{console.log("mongo db connection on: ", uri)})
} catch (error) {
  console.log(error);
}
