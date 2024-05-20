-- CreateTable
CREATE TABLE `Destinos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `valor` DECIMAL(10, 2) NOT NULL,
    `data` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pontos_Turisticos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `endereco` VARCHAR(255) NOT NULL,
    `telefone` VARCHAR(20) NULL,
    `valor` DECIMAL(10, 2) NULL DEFAULT 0,
    `id_destino` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hoteis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `valor` DECIMAL(10, 2) NOT NULL,
    `avaliacao` INTEGER NOT NULL DEFAULT 0,
    `email` VARCHAR(255) NOT NULL,
    `site` VARCHAR(255) NULL,
    `id_destino` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Telefones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_hotel` INTEGER NOT NULL,
    `telefone` VARCHAR(20) NULL,

    UNIQUE INDEX `Telefones_telefone_key`(`telefone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pontos_Turisticos` ADD CONSTRAINT `Pontos_Turisticos_id_destino_fkey` FOREIGN KEY (`id_destino`) REFERENCES `Destinos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hoteis` ADD CONSTRAINT `Hoteis_id_destino_fkey` FOREIGN KEY (`id_destino`) REFERENCES `Destinos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Telefones` ADD CONSTRAINT `Telefones_id_hotel_fkey` FOREIGN KEY (`id_hotel`) REFERENCES `Hoteis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
