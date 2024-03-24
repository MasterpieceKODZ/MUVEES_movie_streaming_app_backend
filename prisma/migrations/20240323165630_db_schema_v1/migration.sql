-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(20) NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "summary" VARCHAR(500) NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "coverImageUrl" TEXT NOT NULL,
    "numberOfStreams" INTEGER NOT NULL,
    "genres" TEXT[],
    "mainCasts" TEXT[],
    "releaseYear" VARCHAR(4) NOT NULL,
    "countryOfOrigin" VARCHAR(200) NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "movies_videoUrl_key" ON "movies"("videoUrl");

-- CreateIndex
CREATE UNIQUE INDEX "movies_coverImageUrl_key" ON "movies"("coverImageUrl");

-- CreateIndex
CREATE INDEX "movies_id_idx" ON "movies"("id");

-- CreateIndex
CREATE INDEX "movies_title_idx" ON "movies"("title");

-- CreateIndex
CREATE INDEX "movies_countryOfOrigin_idx" ON "movies"("countryOfOrigin");

-- CreateIndex
CREATE UNIQUE INDEX "_userWatchList_AB_unique" ON "_userWatchList"("A", "B");

-- CreateIndex
CREATE INDEX "_userWatchList_B_index" ON "_userWatchList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_userWatchHistory_AB_unique" ON "_userWatchHistory"("A", "B");

-- CreateIndex
CREATE INDEX "_userWatchHistory_B_index" ON "_userWatchHistory"("B");

-- AddForeignKey
ALTER TABLE "_userWatchList" ADD CONSTRAINT "_userWatchList_A_fkey" FOREIGN KEY ("A") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userWatchList" ADD CONSTRAINT "_userWatchList_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userWatchHistory" ADD CONSTRAINT "_userWatchHistory_A_fkey" FOREIGN KEY ("A") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userWatchHistory" ADD CONSTRAINT "_userWatchHistory_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
