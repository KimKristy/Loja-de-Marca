import { useEffect, useState } from "react";
import CardProduto from "../components/CardProduto";
import { Link } from "react-router-dom";

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  const logado = localStorage.getItem("logado") === "true"

  useEffect(() => {
    fetch("http://localhost:5001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao carregar produtos:", err));
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Produtos</h1>
        {logado && (
          <Link
          to="/adicionar"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all duration-200"
        >
          {" "}
          + Adicionar Produto
        </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <CardProduto key={produto.id} {...produto} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Carregando produtos...
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
