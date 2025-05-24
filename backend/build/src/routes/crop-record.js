"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crop_record_1 = require("../controllers/crop-record");
const cropRecordRoutes = (0, express_1.Router)();
// Create a new crop record
cropRecordRoutes.post('/crop-records', crop_record_1.createCropRecord);
// Get a single crop record by ID
cropRecordRoutes.get('/crop-records/:id', crop_record_1.getCropRecord);
// Update a crop record by ID
cropRecordRoutes.put('/crop-records/:id', crop_record_1.updateCropRecord);
// Delete a crop record by ID
cropRecordRoutes.delete('/crop-records/:id', crop_record_1.deleteCropRecord);
// Get all crop records for the authenticated user
cropRecordRoutes.get('/crop-records', crop_record_1.getAllCropRecords);
// Delete all crop records for the authenticated user
cropRecordRoutes.delete('/crop-records', crop_record_1.deleteAllCropRecords);
exports.default = cropRecordRoutes;
