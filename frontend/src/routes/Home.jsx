import { useEffect, useState } from "react";
import CardProduto from "../components/CardProduto";
import { Link } from "react-router-dom";
import FundoFuturistico from "../components/FundoFuturistico";
const Home = () => {
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
      {" "}
      <FundoFuturistico />{" "}
      <div className="relative z-10 p-8 text-white bg-white/5 shadow-xl border border-white/20 animate-fadeIn">
        {" "}
        <div className="flex justify-center items-center mt-24 mb-12 w-full">
          {" "}
          <div className="bg-white/10 border border-cyan-500/30 backdrop-blur-md rounded-2xl px-8 py-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-center max-w-3xl">
            {" "}
            <h1 className="text-3xl font-bold text-cyan-300 mb-2">
              {" "}
              Bem-vindo à <span className="text-white">
                Loja de Marcas
              </span>{" "}
            </h1>{" "}
            <p className="text-gray-300 text-sm">
              {" "}
              Explore o futuro do estilo e da tecnologia — produtos únicos te
              esperam.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Cabeçalho de produtos */}{" "}
        <div className="flex justify-between items-center mb-8">
          {" "}
          <h2 className="text-2xl font-semibold text-cyan-300">
            {" "}
            Produtos em Destaque{" "}
          </h2>{" "}
          {logado && (
            <Link
              to="/adicionar"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
            >
              {" "}
              + Adicionar Produto{" "}
            </Link>
          )}{" "}
        </div>{" "}
        {/* Lista de produtos */}{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {" "}
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
              {" "}
              Carregando produtos...{" "}
            </p>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default Home;
