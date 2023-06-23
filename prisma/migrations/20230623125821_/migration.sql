/*
  Warnings:

  - You are about to drop the column `category` on the `book` table. All the data in the column will be lost.
  - Added the required column `category_id` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAT" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,
    "desc" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    CONSTRAINT "book_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_book" ("available", "createAt", "desc", "id", "img", "name", "price", "qty", "updateAt") SELECT "available", "createAt", "desc", "id", "img", "name", "price", "qty", "updateAt" FROM "book";
DROP TABLE "book";
ALTER TABLE "new_book" RENAME TO "book";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "category_nama_key" ON "category"("nama");
