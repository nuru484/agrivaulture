// src/validations/authValidations/signup-validation.ts
import { validator } from '../../validations/validation-factory.ts';
import { ValidationChain } from 'express-validator';

// Validator for creating a new user
export const registerValidation: ValidationChain[] = [
  validator.string('name', {
    required: true,
    maxLength: 100,
    customMessage: 'Name can only be a string up to 100 characters',
  }),
  validator.password('password', {
    required: true,
    minLength: 5,
    maxLength: 255,
    // requireUppercase: true,
    // requireLowercase: true,
    // requireNumbers: true,
    // requireSpecialChars: true,
    customMessage: 'Password must be a strong password',
  }),
  validator.enum('role', ['FARMER', 'USER'], {
    required: true,
  }),
  validator.string('region', {
    required: true,
    maxLength: 100,
    customMessage: 'Region must be a string up to 100 characters',
  }),
  validator.phone('phone', {
    required: false,
    pattern: /^\+?[0-9]{10,15}$/,
    customMessage: 'Phone must be a valid phone number (10-15 digits)',
  }),
];

// Validator for updating an existing user
export const updateProfileValidation: ValidationChain[] = [
  validator.string('name', {
    required: false,
    maxLength: 100,
    customMessage: 'Name must be a string up to 100 characters',
  }),
  validator.email('email', {
    required: false,
    maxLength: 255,
  }),
  validator.password('password', {
    required: false,
    minLength: 5,
    // maxLength: 255,
    // requireUppercase: true,
    // requireLowercase: true,
    // requireNumbers: true,
    // requireSpecialChars: true,
    customMessage: 'Password must be a strong password',
  }),
  validator.enum('role', ['FARMER', 'ADMIN', 'USER'], {
    required: false,
  }),
  validator.string('region', {
    required: false,
    maxLength: 100,
    customMessage: 'Region must be a string up to 100 characters',
  }),
  validator.phone('phone', {
    required: false,
    pattern: /^\+?[0-9]{10,15}$/,
    customMessage: 'Phone must be a valid phone number (10-15 digits)',
  }),
  validator.string('bio', {
    required: false,
    maxLength: 1000,
    customMessage: 'Bio must be a string up to 1000 characters',
  }),
  validator.string('address', {
    required: false,
    maxLength: 255,
    customMessage: 'Address must be a string up to 255 characters',
  }),
];
