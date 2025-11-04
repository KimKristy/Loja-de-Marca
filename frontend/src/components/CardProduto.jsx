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

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition-transform">
      <img
        src={imagem}
        alt={nome}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h2 className="text-xl font-bold">{nome}</h2>
      <p className="text-gray-600">{descricao}</p>
      <p className="text-blue-500 font-semibold mt-2">R$ {preco}</p>

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
    </div>
  );
};

export default CardProduto;
