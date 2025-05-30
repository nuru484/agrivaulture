import { Router } from 'express';
import {   getTotalUsers,
  getUsersList,
  updateUserRole,
  deleteUser, } from '../controllers/user';

const userRoutes = Router();

// Get total number of users
userRoutes.get('/users/count', getTotalUsers);

// Get list of users
userRoutes.get('/users', getUsersList);

// Update user role
userRoutes.put('/users/:id/role', updateUserRole);

// Delete a user
userRoutes.delete('/users/:id', deleteUser);

export default userRoutes;