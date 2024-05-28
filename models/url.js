const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectURL: {
    type: String,
    required: true,
  },
  visitHistory: [{ timestamp: { type: Number } }, { timestamps: true }],

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
