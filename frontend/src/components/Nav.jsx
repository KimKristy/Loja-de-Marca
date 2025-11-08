import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("info");
  const logado = localStorage.getItem("logado") === "true";

  const handleLogout = () => {
    localStorage.removeItem("logado");
    setTipoMensagem("success");
    setMensagem("Você saiu da conta.");
    setTimeout(() => {
      setMensagem("");
      window.location.href = "/";
    }, 1500);
  };

  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => setMensagem(""), 3000);
      return () => clearTimeout();
    }
  }, [mensagem]);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Loja de Marcas</h1>

      {mensagem && (
        <div
          className={`absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-md text-sm font-medium transition-opacity duration-300 ${
            tipoMensagem === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {mensagem}{" "}
        </div>
      )}

      <div className="flex gap-4 ml-auto">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/sobre" className="hover:text-gray-300">
          Sobre
        </Link>

        {!logado ? (
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
        ) : (
          <>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition-all"
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
