const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;

    const destino = await prisma.destinos.create({
        data
    });

    res.status(201).json(destino).end();
}

const read = async (req, res) => {
    const destinos = await prisma.destinos.findMany({
        include: {
            hoteis: true,
            pontos: true
        }
    });

    res.status(200).json(destinos).end();
}

const update = async (req, res) => {
    const data = req.body;

    const destino = await prisma.destinos.update({
        where: {
            id: Number(req.params.id)
        },
        data
    });
    
    res.status(200).json(destino).end();
}

const del = async (req, res) => {
    const destino = await prisma.destinos.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(destino).end();
}

module.exports = {
    create,
    read,
    update,
    del
}