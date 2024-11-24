"use client";

import { Livro } from "../interfaces/Livro";
import { Editora } from "../interfaces/Editora";
import { useFetchData } from "../lib/api";
import { useEffect, useState } from "react";
import { LinhaLivro } from '../components/LinhaLivro.components';

const LivrosComEditoras = () => {
  const [livrosComEditoras, setLivrosComEditoras] = useState<
    (Livro & { editora: string })[] | null
  >(null);

  // Buscar livros
  const { data: livros, error: erroLivros, loading: carregandoLivros } = useFetchData<Livro[]>("livros");

  // Buscar editoras
  const { data: editoras, error: erroEditoras, loading: carregandoEditoras } = useFetchData<Editora[]>("editoras");

  useEffect(() => {
    if (livros && editoras) {
      // Combina os livros com o nome da editora
      const livrosComEditoras = livros.map((livro: Livro) => {
        const editora = editoras.find((editora) => editora.id === livro.id_editora);
        return {
          ...livro,
          editora: editora ? editora.editora : "Editora desconhecida",
        };
      });
      setLivrosComEditoras(livrosComEditoras);
    }
  }, [livros, editoras]);

  if (carregandoLivros || carregandoEditoras) {
    return <p>Carregando dados...</p>;
  }

  if (erroLivros || erroEditoras) {
    return <p>Erro ao carregar dados.</p>;
  }

  return livrosComEditoras; // Retorne os livros combinados
};

export default function Acervo() {
  const livrosComEditoras = LivrosComEditoras(); // Chama a função que retorna os livros combinados

  if (!livrosComEditoras) {
    return <div>Não há livros disponíveis</div>; // Caso não tenha livros, renderize uma mensagem de erro
  }

  return (
    <>
      <main>
        <div className="table-area">
          <h4 className="table-title">Nosso Acervo de Livros</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Título</th>
                <th scope="col">Resumo</th>
                <th scope="col">Autores</th>
                <th scope="col">Editora</th>
                <th scope="col" hidden>Nº de Páginas</th>
                <th scope="col" hidden>Arquivo</th>
                <th scope="col">Ler</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(livrosComEditoras) && livrosComEditoras.length > 0 ? (
              livrosComEditoras.map((livro) => (
                <LinhaLivro key={livro.id} livro={livro} />
              ))
                ) : (
              <tr><td colSpan={4}>Nenhum livro encontrado</td></tr>
            )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
