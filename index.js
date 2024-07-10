const express = require('express')
const app = express()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const port = process.env.PORT || 7699;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/game', async (req, res) => {
    const games = await prisma.game.findMany({
        include : {
            developer : true,
        },
    });
    console.log(games);
    res.send(games)
})

app.get('/api/developer', async (req, res) => {
    const developers = await prisma.developer.findMany({
        include : {
            games : true,
        },
    });
    console.log(developers);
    res.send(developers)
})

app.get('/api/developer/:id', async (req, res) => {
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})