import FundoFuturistico from "../components/FundoFuturistico";

const Sobre = () => {
  return (
    <>
      <FundoFuturistico />

      <div className="relative z-10 min-h-screen p-10 text-white bg-white/5 rounded-2xl shadow-xl border border-white/20 animate-fadeIn">
        <div className="flex flex-col items-center justify-center mt-24 mb-12 text-center">
          <div className="bg-white/10 border border-cyan-500/30 backdrop-blur-md rounded-2xl px-10 py-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 max-w-4xl">
            <h1 className="text-3xl font-bold text-cyan-300 mb-4">
              Sobre a Loja de Marcas
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              A{" "}
              <span className="text-cyan-400 font-semibold">
                Loja de Marcas
              </span>{" "}
              nasceu da ideia de unir tecnologia, estilo e inovação em um único
              espaço digital. Meu objetivo é oferecer uma experiência moderna e
              imersiva para quem busca produtos com qualidade, autenticidade e
              um toque futurista.
            </p>

            <p className="text-gray-300 text-base leading-relaxed mt-4">
              Cada detalhe foi pensado para criar uma atmosfera que une o design
              contemporâneo à praticidade da tecnologia. Aqui, você não apenas
              compra — você vivencia o futuro.
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h2 className="text-xl font-semibold text-cyan-300 mb-2">
                Minha Missão
              </h2>
              <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
                Promover uma experiência única de compra, aliando estética,
                tecnologia e funcionalidade para conectar pessoas ao que há de
                mais inovador.
              </p>
              <p className="mt-8 text-sm text-gray-400 italic">
                “Conectando o presente ao futuro — Loja de Marcas.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
