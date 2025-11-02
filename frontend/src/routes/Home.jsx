import { useEffect, useState } from "react";
import CardProduto from "../components/CardProduto";

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao carregar produtos:", err));
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {produtos.length > 0 ? (
        produtos.map((produto) => <CardProduto key={produto.id} {...produto} />)
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          {" "}
          Carregando produtos...
        </p>
      )}
    </div>
  );
};

export default Home;
