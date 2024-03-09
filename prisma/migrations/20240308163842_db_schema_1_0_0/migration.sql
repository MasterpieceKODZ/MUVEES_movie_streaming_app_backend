-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "coverImageUrl" TEXT NOT NULL,
    "numberOfStreams" INTEGER NOT NULL,
    "genres" TEXT[],
    "mainCasts" TEXT[],
    "releaseYear" TEXT NOT NULL,
    "countryOfOrigin" TEXT NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_movieTouser" (
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
CREATE UNIQUE INDEX "_movieTouser_AB_unique" ON "_movieTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_movieTouser_B_index" ON "_movieTouser"("B");

-- AddForeignKey
ALTER TABLE "_movieTouser" ADD CONSTRAINT "_movieTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_movieTouser" ADD CONSTRAINT "_movieTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
