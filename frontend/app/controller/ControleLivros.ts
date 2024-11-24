import axios from "axios";

class ControleLivro {
  async obterLivros(): Promise<[] | null> {
    try {
      const livro = await axios.get("http://localhost:3000/api/livros");
      return livro.data;
    } catch (error) {
      console.error("Erro ao obter livros", error);
      return null;
    }
  }
}

export default ControleLivro;

