import { RequestHandler } from "express";
import { ValidatedRequest } from "express-joi-validation";
import { CreateUserSchema } from "../validations";

export const createUser: RequestHandler = async(req: ValidatedRequest<CreateUserSchema>,
    res,
  ) =>{

    const { body } = req;

    res.json({ success: true, body })
    
}