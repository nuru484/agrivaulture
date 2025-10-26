// prisma/seed.ts
import { Role } from '../generated/prisma/client';
import prisma from '../src/config/prismaClient';
import * as bcrypt from 'bcrypt';
import logger from '../src/utils/logger';
import ENV from '../src/config/env';

async function main() {
  logger.info('🌱 Starting database seeding...');

  const adminEmail = ENV.ADMIN_EMAIL;
  const adminPassword = ENV.ADMIN_PASSWORD;
  const adminName = ENV.ADMIN_NAME;
  const adminPhone = ENV.ADMIN_PHONE;

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const admin = await prisma.user.upsert({
    where: { phone: adminPhone },
    update: {
      name: adminName,
      email: adminEmail,
      password: hashedPassword,
      role: Role.ADMIN,
      updatedAt: new Date(),
    },
    create: {
      email: adminEmail,
      name: adminName,
      password: hashedPassword,
      role: Role.ADMIN,
      phone: adminPhone,
    },
  });

  logger.info({
    message: '✅ Admin user seeded successfully',
    admin: {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
      phone: admin.phone,
    },
  });
}

main()
  .catch((e) => {
    logger.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });