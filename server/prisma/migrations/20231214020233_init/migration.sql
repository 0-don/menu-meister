/*
  Warnings:

  - You are about to drop the column `description` on the `User` table. All the data in the column will be lost.
  - The values [VENDOR] on the enum `UserRole_name` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `description`;

-- AlterTable
ALTER TABLE `UserRole` MODIFY `name` ENUM('ADMIN', 'MOD', 'USER', 'GUEST') NOT NULL;
