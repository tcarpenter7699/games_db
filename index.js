const express = require('express')
const app = express()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", require("./api"))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})