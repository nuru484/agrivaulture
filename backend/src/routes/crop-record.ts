import { Router } from 'express';
import {
  createCropRecord,
  getCropRecord,
  updateCropRecord,
  deleteCropRecord,
  getAllCropRecords,
  deleteAllCropRecords,
} from '../controllers/crop-record';

const cropRecordRoutes = Router();

// Create a new crop record
cropRecordRoutes.post('/crop-records', createCropRecord);

// Get a single crop record by ID
cropRecordRoutes.get('/crop-records/:id', getCropRecord);

// Update a crop record by ID
cropRecordRoutes.put('/crop-records/:id', updateCropRecord);

// Delete a crop record by ID
cropRecordRoutes.delete('/crop-records/:id', deleteCropRecord);

// Get all crop records for the authenticated user
cropRecordRoutes.get('/crop-records', getAllCropRecords);

// Delete all crop records for the authenticated user
cropRecordRoutes.delete('/crop-records', deleteAllCropRecords);

export default cropRecordRoutes;
