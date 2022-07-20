'use strict';

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app: Express = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// Health Check
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'OK',
    version: require('../package.json').version,
  });
});

app.use('/api/v1/roles', require('./routes/roleRoutes'));

app.listen(port, () => console.log(`Running on port ${port}`));
