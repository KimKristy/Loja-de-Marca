import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Loja de Marcas</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Nav;
