const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;

    const ponto = await prisma.Pontos_Turisticos.create({
        data
    });

    res.status(201).json(ponto).end();
}

const read = async (req, res) => {
    const ponto = await prisma.Pontos_Turisticos.findMany({
        include: {
            destinos: true
        }
    });

    res.status(200).json(hoteis).end();
}

const update = async (req, res) => {
    const data = req.body;

    const ponto = await prisma.Pontos_Turisticos.update({
        where: {
            id: Number(req.params.id)
        },
        data
    });
    
    res.status(200).json(ponto).end();
}

const del = async (req, res) => {
    const ponto = await prisma.Pontos_Turisticos.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(ponto).end();
}

module.exports = {
    create,
    read,
    update,
    del
}