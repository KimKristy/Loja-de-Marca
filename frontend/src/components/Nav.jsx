import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const logado = localStorage.getItem("logado") === "true";

  const handleLogout = () => {
    localStorage.removeItem("logado");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-white/8 border-b border-cyan-500/30 shadow-lg overflow-hidden tracking-wide">
      {/* fundo animado */}
      <div className="absolute inset-0 opacity-40 animate-pulseNav pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto flex justify-between items-center px-6 py-3 text-white">
        <Link
          to="/"
          className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-all"
        >
          Loja de Marcas
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-cyan-300 transition-all text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/sobre"
            className="hover:text-cyan-300 transition-all text-sm font-medium"
          >
            Sobre
          </Link>

          {!logado ? (
            <Link
              to="/login"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-1.5 rounded-lg shadow-md text-sm font-medium transition-all"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-1.5 rounded-lg shadow-md text-sm font-medium transition-all"
            >
              Sair
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
