import dotenv from 'dotenv';
dotenv.config();

import express from "express";

import middlewares from './app';

const app = express();
app.use(middlewares);

app.listen(process.env.PORT || 5000, () => console.log('SERVER UP AND RUNNING'));
