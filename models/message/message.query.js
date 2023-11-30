const Message = require("./message.model.js");

exports.getAll = async () => {
  try {
    const messages = await Message.find({});
    return messages;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting all messages.");
  }
};

exports.getOne = async (id) => {
  try {
    const message = await Message.findById(id);
    if (!message) throw new Error("Message not found");
    return message;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting message.");
  }
};

exports.postOne = async (msg) => {
  try {
    const message = await Message.create(msg);
    return message;
  } catch (error) {
    console.log(error);
    throw new Error("Error adding new message.");
  }
};

exports.putOne = async (id, msg) => {
  try {
    const message = await Message.findByIdAndUpdate(id, msg, { new: true });
    if (!message) throw new Error("Message not found");
    return message;
  } catch (error) {
    console.log(error);
    throw new Error("Error updating message.");
  }
};

exports.deleteOne = async (id) => {
  try {
    const message = await Message.findByIdAndDelete(id);
    if (!message) throw new Error("Message not found");
    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Error deleting message.");
  }
};
