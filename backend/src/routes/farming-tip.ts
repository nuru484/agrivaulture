import { Router } from 'express';
import {
  createFarmingTip,
  getFarmingTip,
  updateFarmingTip,
  deleteFarmingTip,
  getAllFarmingTips,
  deleteAllFarmingTips,
} from '../controllers/farming-tip';
import { authorizeRole } from '../middlewares/authorize-roles';
import { UserRole } from '../../types/user-profile.types';

const farmingTipRoutes = Router();

// Create a new farming tip
farmingTipRoutes.post(
  '/farming-tips',
  authorizeRole([UserRole.ADMIN]),
  createFarmingTip
);

// Get a single farming tip by ID
farmingTipRoutes.get('/farming-tips/:id', getFarmingTip);

// Update a farming tip by ID
farmingTipRoutes.put(
  '/farming-tips/:id',
  authorizeRole([UserRole.ADMIN]),
  updateFarmingTip
);

// Delete a farming tip by ID
farmingTipRoutes.delete(
  '/farming-tips/:id',
  authorizeRole([UserRole.ADMIN]),
  deleteFarmingTip
);

// Get all farming tips
farmingTipRoutes.get('/farming-tips', getAllFarmingTips);

// Delete all farming tips
farmingTipRoutes.delete(
  '/farming-tips',
  authorizeRole([UserRole.ADMIN]),
  deleteAllFarmingTips
);

export default farmingTipRoutes;
