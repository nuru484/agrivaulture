import { Router } from 'express';
const authenticationRouter = Router();
import registerRoutes from './register';

authenticationRouter.use('/auth', registerRoutes);

export { authenticationRouter };
