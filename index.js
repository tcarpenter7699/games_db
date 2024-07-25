const express = require('express')
const app = express()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

//logs each request on the server
app.use(morgan('dev'));

//parses the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//logs out the body to the console
app.use((req, res, next) => {
    console.log("<___BODY LOGGER START___>");
    console.log(req.body);
    console.log("<___BODY LOGGER END___>");
    next();
});


app.use("/", express.static(__dirname + "/client/dist"));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use("/api", require("./api"))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})