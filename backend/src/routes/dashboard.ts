import { Router } from 'express';
import { getUserDashboard } from '../controllers/dashboard';

const dashboardRoutes = Router();

// Get user dashboard data
dashboardRoutes.get('/dashboard/user', getUserDashboard);


export default dashboardRoutes;