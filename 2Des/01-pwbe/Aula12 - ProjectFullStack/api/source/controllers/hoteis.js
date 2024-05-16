const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;

    const hotel = await prisma.hoteis.create({
        data
    });

    res.status(201).json(hotel).end();
}

const read = async (req, res) => {
    const hoteis = await prisma.hoteis.findMany({
        include: {
            telefones: true
        }
    });

    res.status(200).json(hoteis).end();
}

const update = async (req, res) => {
    const data = req.body;

    const hotel = await prisma.hoteis.update({
        where: {
            id: Number(req.params.id)
        },
        data
    });
    
    res.status(200).json(hotel).end();
}

const del = async (req, res) => {
    const hotel = await prisma.hoteis.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(hotel).end();
}

module.exports = {
    create,
    read,
    update,
    del
}