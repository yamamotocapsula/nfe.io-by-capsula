const express = require("express");
const server = express();

server.get("/", (req, res) => {
  return res.json({ city: { code: 1331822, name: "Cabreuva" } });
});

server.listen(3000, () => {
  console.log("Server Up");
});
