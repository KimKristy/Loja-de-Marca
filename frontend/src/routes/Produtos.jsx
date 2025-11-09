import { useEffect, useState } from "react";
import CardProduto from "../components/CardProduto";
import FundoFuturistico from "../components/FundoFuturistico";
import { API_URL } from "../config/api";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        // 🔹 Busca da API externa (Fake Store)
        const resAPI = await fetch(`${API_URL}/products`);
        const dataAPI = await resAPI.json();

        // Alguns endpoints retornam "products", outros retornam array direto:
        const produtosAPI = (dataAPI.products || dataAPI).map((p) => ({
          id: p.id,
          nome: p.title,
          preco: p.price,
          descricao: p.description,
          imagem: p.image,
          apiProduto: true,
        }));

        // 🔹 Busca dos produtos locais
        const resLocal = await fetch("http://localhost:5001/produtos");
        const produtosLocais = await resLocal.json();

        // 🔹 Junta os dois conjuntos
        setProdutos([...produtosLocais, ...produtosAPI]);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    carregarProdutos();
  }, []);

  return (
    <>
      <FundoFuturistico />
      <div className="relative z-10 p-8 text-white bg-white/5 rounded-2xl shadow-xl border border-white/20 animate-fadeIn">
        <div className="text-center mt-24 mb-10">
          <h1 className="text-3xl font-bold text-cyan-300 mb-2">
            Todos os Produtos
          </h1>
          <p className="text-gray-300 text-sm">
            Explore tudo o que a{" "}
            <span className="text-cyan-400">Loja de Marcas</span> tem a oferecer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {produtos.length > 0 ? (
            produtos
              .slice()
              .reverse()
              .map((produto) => (
                <CardProduto
                  key={produto.id}
                  {...produto}
                  apiProduto={produto.apiProduto}
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
