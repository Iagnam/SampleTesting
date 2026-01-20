const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.get("/about", (req, res) => {
  res.send("How is this Session");
});
app.listen(7000, () => {
  console.log("Server running on port 7000");
});
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Home Page");
//     res.end();
//   }
// });

// server.listen(3000);
