const {Livro: LivroModel} = require("../models/livros");

/* Controlador dos métodos de manipulação da coleção(tabela) 
Livros no BD */
const livroController = {
  // Metódo para criar um novo registro
  create: async(req, res) => {
    try {
      const livro = {
        _id: req.body._id,
        id_editora: req.body.id_editora,
        titulo: req.body.titulo,
        resumo: req.body.resumo,
        autores: req.body.autores,
        quantidade_pagina: req.body.quantidade_pagina,
        arquivo_livro: req.body.arquivo_livro
      }
      const response = await LivroModel.create(livro);
      res.status(201).json({response, msg: "Livro criado com sucesso!"})     
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  // Método que pega todos os registros 
  getAll: async(req, res) => {
    try {
      const livros = await LivroModel.find();
      res.json(livros);
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  /* Método que pega um determinado registro, usando como 
  parâmetro de busca o ID */ 
  get: async(req, res) => {
    try {
      const id = req.params.id;   
      const livro = await LivroModel.findById(id);
      if(!livro) {
        res.status(404).json({msg: "Livro não encontrado."});
        return;
      }
      res.json(livro);
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  /* Método para deletar um registro identificado pelo ID */
  delete: async(req, res) => {
    try {
      const id = req.params.id;
      const livro = await LivroModel.findById(id);
      if(!livro) {
        res.status(404).json({msg: "Usuário não encontrada."});
        return;
      }
      const deletedLivro = await LivroModel.findByIdAndDelete(id);
      res.status(200).json({deletedLivro, msg: "Livro excluído com sucesso."})
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  /*Método que atualiza um determinado dado de uma coleção, identificado pelo ID*/
  update: async (req, res) => {
    const _id = req.params.id_editora;
    const livro = {
        id_editora: req.body.id_editora,
        titulo: req.body.titulo,
        resumo: req.body.resumo,
        autores: req.body.autores,
        quantidade_pagina: req.body.quantidade_pagina,
        arquivo_livro: req.body.arquivo_livro
    };
    const updatedLivro = await LivroModel.findByIdAndUpdate(id, livro);
    if(!updatedLivro) {
      res.status(404).json({msg: "Livro não encontrado."});
      return;
    }
    res.status(200).json({livro, msg: "Dados do Livro alterados com sucesso."})
  }
}

module.exports = livroController;