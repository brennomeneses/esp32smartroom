import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
const statsControllers = {
    show: async (request: Request, response: Response) => {
        const allStats = await (await prisma.stats.findMany()).map(e=>{
            return({
                humidity: parseFloat(e.humidity),
                temperature: parseFloat(e.temperature),
                createdAt: e.createdAt
            })
        });
        response.json(allStats);
    },
    create: async (request: Request, response: Response) => {
        try{
            if(Object.keys(request.body).length === 0)
                return (response.status(400).json({error: "no body parsed"}));
            
            if(!(request.body.umi || request.body.temp))
                return (response.status(400).json({error: "body bad formated"}));

            const dataFech = await prisma.stats.create({
                data:{
                    humidity: request.body.umi,
                    temperature: request.body.temp,
                    createdAt: new Date()
                }
            });
            response.json(dataFech);
        }catch(err){
            response.status(400);
        }
    },
    destroy: async (request: Request, response: Response) => {
        try{
            const deleteStats = await prisma.stats.deleteMany({});
            response.json(deleteStats);
        }catch(err){
            response.status(400);
        }
    }
}

export default statsControllers;