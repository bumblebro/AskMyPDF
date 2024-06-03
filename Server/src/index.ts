import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Working");
});

app.get("/home", (req, res) => {
  res.send("Ahahha");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
