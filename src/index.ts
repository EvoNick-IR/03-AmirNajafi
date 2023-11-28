///////////// imports  start////////////////** */

import dotenv from "dotenv";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import usersController from "./users/usersContorllers";
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


///////////// middle wares  end///////////////
/*---------------------------------------------------------------------------------------*/
///////////// controllers  start//////////////** */

app.get("/", (req: Request, res: Response) => {
  res.send("hello express.ts");
});

app.use("/users", usersController);
///////////// controllers  end///////////////
/*---------------------------------------------------------------------------------------*/
