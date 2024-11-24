const router = require("express").Router();

// Rotas Editoras
const editoraRouter = require("./editora");
router.use("/editoras", editoraRouter); // Define um prefixo claro para as rotas de editoras

// Rotas Users (Usuários)
const userRouter = require("./user");
router.use("/users", userRouter); // Define um prefixo claro para as rotas de usuários

// Rotas Livros
const livroRouter = require("./livro");
router.use("/livros", livroRouter); // Define um prefixo claro para as rotas de livros

// Rotas Históricos
const historicoRouter = require("./historico");
router.use("/historicos", historicoRouter); // Define um prefixo claro para as rotas de históricos

module.exports = router;
