const {Historico: HistoricoModel} = require("../models/historicos");

/* Controlador dos métodos de manipulação da coleção(tabela) 
Historico no BD */
const historicoController = {
  create: async(req, res) => {
    try {
      const historico = {
        _id: req.body._id,
        id_user: req.body.id_user,
        id_livro: req.body.id_livro,
        ultima_pagina_acessada: req.body.ultima_pagina_acessada,
        numero_paginas_lidas: req.body.numero_paginas_lidas,
        leitura_concluida: req.body.leitura_concluida || "não",
        visualizado: req.body.visualizado || "não"
      }
      const response = await HistoricoModel.create(historico);
      res.status(201).json({response, msg: "Historico criado com sucesso!"})     
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  // Método que pega todos os dados 
  getAll: async(req, res) => {
    try {
      const historico = await HistoricoModel.find();
      res.json(historico);
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
      const historico = await HistoricoModel.findById(id);
      if(!historico) {
        res.status(404).json({msg: "Historico não encontrado."});
        return;
      }
      res.json(historico);
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  /* Método para deletar um determinado identificado pelo ID */
  delete: async(req, res) => {
    try {
      const id = req.params.id;
      const historico = await HistoricoModel.findById(id);
      if(!historico) {
        res.status(404).json({msg: "Usuário não encontrada."});
        return;
      }
      const deletedHistorico = await HistoricoModel.findByIdAndDelete(id);
      res.status(200).json({deletedHistorico, msg: "Historico excluído com sucesso."})
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
  /*Método que atualiza um determinado dado de uma coleção, identificado pelo ID*/
  update: async (req, res) => {
    const id = req.params.id;
    const historico = {
      id_user: req.body.id_user,
      id_livro: req.body.id_livro,
      ultima_pagina_acessada: req.body.ultima_pagina_acessada,
      numero_paginas_lidas: req.body.numero_paginas_lidas,
      leitura_concluida: req.body.leitura_concluida || "não",
      visualizado: req.body.visualizado || "não"
    };
    const updatedHistorico = await HistoricoModel.findByIdAndUpdate(id, historico);
    if(!updatedHistorico) {
      res.status(404).json({msg: "Historico não encontrado."});
      return;
    }
    res.status(200).json({historico, msg: "Dados do Historico alterados com sucesso."})
  }
}

module.exports = historicoController;