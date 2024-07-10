/*
  Warnings:

  - You are about to drop the column `release_date` on the `Game` table. All the data in the column will be lost.
  - Added the required column `year` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "release_date",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "year" TEXT NOT NULL;
