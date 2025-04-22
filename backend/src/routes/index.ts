// src/routes/index.ts
import { Router } from 'express';
const routes = Router();
import { authenticationRouter } from './authentication';

routes.use(authenticationRouter);

export default routes;
