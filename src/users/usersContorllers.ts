import { Router, Request, Response } from "express";
import { AuthMiddlware } from "../middleWares";
const router = Router();

router.get("/", AuthMiddlware, (req: Request, res: Response) => {
  res.send("hello user");
});

router.get("/:id", AuthMiddlware, (req: Request, res: Response) => {
  res.send(`get ${req.params.id}`);
});
router.post("/", AuthMiddlware, (req: Request, res: Response) => {
  res.send("post /");
});
router.put("/:id", AuthMiddlware, (req: Request, res: Response) => {
  res.send(`put ${req.params.id}`);
});
router.delete("/:id", AuthMiddlware, (req: Request, res: Response) => {
  res.send(`delete ${req.params.id}`);
});

export default router;
