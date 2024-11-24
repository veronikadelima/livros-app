const mongoose = require("mongoose");
const { Schema } = mongoose;

const historicoSchema = new Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    id_livro: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Livro', 
      required: true 
    },
    visualizado: {
      type: String,
      enum: ['sim', 'não'], // Lista de valores permitidos
      default: 'não', // Valor padrão
    },
    ultima_pagina_acessada: {
      type: Number,
      required: false,
      default: null
    },
    numero_paginas_lidas: {
      type: Number,
      required: false,
      default: null
    },
    leitura_concluida: {
      type: String,
      enum: ['sim', 'não'], // Lista de valores permitidos
      default: 'não', // Valor padrão
    }
  }, 
  {
    Timestamp: true
  }
);

const Historico = mongoose.model("Historico", historicoSchema);
module.exports = {Historico};