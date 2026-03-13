-- CreateTable
CREATE TABLE `ClassGroupMonthlyFee` (
    `id` VARCHAR(191) NOT NULL,
    `effectiveYear` INTEGER NOT NULL,
    `effectiveMonth` INTEGER NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `classGroupId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ClassGroupMonthlyFee_classGroupId_effectiveYear_effectiveMon_idx`(`classGroupId`, `effectiveYear`, `effectiveMonth`),
    UNIQUE INDEX `ClassGroupMonthlyFee_classGroupId_effectiveYear_effectiveMon_key`(`classGroupId`, `effectiveYear`, `effectiveMonth`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ClassGroupMonthlyFee` ADD CONSTRAINT `ClassGroupMonthlyFee_classGroupId_fkey` FOREIGN KEY (`classGroupId`) REFERENCES `ClassGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
