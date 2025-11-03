import express from "express";
import cors from "cors";
import fs from "fs";

const caminhoProdutos = "./data/produtos.json";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/produtos", (req, res) => {
  fs.readFile(caminhoProdutos, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao ler os produtos" });
    }
    const produtos = JSON.parse(data);
    res.json(produtos);
  });
});

app.post("/produtos", (req, res) => {
  const novoProduto = req.body;

  fs.readFile(caminhoProdutos, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao ler produtos" });
    }

    const produtos = JSON.parse(data);
    novoProduto.id =
      produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
    produtos.push(novoProduto);

    fs.writeFile(caminhoProdutos, JSON.stringify(produtos, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao salvar produto" });
      }
      res.status(201).json(novoProduto);
    });
  });
});

const PORT = 5001;
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
