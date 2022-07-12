import { Router } from "express";
import statsControllers from "./controllers/statsControllers";

const router = Router();

router.get("/", statsControllers.show);
router.post("/", statsControllers.create);

export default router;