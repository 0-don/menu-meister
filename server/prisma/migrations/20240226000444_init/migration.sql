-- CreateEnum
CREATE TYPE "UserRoleName" AS ENUM ('Admin', 'Mod', 'User', 'Guest');

-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('G', 'L', 'ML', 'KG');

-- CreateEnum
CREATE TYPE "TimeOfDay" AS ENUM ('Any', 'Morning', 'Forenoon', 'Noon', 'Afternoon', 'Evening', 'Night');

-- CreateEnum
CREATE TYPE "MealLocation" AS ENUM ('InRoom', 'CommunalDining', 'OutdoorPatio', 'TherapyGarden', 'SpecialDietary', 'StaffCafeteria', 'VisitorCafe', 'RehabilitationGym', 'GroupActivityRoom', 'QuietRoom', 'NutritionCenter', 'Poolside', 'FamilyDining', 'HealingGarden', 'OnTheGo');

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "expiresIn" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Settings" (
    "id" SERIAL NOT NULL,
    "maxEditOrderDays" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "image" TEXT,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "lastOnline" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER,
    "updatedBy" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" "UserRoleName" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMeal" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "userId" INTEGER NOT NULL,
    "mealId" INTEGER NOT NULL,
    "mealBoardPlanId" INTEGER NOT NULL,
    "weeklyMealGroupId" INTEGER NOT NULL,
    "timeOfDay" "TimeOfDay" NOT NULL DEFAULT 'Any',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "UserMeal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMealLocation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "timeOfDay" "TimeOfDay" NOT NULL DEFAULT 'Any',
    "mealLocation" "MealLocation" NOT NULL DEFAULT 'InRoom',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "UserMealLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Allergens" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "Allergens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Additives" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "Additives_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Properties" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "Properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seasons" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "Seasons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodForms" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "FoodForms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kitchens" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "Kitchens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "blsIdentifier" VARCHAR(50) NOT NULL,
    "energyKcal" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "energyKj" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "breadUnits" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "carbohydrates" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "sugars" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "salt" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "fats" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "saturatedFats" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "unsaturatedFats" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "protein" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecipeIngredient" (
    "id" SERIAL NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "unit" "Unit" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "RecipeIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MealRecipe" (
    "id" SERIAL NOT NULL,
    "mealId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "MealRecipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MealBoardPlan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "color" VARCHAR(7),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "MealBoardPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeeklyMealGroup" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "color" VARCHAR(7),
    "description" TEXT,
    "timeOfDay" "TimeOfDay" NOT NULL DEFAULT 'Any',
    "year" INTEGER NOT NULL,
    "weekOfYear" INTEGER NOT NULL,
    "orderIndex" INTEGER NOT NULL,
    "mealBoardPlanId" INTEGER NOT NULL,
    "mondayMealId" INTEGER,
    "tuesdayMealId" INTEGER,
    "wednesdayMealId" INTEGER,
    "thursdayMealId" INTEGER,
    "fridayMealId" INTEGER,
    "saturdayMealId" INTEGER,
    "sundayMealId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "updatedBy" INTEGER NOT NULL,

    CONSTRAINT "WeeklyMealGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IngredientAllergens" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RecipeAllergens" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MealAllergens" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_UserAllergens" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IngredientAdditives" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RecipeAdditives" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MealAdditives" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RecipeProperties" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IngredientCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RecipeCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MealCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IngredientFoodForms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RecipeFoodForms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MealFoodForms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RecipeKitchens" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IngredientProperties" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IngredientSeasons" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IngredientKitchens" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_RecipeSeasons" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MealProperties" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MealSeasons" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Token_token_key" ON "Token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_userId_name_key" ON "UserRole"("userId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "UserMealLocation_userId_timeOfDay_mealLocation_key" ON "UserMealLocation"("userId", "timeOfDay", "mealLocation");

-- CreateIndex
CREATE UNIQUE INDEX "Allergens_name_key" ON "Allergens"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Additives_name_key" ON "Additives"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Properties_name_key" ON "Properties"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_key" ON "Categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Seasons_name_key" ON "Seasons"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FoodForms_name_key" ON "FoodForms"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Kitchens_name_key" ON "Kitchens"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_blsIdentifier_key" ON "Ingredient"("blsIdentifier");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientAllergens_AB_unique" ON "_IngredientAllergens"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientAllergens_B_index" ON "_IngredientAllergens"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeAllergens_AB_unique" ON "_RecipeAllergens"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeAllergens_B_index" ON "_RecipeAllergens"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MealAllergens_AB_unique" ON "_MealAllergens"("A", "B");

-- CreateIndex
CREATE INDEX "_MealAllergens_B_index" ON "_MealAllergens"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_UserAllergens_AB_unique" ON "_UserAllergens"("A", "B");

-- CreateIndex
CREATE INDEX "_UserAllergens_B_index" ON "_UserAllergens"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientAdditives_AB_unique" ON "_IngredientAdditives"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientAdditives_B_index" ON "_IngredientAdditives"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeAdditives_AB_unique" ON "_RecipeAdditives"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeAdditives_B_index" ON "_RecipeAdditives"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MealAdditives_AB_unique" ON "_MealAdditives"("A", "B");

-- CreateIndex
CREATE INDEX "_MealAdditives_B_index" ON "_MealAdditives"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeProperties_AB_unique" ON "_RecipeProperties"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeProperties_B_index" ON "_RecipeProperties"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientCategories_AB_unique" ON "_IngredientCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientCategories_B_index" ON "_IngredientCategories"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeCategories_AB_unique" ON "_RecipeCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeCategories_B_index" ON "_RecipeCategories"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MealCategories_AB_unique" ON "_MealCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_MealCategories_B_index" ON "_MealCategories"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientFoodForms_AB_unique" ON "_IngredientFoodForms"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientFoodForms_B_index" ON "_IngredientFoodForms"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeFoodForms_AB_unique" ON "_RecipeFoodForms"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeFoodForms_B_index" ON "_RecipeFoodForms"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MealFoodForms_AB_unique" ON "_MealFoodForms"("A", "B");

-- CreateIndex
CREATE INDEX "_MealFoodForms_B_index" ON "_MealFoodForms"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeKitchens_AB_unique" ON "_RecipeKitchens"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeKitchens_B_index" ON "_RecipeKitchens"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientProperties_AB_unique" ON "_IngredientProperties"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientProperties_B_index" ON "_IngredientProperties"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientSeasons_AB_unique" ON "_IngredientSeasons"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientSeasons_B_index" ON "_IngredientSeasons"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientKitchens_AB_unique" ON "_IngredientKitchens"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientKitchens_B_index" ON "_IngredientKitchens"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeSeasons_AB_unique" ON "_RecipeSeasons"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeSeasons_B_index" ON "_RecipeSeasons"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MealProperties_AB_unique" ON "_MealProperties"("A", "B");

-- CreateIndex
CREATE INDEX "_MealProperties_B_index" ON "_MealProperties"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MealSeasons_AB_unique" ON "_MealSeasons"("A", "B");

-- CreateIndex
CREATE INDEX "_MealSeasons_B_index" ON "_MealSeasons"("B");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Settings" ADD CONSTRAINT "Settings_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Settings" ADD CONSTRAINT "Settings_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRole" ADD CONSTRAINT "UserRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMeal" ADD CONSTRAINT "UserMeal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMeal" ADD CONSTRAINT "UserMeal_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMeal" ADD CONSTRAINT "UserMeal_mealBoardPlanId_fkey" FOREIGN KEY ("mealBoardPlanId") REFERENCES "MealBoardPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMeal" ADD CONSTRAINT "UserMeal_weeklyMealGroupId_fkey" FOREIGN KEY ("weeklyMealGroupId") REFERENCES "WeeklyMealGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMeal" ADD CONSTRAINT "UserMeal_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMeal" ADD CONSTRAINT "UserMeal_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMealLocation" ADD CONSTRAINT "UserMealLocation_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMealLocation" ADD CONSTRAINT "UserMealLocation_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMealLocation" ADD CONSTRAINT "UserMealLocation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allergens" ADD CONSTRAINT "Allergens_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allergens" ADD CONSTRAINT "Allergens_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Additives" ADD CONSTRAINT "Additives_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Additives" ADD CONSTRAINT "Additives_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Properties" ADD CONSTRAINT "Properties_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Properties" ADD CONSTRAINT "Properties_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seasons" ADD CONSTRAINT "Seasons_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seasons" ADD CONSTRAINT "Seasons_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodForms" ADD CONSTRAINT "FoodForms_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodForms" ADD CONSTRAINT "FoodForms_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kitchens" ADD CONSTRAINT "Kitchens_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kitchens" ADD CONSTRAINT "Kitchens_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealRecipe" ADD CONSTRAINT "MealRecipe_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealRecipe" ADD CONSTRAINT "MealRecipe_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealRecipe" ADD CONSTRAINT "MealRecipe_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealRecipe" ADD CONSTRAINT "MealRecipe_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealBoardPlan" ADD CONSTRAINT "MealBoardPlan_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MealBoardPlan" ADD CONSTRAINT "MealBoardPlan_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyMealGroup" ADD CONSTRAINT "WeeklyMealGroup_mealBoardPlanId_fkey" FOREIGN KEY ("mealBoardPlanId") REFERENCES "MealBoardPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyMealGroup" ADD CONSTRAINT "WeeklyMealGroup_mondayMealId_fkey" FOREIGN KEY ("mondayMealId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyMealGroup" ADD CONSTRAINT "WeeklyMealGroup_tuesdayMealId_fkey" FOREIGN KEY ("tuesdayMealId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyMealGroup" ADD CONSTRAINT "WeeklyMealGroup_wednesdayMealId_fkey" FOREIGN KEY ("wednesdayMealId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyMealGroup" ADD CONSTRAINT "WeeklyMealGroup_thursdayMealId_fkey" FOREIGN KEY ("thursdayMealId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyMealGroup" ADD CONSTRAINT "WeeklyMealGroup_fridayMealId_fkey" FOREIGN KEY ("fridayMealId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyMealGroup" ADD CONSTRAINT "WeeklyMealGroup_saturdayMealId_fkey" FOREIGN KEY ("saturdayMealId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyMealGroup" ADD CONSTRAINT "WeeklyMealGroup_sundayMealId_fkey" FOREIGN KEY ("sundayMealId") REFERENCES "Meal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyMealGroup" ADD CONSTRAINT "WeeklyMealGroup_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeeklyMealGroup" ADD CONSTRAINT "WeeklyMealGroup_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientAllergens" ADD CONSTRAINT "_IngredientAllergens_A_fkey" FOREIGN KEY ("A") REFERENCES "Allergens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientAllergens" ADD CONSTRAINT "_IngredientAllergens_B_fkey" FOREIGN KEY ("B") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeAllergens" ADD CONSTRAINT "_RecipeAllergens_A_fkey" FOREIGN KEY ("A") REFERENCES "Allergens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeAllergens" ADD CONSTRAINT "_RecipeAllergens_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MealAllergens" ADD CONSTRAINT "_MealAllergens_A_fkey" FOREIGN KEY ("A") REFERENCES "Allergens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MealAllergens" ADD CONSTRAINT "_MealAllergens_B_fkey" FOREIGN KEY ("B") REFERENCES "Meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserAllergens" ADD CONSTRAINT "_UserAllergens_A_fkey" FOREIGN KEY ("A") REFERENCES "Allergens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserAllergens" ADD CONSTRAINT "_UserAllergens_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientAdditives" ADD CONSTRAINT "_IngredientAdditives_A_fkey" FOREIGN KEY ("A") REFERENCES "Additives"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientAdditives" ADD CONSTRAINT "_IngredientAdditives_B_fkey" FOREIGN KEY ("B") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeAdditives" ADD CONSTRAINT "_RecipeAdditives_A_fkey" FOREIGN KEY ("A") REFERENCES "Additives"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeAdditives" ADD CONSTRAINT "_RecipeAdditives_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MealAdditives" ADD CONSTRAINT "_MealAdditives_A_fkey" FOREIGN KEY ("A") REFERENCES "Additives"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MealAdditives" ADD CONSTRAINT "_MealAdditives_B_fkey" FOREIGN KEY ("B") REFERENCES "Meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeProperties" ADD CONSTRAINT "_RecipeProperties_A_fkey" FOREIGN KEY ("A") REFERENCES "Properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeProperties" ADD CONSTRAINT "_RecipeProperties_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientCategories" ADD CONSTRAINT "_IngredientCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientCategories" ADD CONSTRAINT "_IngredientCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeCategories" ADD CONSTRAINT "_RecipeCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeCategories" ADD CONSTRAINT "_RecipeCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MealCategories" ADD CONSTRAINT "_MealCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MealCategories" ADD CONSTRAINT "_MealCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientFoodForms" ADD CONSTRAINT "_IngredientFoodForms_A_fkey" FOREIGN KEY ("A") REFERENCES "FoodForms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientFoodForms" ADD CONSTRAINT "_IngredientFoodForms_B_fkey" FOREIGN KEY ("B") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeFoodForms" ADD CONSTRAINT "_RecipeFoodForms_A_fkey" FOREIGN KEY ("A") REFERENCES "FoodForms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeFoodForms" ADD CONSTRAINT "_RecipeFoodForms_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MealFoodForms" ADD CONSTRAINT "_MealFoodForms_A_fkey" FOREIGN KEY ("A") REFERENCES "FoodForms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MealFoodForms" ADD CONSTRAINT "_MealFoodForms_B_fkey" FOREIGN KEY ("B") REFERENCES "Meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeKitchens" ADD CONSTRAINT "_RecipeKitchens_A_fkey" FOREIGN KEY ("A") REFERENCES "Kitchens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeKitchens" ADD CONSTRAINT "_RecipeKitchens_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientProperties" ADD CONSTRAINT "_IngredientProperties_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientProperties" ADD CONSTRAINT "_IngredientProperties_B_fkey" FOREIGN KEY ("B") REFERENCES "Properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientSeasons" ADD CONSTRAINT "_IngredientSeasons_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientSeasons" ADD CONSTRAINT "_IngredientSeasons_B_fkey" FOREIGN KEY ("B") REFERENCES "Seasons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientKitchens" ADD CONSTRAINT "_IngredientKitchens_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientKitchens" ADD CONSTRAINT "_IngredientKitchens_B_fkey" FOREIGN KEY ("B") REFERENCES "Kitchens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeSeasons" ADD CONSTRAINT "_RecipeSeasons_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeSeasons" ADD CONSTRAINT "_RecipeSeasons_B_fkey" FOREIGN KEY ("B") REFERENCES "Seasons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MealProperties" ADD CONSTRAINT "_MealProperties_A_fkey" FOREIGN KEY ("A") REFERENCES "Meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MealProperties" ADD CONSTRAINT "_MealProperties_B_fkey" FOREIGN KEY ("B") REFERENCES "Properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MealSeasons" ADD CONSTRAINT "_MealSeasons_A_fkey" FOREIGN KEY ("A") REFERENCES "Meal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MealSeasons" ADD CONSTRAINT "_MealSeasons_B_fkey" FOREIGN KEY ("B") REFERENCES "Seasons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
