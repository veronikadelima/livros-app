const router = require("express").Router();
const hitoricoController = require("../controllers/historicoController");

// Rotas para /historicos
router.route("/").post((req, res) => historicoController.create(req, res)); // Criar um novo historico
router.route("/").get((req, res) => historicoController.getAll(req, res)); // Obter todos os historicos

// Rotas para /historicos/:id
router.route("/:id").get((req, res) =>historicoController.get(req, res));    // Obter um historico específico
router.route("/:id").delete((req, res) =>historicoController.delete(req, res));// Excluir um historico específico
router.route("/:id").put((req, res) =>historicoController.update(req, res)); // Atualizar um historico específico

module.exports = router;