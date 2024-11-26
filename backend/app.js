require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const conn = require("./db/conn");
const routes = require("./routes/router");

app.use(cors());

app. use(express.json());

//Conexão com o banco de dados
conn();

//Routes
app.use("/api", routes);

app.listen(3000, function() {
  console.log("Servidor online!")
});