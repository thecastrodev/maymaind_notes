-- CreateEnum
CREATE TYPE "TaskState" AS ENUM ('pending', 'doing', 'done');

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" "TaskState" NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
