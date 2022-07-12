import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
const statsControllers = {
    show: async (request: Request, response: Response) => {
        const allStats = await prisma.stats.findMany();
        response.json(allStats);
    },
    create: async (request: Request, response: Response) => {
        try{
            const dataFech = await prisma.stats.create({
                data:{
                    humidity: request.body.umi,
                    temperature: request.body.temp
                }
            });
            response.json(dataFech);
        }catch(err){
            response.status(400);
        }
    }
}

export default statsControllers;