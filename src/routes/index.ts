import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index", { page: "Home", menuId: "home" });
});

export default router;
