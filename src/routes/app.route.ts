import express from 'express';
import { IRoute } from '../types/interface/app.interface';
import authRouter from './auth.route';
const appRouter = express.Router();

const appRoutes: IRoute[] = [
  {
    path: '/auth',
    router: authRouter,
  },
];

appRoutes.forEach((route) => {
  appRouter.use(route.path, route.router);
});

export default appRouter;
