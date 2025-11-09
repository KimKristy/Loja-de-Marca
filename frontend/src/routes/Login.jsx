import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:5001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro no login");
        return res.json();
      })
      .then(() => {
        localStorage.setItem("logado", "true");
        window.location.href = "/";
      })
      .catch(() => alert("E-mail ou senha incorretos."));
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center text-white bg-white/5 rounded-2xl border border-white/20 animate-fadeIn">
      <form
        onSubmit={handleLogin}
        className="bg-white/10 border border-cyan-500/30 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 w-full max-w-sm text-center"
      >
        <h2 className="text-3xl font-bold text-cyan-300 mb-6">Login</h2>

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
          Entrar
        </button>

        <p className="text-sm text-gray-400 mt-4">
          Não tem uma conta?{" "}
          <a href="/registrar" className="text-cyan-400 hover:underline">
            Registrar-se
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
