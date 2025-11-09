const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-white/10 border-t border-cyan-500/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-gray-300">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Loja de Marcas</span>. Todos os direitos reservados.
        </p>

        <p className="text-xs text-gray-500 mt-2 sm:mt-0">
          Feito com 💙 e tecnologia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
