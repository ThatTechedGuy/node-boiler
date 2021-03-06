import express from 'express';
import bodyParser from "body-parser";
import helmet from 'helmet';
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

export default app;

