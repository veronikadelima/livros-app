const router = require("express").Router();
const editoraController = require("../controllers/editoraController");

// Rotas para /livros
router.route("/editoras").post(editoraController.create) // Criar um novo livro
router.route("/editoras").get(editoraController.getAll); // Obter todos os livros

// Rotas para /livros/:id
router.route("/editoras/:id").get(editoraController.get)     // Obter um livro específico
router.route("/editoras/:id").put(editoraController.delete); // Excluir um livro específico

module.exports = router;