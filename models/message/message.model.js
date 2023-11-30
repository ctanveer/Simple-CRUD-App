"use strict";
const { model, Schema } = require("mongoose");

const messageSchema = new Schema({
  content: {
    type: String,
  },
  authorId: {
    type: Boolean,
  },
  timestamp: {
    type: Number,
  },
});

const Message = model("messages", messageSchema);
module.exports = Message;
