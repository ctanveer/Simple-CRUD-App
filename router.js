"use strict";

const Router = require("koa-router");
const router = new Router();
const message = require("./controller/message.controller");

router.get("/messages", message.getMessages);
router.get("/message/:id", message.getMessage);
router.post("/message", message.postMessage);
router.put("/message/:id", message.putMessage);
router.delete("/message/:id", message.deleteMessage);

module.exports = router;
