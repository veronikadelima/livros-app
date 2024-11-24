const router = require("express").Router();
const userController = require("../controllers/livroController");

// Rotas para /livros
router
  .route("/users")
  .post(userController.create) // Criar um novo livro
  .get(userController.getAll); // Obter todos os livros

// Rotas para /livros/:id
router
  .route("/users/:id")
  .get(userController.get)     // Obter um livro específico
  .put(userController.update)  // Atualizar um livro específico
  .delete(userController.delete); // Excluir um livro específico

module.exports = router;
