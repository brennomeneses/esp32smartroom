import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import statsControllers from "./controllers/statsControllers";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (request, response)=>{
    const allStats = await prisma.stats.findMany();
    response.json(allStats);
});
router.post("/", statsControllers.create);

// Test router
router.get("/test", async (req, res)=> res.json({status: "ok"}))

export default router;