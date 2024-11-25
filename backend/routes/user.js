const router = require("express").Router();
const userController = require("../controllers/userController");

// Rotas para /livros
router.route("/users").post(userController.create) // Criar um novo livro
router.route("/users").get(userController.getAll); // Obter todos os livros

// Rotas para /livros/:id
router.route("/users").get(userController.get)     // Obter um livro específico
router.route("/users").put(userController.update)  // Atualizar um livro específico
router.route("/users").delete(userController.delete); // Excluir um livro específico

module.exports = router;
