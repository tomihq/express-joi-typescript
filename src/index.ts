import compression from 'compression'
import dotenv from 'dotenv';
import express, { Express, json, Request, Response, urlencoded } from 'express';
import helmet from 'helmet';
import apiRouter from './api/'

dotenv.config();

const app: Express = express();
app.use(helmet())
app.use(compression())
app.use(json())
app.use(urlencoded({ extended: false }))
app.use('/api/v1', apiRouter)


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});