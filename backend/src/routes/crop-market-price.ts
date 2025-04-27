import { Router } from 'express';
import {
  createMarketPrice,
  getMarketPrice,
  updateMarketPrice,
  deleteMarketPrice,
  getAllMarketPrices,
  deleteAllMarketPrices,
} from '../controllers/crop-market-price';
import { authorizeRole } from '../middlewares/authorize-roles';
import { UserRole } from '../../types/user-profile.types';

const cropMarketPriceRoutes = Router();

// Create a new market price
cropMarketPriceRoutes.post(
  '/market-prices',
  authorizeRole([UserRole.ADMIN]),
  createMarketPrice
);

// Get a single market price by ID
cropMarketPriceRoutes.get('/market-prices/:id', getMarketPrice);

// Update a market price by ID
cropMarketPriceRoutes.put(
  '/market-prices/:id',
  authorizeRole([UserRole.ADMIN]),
  updateMarketPrice
);

// Delete a market price by ID
cropMarketPriceRoutes.delete(
  '/market-prices/:id',
  authorizeRole([UserRole.ADMIN]),
  deleteMarketPrice
);

// Get all market prices
cropMarketPriceRoutes.get('/market-prices', getAllMarketPrices);

// Delete all market prices
cropMarketPriceRoutes.delete(
  '/market-prices',
  authorizeRole([UserRole.ADMIN]),
  deleteAllMarketPrices
);

export default cropMarketPriceRoutes;
