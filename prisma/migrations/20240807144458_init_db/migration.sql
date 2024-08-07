/*
  Warnings:

  - You are about to drop the column `adress` on the `Barbershop` table. All the data in the column will be lost.
  - You are about to drop the column `imgeurl` on the `Barbershop` table. All the data in the column will be lost.
  - Added the required column `address` to the `Barbershop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageurl` to the `Barbershop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barbershop" DROP COLUMN "adress",
DROP COLUMN "imgeurl",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "imageurl" TEXT NOT NULL;
