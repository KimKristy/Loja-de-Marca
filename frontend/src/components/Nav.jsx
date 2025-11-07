import { Link } from "react-router-dom";

const Nav = () => {
  const handleLogout = () => {
    localStorage.removeItem("logado");
    alert("Você saiu da conta!");
    window.location.href = "/";
  };

  const logado = localStorage.getItem("logado") === "true";

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Loja de Marcas</h1>
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>

        {!logado ? (
          <Link
            to="/login"
            className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
          >
            Login
          </Link>
        ) : (
          <>
            <Link
              to="/adicionar"
              className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
            >
              Adicionar Produto
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Sair
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
