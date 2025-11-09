import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FundoFuturistico from "../components/FundoFuturistico";

const EditarProduto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5001/produtos`)
      .then((res) => res.json())
      .then((data) => {
        const produto = data.find((p) => p.id === parseInt(id));
        if (produto) setForm(produto);
      })
      .catch(() =>
        setMensagem("Erro ao carregar produto. Tente novamente mais tarde.")
      );
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
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => {
        setSucesso(true);
        setMensagem("Produto atualizado com sucesso!");
        setTimeout(() => navigate("/"), 2000);
      })
      .catch(() => {
        setSucesso(false);
        setMensagem("Erro ao atualizar o produto.");
      });
  };

  return (
    <>
      <FundoFuturistico />

      <div className="relative z-10 flex justify-center items-center min-h-screen p-8 text-white">
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-lg p-8 w-full max-w-md space-y-5 transition-all duration-300 hover:shadow-cyan-500/20"
        >
          <h2 className="text-2xl font-bold text-center text-cyan-300">
            Editar Produto
          </h2>

          <input
            type="text"
            name="nome"
            placeholder="Nome do Produto"
            value={form.nome}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/5 border border-white/20 focus:outline-none focus:border-cyan-400 transition-all"
            required
          />

          <input
            type="number"
            name="preco"
            placeholder="Preço"
            value={form.preco}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/5 border border-white/20 focus:outline-none focus:border-cyan-400 transition-all"
            required
          />

          <textarea
            name="descricao"
            placeholder="Descrição"
            value={form.descricao}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/5 border border-white/20 focus:outline-none focus:border-cyan-400 transition-all"
            required
          />

          <input
            type="text"
            name="imagem"
            placeholder="URL da Imagem"
            value={form.imagem}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/5 border border-white/20 focus:outline-none focus:border-cyan-400 transition-all"
            required
          />

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white p-2 rounded-lg shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Salvar Alterações
          </button>

          {mensagem && (
            <p
              className={`text-center mt-4 font-medium ${
                sucesso ? "text-cyan-400" : "text-red-400"
              }`}
            >
              {mensagem}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default EditarProduto;
