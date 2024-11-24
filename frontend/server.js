import "express"
import next from "next";
import mongoose from "mongoose";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017:";

// Conexão com MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB!");
});

const server = express();

// Middleware para parsing de JSON
server.use(express.json());

// Rotas personalizadas para APIs
server.get("/api/livros", async (req, res) => {
  try {
    const livros = await Livro.find(); // Livro seria seu modelo do MongoDB
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar livros", error: error.message });
  }
});

server.post("/api/livros", async (req, res) => {
  try {
    const novoLivro = new Livro(req.body);
    await novoLivro.save();
    res.status(201).json({ mensagem: "Livro adicionado com sucesso!" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao adicionar livro", error: error.message });
  }
});

// Middleware para páginas Next.js
server.all("*", (req, res) => {
  return handle(req, res);
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.prepare().then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});