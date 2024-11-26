const router = require("express").Router();
const livroController = require("../controllers/livroController");

// Rotas para /livros
router.route("/").post((req, res) => livroController.create(req, res)); // Criar um novo livro
router.route("/").get((req, res) => livroController.getAll(req, res)); // Obter todos os livros

// Rotas para /livros/:id
router.route("/:id").get((req, res) =>livroController.get(req, res));    // Obter um livro específico
router.route("/:id").delete((req, res) =>livroController.delete(req, res));// Excluir um livro específico
router.route("/:id").put((req, res) =>livroController.update(req, res)); // Atualizar um livro específico

module.exports = router;