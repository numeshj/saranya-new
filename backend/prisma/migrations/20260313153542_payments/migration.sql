-- CreateTable
CREATE TABLE `Payment` (
    `id` VARCHAR(191) NOT NULL,
    `paidYear` INTEGER NOT NULL,
    `paidMonth` INTEGER NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `isFreeCard` BOOLEAN NOT NULL DEFAULT false,
    `method` ENUM('CASH', 'CARD', 'BANK_TRANSFER') NOT NULL DEFAULT 'CASH',
    `source` ENUM('QR_SCAN', 'MANUAL') NOT NULL DEFAULT 'QR_SCAN',
    `notes` VARCHAR(191) NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `classGroupId` VARCHAR(191) NOT NULL,
    `createdByUserId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Payment_studentId_idx`(`studentId`),
    INDEX `Payment_classGroupId_idx`(`classGroupId`),
    INDEX `Payment_paidYear_paidMonth_idx`(`paidYear`, `paidMonth`),
    UNIQUE INDEX `Payment_studentId_classGroupId_paidYear_paidMonth_key`(`studentId`, `classGroupId`, `paidYear`, `paidMonth`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_classGroupId_fkey` FOREIGN KEY (`classGroupId`) REFERENCES `ClassGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_createdByUserId_fkey` FOREIGN KEY (`createdByUserId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
