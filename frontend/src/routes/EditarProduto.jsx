import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditarProduto = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5001/produtos`)
      .then((res) => res.json())
      .then((data) => {
        const produto = data.find((p) => p.id === parseInt(id));
        if (produto) setForm(produto);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5001/produtos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => alert("Produto atualizado com sucesso!"))
      .catch(() => alert("Erro ao atualizar produto."));
  };

  return (
    <div className="flex justify-center p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Editar Produto</h2>

        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
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
          placeholder="URL da imagem"
          value={form.imagem}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Salvar Alterações
      </button>
      </form>

    </div>
  );
};

export default EditarProduto;
