///////////// imports  start////////////////** */

import dotenv from "dotenv";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

///////////// imports  end////////////////////
/*---------------------------------------------------------------------------------------*/
///////////// app configuration  start/////** */

dotenv.config();
const app = express();
app.listen(process.env.PORT, () =>
  console.log("app is listening to port: " + process.env.PORT)
);

///////////// app configuration  end////////////
/*---------------------------------------------------------------------------------------*/
///////////// origin middle wares  start//////** */

app.use(cors());
app.use(express.json());

///////////// origin middle wares  end/////////
/*---------------------------------------------------------------------------------------*/
///////////// middle wares  start/////////////** */

const AuthMiddlware = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.role && req.body.role === "admin") next();
  else res.status(401).send("unauthorized");
};

///////////// middle wares  end///////////////
/*---------------------------------------------------------------------------------------*/
///////////// controllers  start//////////////** */

app.get("/", AuthMiddlware, (req: Request, res: Response) => {
  res.send("hello user");
});
interface IuserObject {
  name: string;
  lName: string;
}
app.get("/users", AuthMiddlware, (req: Request, res: Response) => {
  const users: IuserObject[] = [
    { name: "mostafa", lName: "Haghani" },
    { name: "Hoda", lName: "Ahmadi" },
  ];
  res.send(users);
});

///////////// controllers  end///////////////
/*---------------------------------------------------------------------------------------*/
