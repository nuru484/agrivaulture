// src/routes/authentication/register.ts
import { Router } from 'express';
import { registerUser } from '../../controllers';

const registerRoutes = Router();

registerRoutes.post('/register-user', ...registerUser);

export default registerRoutes;
