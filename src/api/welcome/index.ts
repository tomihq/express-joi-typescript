import { Router } from "express";
import { createValidator } from 'express-joi-validation'
import { createUser } from "./management";
import { schemas } from "./validations";

const validator = createValidator({
    passError: true,
  })
  

const routerWelcome = Router();

routerWelcome.post('/', validator.body(schemas.createUserSchema), createUser)

export default routerWelcome