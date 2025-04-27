import { Router } from 'express';
import {
  createYield,
  getYield,
  updateYield,
  deleteYield,
  getAllYields,
  deleteAllYields,
} from '../controllers/crop-yield';

const cropYieldRoutes = Router();

// Create a new yield
cropYieldRoutes.post('/yields', createYield);

// Get a single yield by ID
cropYieldRoutes.get('/yields/:id', getYield);

// Update a yield by ID
cropYieldRoutes.put('/yields/:id', updateYield);

// Delete a yield by ID
cropYieldRoutes.delete('/yields/:id', deleteYield);

// Get all yields
cropYieldRoutes.get('/yields', getAllYields);

// Delete all yields
cropYieldRoutes.delete('/yields', deleteAllYields);

export default cropYieldRoutes;
