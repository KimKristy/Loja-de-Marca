import { useState } from "react";

const Registrar = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    fetch("http://localhost:5001/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro no registro");
        return res.json();
      })
      .then(() => {
        window.location.href = "/login";
      })
      .catch(() =>
        alert("Erro ao registrar: e-mail já existente ou problema no servidor.")
      );
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center text-white bg-white/5 rounded-2xl border border-white/20 animate-fadeIn">
      <form
        onSubmit={handleRegister}
        className="bg-white/10 border border-cyan-500/30 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 w-full max-w-sm text-center"
      >
        <h2 className="text-3xl font-bold text-cyan-300 mb-6">Registrar</h2>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-2 mb-6 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
        >
          Registrar
        </button>

        <p className="text-sm text-gray-400 mt-4">
          Já tem uma conta?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Fazer login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Registrar;
