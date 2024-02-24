import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from "morgan" 
import cors from 'cors';
import { dbConnect } from './db/dbConnect.js';
import routes from "./routes/routes.js";
//defining the express app
const app = express();


dotenv.config();
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(5000,() => {
    console.log("Backend server is running!")
    dbConnect();
})