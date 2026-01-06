const express = require("express");
const { getGreeting } = require("./greeting");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
  const name = req.headers["x-name"];

  try {
    res.send(getGreeting(name));
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post("/hello", (req, res) => {
  const name = req.headers["x-name"];

  try {
    res.send(getGreeting(name));
  } catch (error) {
    res.status(400).send(error.message);
  }
}

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
