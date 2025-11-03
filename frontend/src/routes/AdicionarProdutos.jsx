import { useState } from "react";

const AdicionarProdutos = () => {
  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5001/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Produto cadastrado com sucesso!");
        setForm({ nome: "", preco: "", descricao: "", imagem: "" });
      })
      .catch(() => alert("Erro ao cadastrar produto."));
  };

  return (
    <div className="flex justify-center p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center"> Adicionar Produto</h2>

        <input
          type="text"
          name="nome"
          placeholder="Nome do Produto"
          value={form.nome}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="imagem"
          placeholder="URL da Imagem"
          value={form.imagem}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default AdicionarProdutos;
