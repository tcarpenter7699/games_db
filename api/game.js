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
    if(game){
        res.send(game);
    } else {
        res.sendStatus(404);
    }
    } catch(err){
    console.log(err);
    res.sendStatus(500)
    }
});

// POST /api/game/
gameRouter.post("/", async (req, res) => {
    try{
    const newGame = await prisma.game.create({
        data: req.body
    });
    res.send(newGame);
    }catch(err){
    console.log(err);
    res.sendStatus(500)
    }
})

// DELETE /api/game/:id
gameRouter.delete("/:id", async (req, res) => {
    try{
    const deletedGame = await prisma.game.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    if(deletedGame){
        res.send(deletedGame);
    }
    else{
        res.sendStatus(404);
    }
    }catch(err){
    console.log(err);
    res.sendStatus(500)
    }
});

// PUT /api/game
gameRouter.put("/:id", async (req, res) => {
    try{
    const updatedGame = await prisma.game.update({
        where:{
            id: parseInt(req.params.id)
        },
        data: req.body,
    })
    if(deletedGame){
        res.send(updatedGameGame);
    }
    else{
        res.sendStatus(404);
    }
    }catch(err){
    console.log(err);
    res.sendStatus(500)
    }
});

module.exports = gameRouter;