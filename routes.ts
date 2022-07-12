import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import statsControllers from "./controllers/statsControllers";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (request, response)=>{
    try{
        const allStats = await prisma.stats.findMany();
        response.json(allStats);
    }catch(err){
        console.log(err);
    }
    
});
router.post("/", statsControllers.create);

// Test router
router.get("/test", async (req, res)=> res.json({status: "ok"}))

export default router;