-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "cover" TEXT,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "release_date" INTEGER NOT NULL,
    "trailer" TEXT,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
