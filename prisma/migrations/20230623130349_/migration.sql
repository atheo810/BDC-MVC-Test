/*
  Warnings:

  - You are about to drop the column `nama` on the `category` table. All the data in the column will be lost.
  - Added the required column `name` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAT" DATETIME NOT NULL
);
INSERT INTO "new_category" ("createAt", "id", "updateAT") SELECT "createAt", "id", "updateAT" FROM "category";
DROP TABLE "category";
ALTER TABLE "new_category" RENAME TO "category";
CREATE UNIQUE INDEX "category_name_key" ON "category"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
