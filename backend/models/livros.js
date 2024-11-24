const mongoose = require("mongoose");
const { Schema } = mongoose;

const livroSchema = new Schema(
  {
    id_editora: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Editora', 
      required: true 
    },
    titulo: {
      type: String,
      required: true
    },
    resumo: {
      type: String
    }, 
    autores: {
      type: [String]
    },
    quantidade_paginas: {
      type: Number,
      required: false,
      default: null
    },
    arquivo_livro: {
      type: String,
      required: false,
      default: null
    }
  }, 
  {
    Timestamp: true
  }   
);

const Livro = mongoose.model("Livro", livroSchema);
module.exports = {Livro};