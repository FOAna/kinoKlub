const express = require("express");
const app = express();
const port = 3001;
import { getMovies } from "./controllers/getMovies";

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/getMovies", getMovies);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
