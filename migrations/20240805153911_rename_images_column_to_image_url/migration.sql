/*
  Warnings:

  - You are about to drop the column `images` on the `Gifts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Gifts" DROP COLUMN "images",
ADD COLUMN     "imageUrl" TEXT;
