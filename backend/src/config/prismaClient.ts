import { PrismaClient } from '@prisma/client';

// Global type for PrismaClient to avoid multiple instances
declare global {
  var prisma: PrismaClient | undefined;
}

// Singleton pattern to prevent multiple instances in development
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
