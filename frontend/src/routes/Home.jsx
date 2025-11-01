import CardProduto from "../components/CardProduto";

const Home = () => {
  const produtos = [
    {
      nome: "Camisa Polo",
      preco: 99.9,
      descricao: "Camisa polo azul de algodão",
      imagem: "src/assets/camisapolo.jpg",
    },
    {
      nome: "Calça Jeans",
      preco: 159.9,
      descricao: "Calça jeans slim masculina",
      imagem: "src/assets/calcajeans.jpg",
    },
    {
      nome: "Jaqueta de Couro",
      preco: 299.9,
      descricao: "Jaqueta de couro sintético preta",
      imagem: "src/assets/jaquetadecouro.jpg",
    },
  ];

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {produtos.map((produto, index) => (
        <CardProduto key={index} {...produto} />
      ))}
    </div>
  );
};

export default Home;
