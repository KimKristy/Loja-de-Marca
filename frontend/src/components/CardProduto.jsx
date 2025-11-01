const CardProduto = ({ nome, preco, descricao, imagem }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition-transform">
      <img src={imagem} alt={nome} className="w-full h-48 object-cover rounded-lg mb-3" />
      <p className="text-xl font-bold">{nome}</p>
      <p className="text-gray-600">{descricao}</p>
      <p className="text-blue-500 font-semibold mt-2">{preco}</p>
    </div>
  );
};

export default CardProduto;
