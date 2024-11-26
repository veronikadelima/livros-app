const router = require("express").Router();
const editoraController = require("../controllers/editoraController");

// Rotas para /editoras
router.route("/").post((req, res) => editoraController.create(req, res)); // Criar um novo livro
router.route("/").get((req, res) => editoraController.getAll(req, res)); // Obter todos os livros

// Rotas para /editoras/:id
router.route("/:id").get((req, res) => editoraController.get(req, res));    // Obter um livro específico
router.route("/:id").delete((req, res) => editoraController.delete(req, res));// Excluir um livro específico
router.route("/:id").put((req, res) => editoraController.update(req, res)); // Atualizar um livro específico
    
module.exports = router;