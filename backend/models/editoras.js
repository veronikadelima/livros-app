const mongoose = require("mongoose");
const { Schema } = mongoose;

const editoraSchema = new Schema(
  {
    _id: {
      type: Number,
      unique: true
    },
    nome: {
      type: String,
      required: true
    },
  }, 
  {
    timestamps: true
  }
);

const Editora = mongoose.model("Editora", editoraSchema);
module.exports = {
  Editora,
  editoraSchema
};