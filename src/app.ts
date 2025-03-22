import 'express-async-errors';
import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import appRouter from './routes/app.route';

dotenv.config;

const app: Application = express();

app.use('/api/v1', appRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: {
      message: `Elo app server is Live on - ${process.env.NODE_ENV}`,
    },
  });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    data: {
      message: `${req.originalUrl} - not found`,
    },
  });
});

export default app;
