/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `images` to the `Gifts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gifts" ADD COLUMN     "images" TEXT NOT NULL;

-- DropTable
DROP TABLE "Post";
