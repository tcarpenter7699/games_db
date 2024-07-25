const express = require("express");
const gameRouter = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// /api/game/
gameRouter.get('/', async (req, res) => {
    try{
    const games = await prisma.game.findMany({
        include : {
            developer : true,
        },
    });
    res.send(games);
    } catch(err){
    console.log(err);
    res.sendStatus(500)
    }
});

module.exports = gameRouter;