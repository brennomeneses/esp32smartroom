import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
const statsControllers = {
    show: async (request: Request, response: Response) => {
        try{
            const allStats = await (await prisma.stats.findMany()).map(e=>{
                return({
                    temperature: parseFloat(e.temperature),
                    humidity: parseFloat(e.humidity),
                    createdAt: e.createdAt,
                })
            });
            response.json(allStats);
        }catch(err){
            response.status(400);
        }
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