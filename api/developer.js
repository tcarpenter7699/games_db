const express = require("express");
const developerRouter = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// GET /api/developer/
developerRouter.get('/', async (req, res) => {
    const developers = await prisma.developer.findMany({
        include : {
            games : true,
        },
    });
    console.log(developers);
    res.send(developers)
})

// GET /api/developer/:id
developerRouter.get('/:id', async (req, res) => {
    const developer = await prisma.developer.findUnique({
        where: {
            id : parseInt(req.params.id)
        },
        include: {
            games: true,
        }
    });
    console.log(developer);
    res.send(developer)
})

module.exports = developerRouter;