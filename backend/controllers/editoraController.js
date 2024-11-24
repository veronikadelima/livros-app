const {Editora: EditoraModel} = require("../models/editoras");

//Controlador dos métodos de manipulação da coleção(tabela) Editora no BD
const editoraController = {
  // Método que cria um novo dado
  create: async(req, res) => {
    try {
      const editora = {
        _id: req.body._id,
        nome: req.body.nome
      }
      const response = await EditoraModel.create(editora);
      res.status(201).json({response, msg: "Editora criada com sucesso!"})
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  getAll: async(req, res) => {
    try {
      const editoras = await EditoraModel.find();
      res.json(editoras);
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  get: async(req, res) => {
    try {
      const id = req.params.id;   
      const editora = await EditoraModel.findById(id);
      if(!editora) {
        res.status(404).json({msg: "Editora não encontrada."});
        return;
      }
      res.json(editora);
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  delete: async(req, res) => {
    try {
      const id = req.params.id;
      const editora = await EditoraModel.findById(id);
      if(!editora) {
        res.status(404).json({msg: "Editora não encontrada."});
        return;
      }
      const deletedEditora = await EditoraModel.findByIdAndDelete(id);
      res.status(200).json({deletedEditora, msg: "Editora excluída com sucesso."})
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const editora = {
      nome: req.body.nome
    };
    const updatedEditora = await EditoraModel.findByIdAndUpdate(id, editora);
    if(!updatedEditora) {
      res.status(404).json({msg: "Editora não encontrada."});
      return;
    }
    res.status(200).json({editora, msg: "Dados da Editora alterados com sucesso."})
  }
};

module.exports = editoraController;