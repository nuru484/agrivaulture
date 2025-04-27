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

routes.use(authenticationRouter);
routes.use(authenticateJWT, cropRecordRoutes);
routes.use(authenticateJWT, cropMarketPriceRoutes);
routes.use(authenticateJWT, cropExpenseRoutes);
routes.use(authenticateJWT, cropYieldRoutes);
routes.use(authenticateJWT, farmingTipRoutes);
routes.use(authenticateJWT, weatherRoutes);

export default routes;
