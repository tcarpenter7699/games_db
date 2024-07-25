const express = require("express");
const gameRouter = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// GET /api/game/
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

// GET /api/game/:id
gameRouter.get('/:id', async (req, res) => {
    try{
    const game = await prisma.game.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
        include : {
            developer: true,
        }
    });
    res.send(game);
    } catch(err){
    console.log(err);
    res.sendStatus(500)
    }
});

// POST /api/game/
gameRouter.post("/", async (req, res) => {
    try{
    const newGame = await prisma.game.create({
        data:{
            //GET DATA FROM BODY
        }
    });
    }catch(err){
    console.log(err);
    res.sendStatus(500)
    }
})

module.exports = gameRouter;