import Button from "./Button.components";
import { Livro } from "../interfaces/Livro";

// Componente LinhaLivro
interface LinhaLivroProps {
  livro: Livro & { editora: string }; // Definindo o tipo da propriedade do livro
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro }) => {
  return (
    <tr>
      <th scope="row">{livro.titulo || "Título indisponível"}</th>
      <td>{livro.resumo || "Resumo indisponível"}</td>
      <td>{livro.autores?.split(", ").join(", ") || "Autores não informados"}</td>
      <td>{livro.editora}</td>
      <td hidden>{livro.quantidade_paginas}</td>
      <td hidden>{livro.arquivo_livro}</td>
      <td><Button label="Leia" backgroundColor="#7CD164" /></td>
    </tr>
  );
};