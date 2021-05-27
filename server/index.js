const express = require("express");
const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
