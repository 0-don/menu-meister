/*
  Warnings:

  - Made the column `timeOfDay` on table `UserMeal` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `UserMeal` DROP FOREIGN KEY `UserMeal_userId_timeOfDay_fkey`;

-- AlterTable
ALTER TABLE `UserMeal` MODIFY `timeOfDay` ENUM('Any', 'Morning', 'Forenoon', 'Noon', 'Afternoon', 'Evening', 'Night') NOT NULL DEFAULT 'Any';
