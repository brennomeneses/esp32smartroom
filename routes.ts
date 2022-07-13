import { Router } from "express";
import statsControllers from "./controllers/statsControllers";
import AuthenticateUser from "./middlewares/verifyToken";

const router = Router();

router.get("/", AuthenticateUser.checkToken, statsControllers.show);
router.post("/", AuthenticateUser.checkToken, statsControllers.create);

export default router;