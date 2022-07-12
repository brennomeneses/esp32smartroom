import { Router } from "express";
import statsControllers from "./controllers/statsControllers";

const router = Router();

router.get("/room", statsControllers.show);
router.post("/room", statsControllers.create);

// Test router
router.get("/", (req, res)=> res.json({status: "ok"}))

export default router;