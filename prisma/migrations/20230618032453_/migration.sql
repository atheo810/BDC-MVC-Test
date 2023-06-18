/*
  Warnings:

  - You are about to drop the column `avaiable` on the `buku` table. All the data in the column will be lost.
  - Added the required column `available` to the `buku` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_buku" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,
    "desc" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "img" TEXT NOT NULL
);
INSERT INTO "new_buku" ("category", "createAt", "desc", "id", "img", "name", "price", "qty", "updateAt") SELECT "category", "createAt", "desc", "id", "img", "name", "price", "qty", "updateAt" FROM "buku";
DROP TABLE "buku";
ALTER TABLE "new_buku" RENAME TO "buku";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
