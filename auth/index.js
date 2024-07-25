const express = require("express");
const authRouter = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const jwt = require("jsonwebtoken");

// /auth/
authRouter.get("/", (req, res) => {
    res.send("Auth route /auth");
});

authRouter.post("/register", async (req, res) => {
    try{
        const newUser = await prisma.user.create({data: req.body});
        if(newUser){
            //send back token to the client
        jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: {id: newUser.id}
        }, process.env.JWT_SECRET);
        console.log("Token:", token);
        res.send({token: token});
        }
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = authRouter;