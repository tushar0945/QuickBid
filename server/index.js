import express from "express";
const app = express();

app.listen(8080, () => {
  console.log("listening");
});

app.get("/hello", (req, res) => {
  console.log("hello");
});
