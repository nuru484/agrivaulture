import { Router } from 'express';
import { registerUser } from '../../controllers/index';

const registerRoutes = Router();

registerRoutes.post('/register', ...registerUser);

export default registerRoutes;
