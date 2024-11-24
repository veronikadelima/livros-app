const {User: UserModel} = require("../models/users");

/* Controlador dos métodos de manipulação da coleção(tabela) 
Users(Usuários) no BD */
const editoraController = {
  // Método que cria um novo dado
  create: async(req, res) => {
    try {
      const user = {
        nome: req.body.nome,
        email: req.body.email,
        password: req.body.password,
        nivel_acesso: req.body.nivel_acesso || "user"
      }
      const response = await UserModel.create(user);
      res.status(201).json({response, msg: "Usuário cadastrado com sucesso!"})
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  // Método que pega todos os dados 
  getAll: async(req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  /* Método que pega um determinado dado, usando como 
  parâmetro de busca o ID */ 
  get: async(req, res) => {
    try {
      const id = req.params.id;   
      const user = await UserModel.findById(id);
      if(!user) {
        res.status(404).json({msg: "Usuário não encontrado."});
        return;
      }
      res.json(user);
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  /* Método para deletar um determinado identificado pelo ID */
  delete: async(req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findById(id);
      if(!user) {
        res.status(404).json({msg: "Usuário não encontrada."});
        return;
      }
      const deletedUser = await UserModel.findByIdAndDelete(id);
      res.status(200).json({deletedUser, msg: "Usuário excluído com sucesso."})
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  /*Método que atualiza um determinado dado de uma coleção, identificado pelo ID*/
  update: async (req, res) => {
    const id = req.params.id;
    const user = {
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password,
      nivel_acesso: req.body.nivel_acesso || "user"
    };
    const updatedUser = await UserModel.findByIdAndUpdate(id, user);
    if(!updatedUser) {
      res.status(404).json({msg: "Usuário não encontrado."});
      return;
    }
    res.status(200).json({user, msg: "Dados do Usuário alterados com sucesso."})
  }
};

module.exports = editoraController;