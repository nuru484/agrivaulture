-- CreateEnum
CREATE TYPE "Role" AS ENUM ('FARMER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'FARMER',
    "region" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CropRecord" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cropType" VARCHAR(50) NOT NULL,
    "plantingDate" TIMESTAMP(3) NOT NULL,
    "harvestingDate" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CropRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expense" (
    "id" TEXT NOT NULL,
    "cropRecordId" TEXT NOT NULL,
    "item" VARCHAR(100) NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Yield" (
    "id" TEXT NOT NULL,
    "cropRecordId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" VARCHAR(20) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Yield_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketPrice" (
    "id" TEXT NOT NULL,
    "crop" VARCHAR(50) NOT NULL,
    "region" VARCHAR(100) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "unit" VARCHAR(20) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MarketPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FarmingTip" (
    "id" TEXT NOT NULL,
    "tip" TEXT NOT NULL,
    "crop" VARCHAR(50),
    "region" VARCHAR(100),
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FarmingTip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weather" (
    "id" TEXT NOT NULL,
    "region" VARCHAR(100) NOT NULL,
    "data" JSONB NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Weather_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_phone_idx" ON "User"("phone");

-- CreateIndex
CREATE INDEX "User_region_idx" ON "User"("region");

-- CreateIndex
CREATE INDEX "CropRecord_userId_idx" ON "CropRecord"("userId");

-- CreateIndex
CREATE INDEX "CropRecord_cropType_idx" ON "CropRecord"("cropType");

-- CreateIndex
CREATE INDEX "CropRecord_plantingDate_idx" ON "CropRecord"("plantingDate");

-- CreateIndex
CREATE INDEX "Expense_cropRecordId_idx" ON "Expense"("cropRecordId");

-- CreateIndex
CREATE INDEX "Expense_date_idx" ON "Expense"("date");

-- CreateIndex
CREATE INDEX "Yield_cropRecordId_idx" ON "Yield"("cropRecordId");

-- CreateIndex
CREATE INDEX "Yield_date_idx" ON "Yield"("date");

-- CreateIndex
CREATE INDEX "MarketPrice_crop_idx" ON "MarketPrice"("crop");

-- CreateIndex
CREATE INDEX "MarketPrice_region_idx" ON "MarketPrice"("region");

-- CreateIndex
CREATE INDEX "MarketPrice_date_idx" ON "MarketPrice"("date");

-- CreateIndex
CREATE UNIQUE INDEX "MarketPrice_crop_region_date_key" ON "MarketPrice"("crop", "region", "date");

-- CreateIndex
CREATE INDEX "FarmingTip_crop_idx" ON "FarmingTip"("crop");

-- CreateIndex
CREATE INDEX "FarmingTip_region_idx" ON "FarmingTip"("region");

-- CreateIndex
CREATE INDEX "FarmingTip_date_idx" ON "FarmingTip"("date");

-- CreateIndex
CREATE INDEX "Weather_region_idx" ON "Weather"("region");

-- CreateIndex
CREATE INDEX "Weather_date_idx" ON "Weather"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Weather_region_date_key" ON "Weather"("region", "date");

-- AddForeignKey
ALTER TABLE "CropRecord" ADD CONSTRAINT "CropRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_cropRecordId_fkey" FOREIGN KEY ("cropRecordId") REFERENCES "CropRecord"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Yield" ADD CONSTRAINT "Yield_cropRecordId_fkey" FOREIGN KEY ("cropRecordId") REFERENCES "CropRecord"("id") ON DELETE CASCADE ON UPDATE CASCADE;
