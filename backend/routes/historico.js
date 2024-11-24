const router = require("express").Router();
const historicoController = require("../controllers/historicoController");

// Rotas para /livros
router
  .route("/historicos")
  .post(historicoController.create) // Criar um novo livro
  .get(historicoController.getAll); // Obter todos os livros

// Rotas para /livros/:id
router
  .route("/historicos/:id")
  .get(historicoController.get)     // Obter um livro específico
  .put(historicoController.update)  // Atualizar um livro específico
  .delete(historicoController.delete); // Excluir um livro específico

module.exports = router;