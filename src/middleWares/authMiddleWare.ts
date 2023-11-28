import { Request, Response, NextFunction } from "express";

const authMiddlware = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.role && req.body.role === "admin") next();
  else res.status(401).send("unauthorized");
};

export default authMiddlware;
