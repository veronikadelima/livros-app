const router = require("express").Router();
const livroController = require("../controllers/livroController");

// Rotas para /livros
router
  .route("/livros")
    .post(livroController.create) // Criar um novo livro
    .get(livroController.getAll); // Obter todos os livros

// Rotas para /livros/:id
router
  .route("/livros/:id")
    .get(livroController.get)     // Obter um livro específico
    .put(livroController.update)  // Atualizar um livro específico
    .delete(livroController.delete); // Excluir um livro específico

module.exports = router;
