require('dotenv').config(); // Carrega variáveis de ambiente do .env
const mongoose = require("mongoose");

async function main() {
  try {
    const mongodb_uri = process.env.MONGODB_URI;
    //
    if (!mongodb_uri) {
      throw new Error("A variável de ambiente MONGODB_URI não está definida.");
    }

    mongoose.set("strictQuery", true);
    await mongoose.connect(mongodb_uri);
    console.log("Connectado ao Banco de Dados.");
    
  } catch (error) {
    console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
  }
}

module.exports = main;