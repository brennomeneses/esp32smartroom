import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const loginController = {
    handle: (request: Request, response: Response)=>{
        if(request.body.user){
            const token = jwt.sign({
                user: request.body.user
            }, `${process.env.JWT_SECRET}`);
            response.json(token);
        }else{
            response.status(401).json("Body bad formated or not provided");
        }
        
    }
}

export default loginController;