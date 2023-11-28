require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello user");
});
app.get("/users", (req, res) => {
  const users = [
    { name: "mostafa", lName: "Haghani" },
    { name: "Hoda", lName: "Ahmadi" },
  ];
  res.send(users);
});

app.listen(process.env.PORT, () =>
  console.log("app is listening to port: " + process.env.PORT)
);
