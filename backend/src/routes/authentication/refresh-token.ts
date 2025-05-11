import { Router } from 'express';
import { refreshToken } from '../../controllers';

const refreshRoutes = Router();

refreshRoutes.post('/refresh-token', refreshToken);

export default refreshRoutes;
