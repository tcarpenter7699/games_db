const express = require("express");
const apiRouter = express.Router();

// /api/
apiRouter.get("/", (req, res) => {
    res.send("Api route /api");
})

apiRouter.use("/game", require("./game"))
apiRouter.use("/developer", require("./developer"))

module.exports = apiRouter;