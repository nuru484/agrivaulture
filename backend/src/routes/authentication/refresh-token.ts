import { Router } from 'express';
import { refreshToken } from '../../controllers';
import authenticateJWT from '../../middlewares/authenticate-jwt';

const refreshRoutes = Router();

refreshRoutes.post('/refresh-token', authenticateJWT, refreshToken);

export default refreshRoutes;
