"use strict";

const {
  getAll,
  getOne,
  postOne,
  putOne,
  deleteOne,
} = require("../models/message/message.query");

exports.getMessages = async (ctx) => {
  try {
    ctx.body = await getAll();
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
  }
};

exports.getMessage = async (ctx) => {
  try {
    const id = ctx.params.id;
    const message = await getOne(id);
    if (!message) throw new Error("Message not found");
    ctx.body = message;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
  }
};

exports.postMessage = async (ctx) => {
  try {
    const { content, authorId, timestamp } = ctx.request.body;
    await postOne({ content, authorId, timestamp });
    ctx.status = 201;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

exports.putMessage = async (ctx) => {
  try {
    const { content, authorId, timestamp } = ctx.request.body;
    const id = ctx.params.id;
    const message = await putOne(id, { content, authorId, timestamp });
    if (!message) throw new Error("Message not updated");
    ctx.body = message;
    ctx.status = 201;
  } catch (err) {
    ctx.body = err;
    ctx.status = 500;
  }
};

exports.deleteMessage = async (ctx) => {
  try {
    const id = ctx.params.id;
    const message = await deleteOne(id);
    if (!message) throw new Error("Message not found");
    ctx.status = 204;
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
  }
};
