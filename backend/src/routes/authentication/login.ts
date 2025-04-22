// src/routes/authentication/login.ts
import { Router } from 'express';
import { login } from '../../controllers';

const loginRoutes = Router();

loginRoutes.post('/login', login);

export default loginRoutes;
