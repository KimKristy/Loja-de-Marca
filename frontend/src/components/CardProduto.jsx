import { Link } from "react-router-dom";

const CardProduto = ({ id, nome, preco, descricao, imagem }) => {
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

      <Link to={`/editar/${id}`}>
        <button className="mt-3 w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
          Editar
        </button>
      </Link>
    </div>
  );
};

export default CardProduto;
