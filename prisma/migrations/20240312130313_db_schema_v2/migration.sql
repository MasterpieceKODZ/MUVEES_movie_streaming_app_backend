/*
  Warnings:

  - You are about to alter the column `title` on the `movie` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to alter the column `summary` on the `movie` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `releaseYear` on the `movie` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(4)`.
  - You are about to alter the column `countryOfOrigin` on the `movie` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE "movie" ALTER COLUMN "title" SET DATA TYPE VARCHAR(40),
ALTER COLUMN "summary" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "releaseYear" SET DATA TYPE VARCHAR(4),
ALTER COLUMN "countryOfOrigin" SET DATA TYPE VARCHAR(20);
