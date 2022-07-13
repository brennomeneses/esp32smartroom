import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

interface IPayload {
    user: string;
}

const AuthenticateUser = {
    checkToken: (req: Request, res: Response, next: NextFunction)=>{
        const authToken = req.headers.authorization;

        if(!authToken)
            return(res.status(401).json({error: "token not provided"}));
        
        const [, token] = authToken.split(" ");

        const { user } = jwt.verify(token, `${process.env.JWT_SECRET}`) as IPayload;

        req.user = user;
        return next();
    }
}

export default AuthenticateUser;