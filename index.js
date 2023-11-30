"use strict";

const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");

const router = require("./router");
const mongoose = require("mongoose");

const port = 3000;

app.use(bodyParser());
app.use(router.routes());

(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/messages-db");
    console.log("[mongoose] Connected to DB");
    app.listen(port, () => {
      console.log(`[server]: Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
