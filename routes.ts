import { Router } from "express";
import statsControllers from "./controllers/statsControllers";

const router = Router();

router.get("/room", statsControllers.show);
router.post("/room", statsControllers.create);

export default router;