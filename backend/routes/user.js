const router = require("express").Router();
const userController = require("../controllers/userController");

// Rotas para /users
router.route("/").post((req, res) => userController.create(req, res)); // Criar um novo user
router.route("/").get((req, res) => userController.getAll(req, res)); // Obter todos os users

// Rotas para /users/:id
router.route("/:id").get((req, res) =>userController.get(req, res));    // Obter um user específico
router.route("/:id").delete((req, res) =>userController.delete(req, res));// Excluir um user específico
router.route("/:id").put((req, res) =>userController.update(req, res)); // Atualizar um user específico
    
module.exports = router;
