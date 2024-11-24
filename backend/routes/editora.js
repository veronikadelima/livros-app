const router = require("express").Router();
const editoraController = require("../controllers/livroController");

// Rotas para /livros
router
  .route("/editoras")
  .post(editoraController.create) // Criar um novo livro
  .get(editoraController.getAll); // Obter todos os livros

// Rotas para /livros/:id
router
  .route("/editoras/:id")
  .get(editoraController.get)     // Obter um livro específico
  .put(editoraController.delete); // Excluir um livro específico

module.exports = router;