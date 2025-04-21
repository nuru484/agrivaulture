/*
  Warnings:

  - Made the column `phone` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'USER';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" VARCHAR(255),
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "profilePicture" VARCHAR(255),
ALTER COLUMN "phone" SET NOT NULL;
