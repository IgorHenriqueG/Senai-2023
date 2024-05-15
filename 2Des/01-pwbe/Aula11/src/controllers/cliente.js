const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;

    const cliente = await prisma.clientes.create({
        data
    });

    return res.status(201).json(cliente).end();
}

const read = async (req, res) => {
    const clientes = await prisma.clientes.findMany();

    return res.status(200).json(clientes).end();
}

const update = async (req, res) => {
    const data = req.body;

    const cliente = await prisma.clientes.update({
        where: {
            id: Number(req.params.id)
        },
        data
    });

    return res.status(200).json(cliente).end();
}

const del = async (req, res) => {
    const cliente = await prisma.clientes.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    return res.status(200).json(cliente).end();
}

module.exports = { 
    create, 
    read,
    update,
    del
}