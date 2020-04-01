import express from "express";
import bodyParser from "body-parser";
import helmet from 'helmet';
import cors from "cors";
import dotenv from 'dotenv';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.listen(process.env.PORT || 5000, () => console.log('SERVER UP AND RUNNING'));
