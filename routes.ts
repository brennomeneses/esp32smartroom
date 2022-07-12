import { Router } from "express";
import statsControllers from "./controllers/statsControllers";

const router = Router();

router.get("/", statsControllers.show);
router.post("/", statsControllers.create);

// Test router
router.get("/room", (req, res)=> res.json({status: "ok"}))

export default router;