-- CreateTable
CREATE TABLE "buku" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "avaiable" BOOLEAN NOT NULL,
    "desc" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "img" TEXT NOT NULL
);
