"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crop_yield_1 = require("../controllers/crop-yield");
const cropYieldRoutes = (0, express_1.Router)();
// Create a new yield
cropYieldRoutes.post('/yields', crop_yield_1.createYield);
// Get a single yield by ID
cropYieldRoutes.get('/yields/:id', crop_yield_1.getYield);
// Update a yield by ID
cropYieldRoutes.put('/yields/:id', crop_yield_1.updateYield);
// Delete a yield by ID
cropYieldRoutes.delete('/yields/:id', crop_yield_1.deleteYield);
// Get all yields
cropYieldRoutes.get('/yields', crop_yield_1.getAllYields);
// Delete all yields
cropYieldRoutes.delete('/yields', crop_yield_1.deleteAllYields);
exports.default = cropYieldRoutes;
