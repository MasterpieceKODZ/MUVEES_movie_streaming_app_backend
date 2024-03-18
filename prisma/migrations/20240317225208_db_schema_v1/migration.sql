-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(20) NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(40) NOT NULL,
    "summary" VARCHAR(100) NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "coverImageUrl" TEXT NOT NULL,
    "numberOfStreams" INTEGER NOT NULL,
    "genres" TEXT[],
    "mainCasts" TEXT[],
    "releaseYear" VARCHAR(4) NOT NULL,
    "countryOfOrigin" VARCHAR(20) NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_userWatchList" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_userWatchHistory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE INDEX "user_username_idx" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "movie_videoUrl_key" ON "movie"("videoUrl");

-- CreateIndex
CREATE UNIQUE INDEX "movie_coverImageUrl_key" ON "movie"("coverImageUrl");

-- CreateIndex
CREATE INDEX "movie_videoUrl_idx" ON "movie"("videoUrl");

-- CreateIndex
CREATE UNIQUE INDEX "_userWatchList_AB_unique" ON "_userWatchList"("A", "B");

-- CreateIndex
CREATE INDEX "_userWatchList_B_index" ON "_userWatchList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_userWatchHistory_AB_unique" ON "_userWatchHistory"("A", "B");

-- CreateIndex
CREATE INDEX "_userWatchHistory_B_index" ON "_userWatchHistory"("B");

-- AddForeignKey
ALTER TABLE "_userWatchList" ADD CONSTRAINT "_userWatchList_A_fkey" FOREIGN KEY ("A") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userWatchList" ADD CONSTRAINT "_userWatchList_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userWatchHistory" ADD CONSTRAINT "_userWatchHistory_A_fkey" FOREIGN KEY ("A") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userWatchHistory" ADD CONSTRAINT "_userWatchHistory_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
