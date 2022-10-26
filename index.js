const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const courses = require("./data/courses.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Port is running on ${port}`);
});
