import { Link } from "react-router-dom";

const CardProduto = ({ id, nome, preco, descricao, imagem }) => {
  const handleDelete = () => {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      fetch(`http://localhost:5001/produtos/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          alert("Produto excluído com sucesso!");
          window.location.reload();
        })
        .catch(() => alert("Erro ao excluir produto."));
    }
  };

  const logado = localStorage.getItem("logado") === "true";

  return (
    <div className="bg-white/10 border border-cyan-500/20 rounded-xl shadow-lg backdrop-blur-md p-4 hover:shadow-cyan-500/40 hover:-translate-y-2 transition-all duration-300">
      <img
        src={imagem}
        alt={nome}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-cyan-300">{nome}</h2>
      <p className="text-gray-300 mt-2">{descricao}</p>
      <p className="text-lg font-bold text-cyan-400 mt-4">R$ {preco}</p>

      {logado && (
        <div className="flex gap-2 mt-3">
          <Link to={`/editar/${id}`} className="flex-1">
            <button className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
              Editar
            </button>
          </Link>

          <button
            onClick={handleDelete}
            className="flex-1 bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Excluir
          </button>
        </div>
      )}
    </div>
  );
};

export default CardProduto;
