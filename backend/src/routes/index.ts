// src/routes/index.ts
import { Router } from 'express';
const routes = Router();
import authenticateJWT from '../middlewares/authenticate-jwt';
import { authenticationRouter } from './authentication';
import cropRecordRoutes from './crop-record';
import cropMarketPriceRoutes from './crop-market-price';
import cropExpenseRoutes from './crop-expense';
import cropYieldRoutes from './crop-yield';
import farmingTipRoutes from './farming-tip';
import weatherRoutes from './weather-info';
import userRoutes from './user';
import dashboardRoutes from './dashboard';

routes.use(authenticationRouter);
routes.use(authenticateJWT, cropRecordRoutes);
routes.use(authenticateJWT, cropMarketPriceRoutes);
routes.use(authenticateJWT, cropExpenseRoutes);
routes.use(authenticateJWT, cropYieldRoutes);
routes.use(authenticateJWT, farmingTipRoutes);
routes.use(authenticateJWT, weatherRoutes);
routes.use(authenticateJWT, userRoutes);
routes.use(authenticateJWT, dashboardRoutes);

export default routes;
