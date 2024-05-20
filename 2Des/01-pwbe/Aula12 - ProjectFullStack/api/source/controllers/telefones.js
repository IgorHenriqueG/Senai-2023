const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;

    const telefone = await prisma.telefones.create({
        data
    });

    res.status(201).json(telefone).end();
}

const read = async (req, res) => {
    const telefones = await prisma.telefones.findMany({
        include: {
            hotel: true
        }
    });

    res.status(200).json(telefones).end();
}

const update = async (req, res) => {
    const data = req.body;

    const telefone = await prisma.telefones.update({
        where: {
            id: Number(req.params.id)
        },
        data
    });
    
    res.status(200).json(telefone).end();
}

const del = async (req, res) => {
    const telefone = await prisma.telefones.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(telefone).end();
}

module.exports = {
    create,
    read,
    update,
    del
}