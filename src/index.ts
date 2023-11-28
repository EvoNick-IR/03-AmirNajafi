import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
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
