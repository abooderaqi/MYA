/*
  Warnings:

  - You are about to drop the column `rate` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "quantity" INTEGER[];

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "rate";
