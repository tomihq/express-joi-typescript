import { Router } from "express";

import welcomeRouter from './welcome'

const router = Router();

router.use('/welcome', welcomeRouter)

router.use((err, req, res, next) => {
    if (err?.error?.isJoi) {
      res.status(400).json({
        type: err.type,
        message: err.error.toString(),
      })
    } else {
      // pass on to another error handler
      next(err)
    }
  })
  
router.get('/', (req, res) => {
res.json({ message: 'Welcome to TypeScript + Express + Joi API' })
})
    

export default router