import express from "express";
import { connect } from "./db.js";

const app = express();
app.use(express.json());

let db;

connect()
  .then((connection) => (db = connection))
  .catch((erro) => console.error("Erro ao conectar ao banco RDS:", erro));

app.get("/livros", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM livros");
  res.json(rows);
});

app.get("/livros/:id", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM livros WHERE id = ?", [
    req.params.id,
  ]);
  res.json(rows[0] || {});
});

app.post("/livros", async (req, res) => {
  const { nome, descricao } = req.body;
  await db.query("INSERT INTO livros (nome, descricao) VALUES (?, ?)", [
    nome,
    descricao,
  ]);
  res.status(201).json({ message: "Livro criado com sucesso!" });
});

app.put("/livros/:id", async (req, res) => {
  const { nome, descricao } = req.body;
  await db.query("UPDATE livros SET nome=?, descricao=? WHERE id=?", [
    nome,
    descricao,
    req.params.id,
  ]);
  res.json({ message: "Livro atualizado!" });
});

app.delete("/livros/:id", async (req, res) => {
  await db.query("DELETE FROM livros WHERE id=?", [req.params.id]);
  res.json({ message: "Livro excluído!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
