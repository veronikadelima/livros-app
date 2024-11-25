const router = require("express").Router();
const livroController = require("../controllers/livroController");

// Rotas para /livros
router.route("/livros").post(livroController.create) // Criar um novo livro
router.route("/livros").get(livroController.getAll); // Obter todos os livros

// Rotas para /livros/:id
router.route("/livros/:id").get(livroController.get)     // Obter um livro específico
router.route("/livros/:id").put(livroController.update)  // Atualizar um livro específico
router.route("/livros/:id").delete(livroController.delete); // Excluir um livro específico

module.exports = router;
