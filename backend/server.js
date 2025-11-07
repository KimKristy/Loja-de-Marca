import express from "express";
import cors from "cors";
import fs from "fs";
import bcrypt from "bcryptjs";

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

app.put("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const produtoAtualizado = req.body;

  fs.readFile(caminhoProdutos, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao ler produtos" });
    }

    let produtos = JSON.parse(data);
    const index = produtos.findIndex((p) => p.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    produtos[index] = { ...produtos[index], ...produtoAtualizado };

    fs.writeFile(caminhoProdutos, JSON.stringify(produtos, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao salvar alterações" });
      }
      res.status(200).json(produtos[index]);
    });
  });
});

app.delete("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  fs.readFile(caminhoProdutos, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao ler produtos" });
    }

    let produtos = JSON.parse(data);
    const novoArray = produtos.filter((p) => p.id !== id);

    if (novoArray.length === produtos.length) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    fs.writeFile(caminhoProdutos, JSON.stringify(novoArray, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao excluir produto" });
      }
      res.status(200).json({ message: "Produto excluído com sucesso!" });
    });
  });
});

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  fs.readFile("./data/usuarios.json", "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Erro ao ler usuários" });

    const usuarios = JSON.parse(data);
    const usuario = usuarios.find((u) => u.email === email);

    if (!usuario) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    const senhaValida = bcrypt.compareSync(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: "Senha incorreta" });
    }
    res.status(200).json({ message: "Login realizado com sucesso!" });
  });
});

app.post("/register", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: "E-mail e senha são obrigatórios" });
  }

  fs.readFile("./data/usuarios.json", "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Erro ao ler usuários" });

    const usuarios = JSON.parse(data);

    if (usuarios.find((u) => u.email === email)) {
      return res.status(400).json({ error: "E-mail já cadastrado" });
    }

    const hash = bcrypt.hashSync(senha, 10);
    const novoUsuario = {
      id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
      email,
      senha: hash,
    };

    usuarios.push(novoUsuario);

    fs.writeFile(
      "./data/usuarios.json",
      JSON.stringify(usuarios, null, 2),
      (err) => {
        if (err)
          return res.status(500).json({ error: "Erro ao salvar novo usuário" });
        res.status(201).json({ message: "Usuário registrado com sucesso!" });
      }
    );
  });
});

const PORT = 5001;
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
