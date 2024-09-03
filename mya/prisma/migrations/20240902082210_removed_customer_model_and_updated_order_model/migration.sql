/*
  Warnings:

  - You are about to drop the column `orders` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CustomerToOrder` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CustomerToOrder" DROP CONSTRAINT "_CustomerToOrder_A_fkey";

-- DropForeignKey
ALTER TABLE "_CustomerToOrder" DROP CONSTRAINT "_CustomerToOrder_B_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "orders";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "_CustomerToOrder";

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
