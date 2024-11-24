// Interface do tipo Livro
export interface Livro extends Document {
  _id: string;
  id_editora: string;
  titulo: string;
  autores: string;
  resumo?: string;
  quantidade_paginas?: number;
  arquivo_livro?: string;
}

