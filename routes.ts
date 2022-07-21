import { Router } from "express";
import loginController from "./controllers/loginController";
import statsControllers from "./controllers/statsControllers";
import AuthenticateUser from "./middlewares/verifyToken";

const router = Router();

router.get("/login", loginController.handle);
router.get("/", AuthenticateUser.checkToken, statsControllers.show);
router.post("/", AuthenticateUser.checkToken, statsControllers.create);
router.delete("/", AuthenticateUser.checkToken, statsControllers.destroy);

export default router;