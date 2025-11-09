import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FundoFuturistico from "../components/FundoFuturistico";
import CardProduto from "../components/CardProduto";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const logado = localStorage.getItem("logado") === "true";

  useEffect(() => {
    fetch("http://localhost:5001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao carregar produtos:", err));
  }, []);

  return (
    <>
      <FundoFuturistico />

      <div className="relative z-10 min-h-screen p-10 text-white bg-white/5 rounded-2xl shadow-xl border border-white/20 animate-fadeIn">
        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 mt-16">
          <h1 className="text-3xl font-bold text-cyan-300 mb-4 sm:mb-0">
            Todos os Produtos
          </h1>

          {logado && (
            <Link
              to="/adicionar"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
            >
              + Adicionar Produto
            </Link>
          )}
        </div>

        {/* Grade de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {produtos.length > 0 ? (
            produtos.map((produto) => (
              <CardProduto
                key={produto.id}
                {...produto}
                className="opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]"
              />
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full animate-pulse">
              Carregando produtos...
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Produtos;
