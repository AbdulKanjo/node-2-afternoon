require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./products_controller");

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(e => console.log(e));

app.get("/api/product", controller.getOne);
app.get("/api/products", controller.getAll);
app.post("/api/product", controller.create);
app.delete("/api/product/:id", controller.deleteProduct);
app.put("/api/product/:id", controller.update);

const port = 3001;
app.listen(port, () => console.log(`server is on ${port}`));
