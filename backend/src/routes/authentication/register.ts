// src/routes/authentication/register.ts
import { Router } from 'express';
import { registerUser } from '../../controllers';

const registerRoutes = Router();

registerRoutes.post('/register', ...registerUser);

export default registerRoutes;
