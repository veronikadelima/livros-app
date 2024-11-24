const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    nivel_acesso: {
      type: String,
      enum: ['user', 'admin'], // Lista de valores permitidos
      default: 'user', // Valor padrão
      required: true
    }
  }, 
  {
    Timestamp: true
  }   
);

const User = mongoose.model("User", userSchema);
module.exports = {
  User, 
  userSchema
};