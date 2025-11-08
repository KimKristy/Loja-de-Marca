import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("info");

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
        setTipoMensagem("success");
        setMensagem("Login realizado com sucesso!");
        localStorage.setItem("logado", "true");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      })
      .catch(() => {
        setTipoMensagem("error");
        setMensagem("E-mail ou senha incorretos.");
      });
  };

  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => setMensagem(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensagem]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {mensagem && (
          <p
            className={`text-center text-sm font-medium transition-opacity duration-300 ${
              tipoMensagem === "success" ? "text-green-600" : "text-red-500"
            }`}
          >
            {" "}
            {mensagem}{" "}
          </p>
        )}

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {mensagem && (
          <p className="text-center text-sm text-gray-600">{mensagem}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Entrar
        </button>

        <p className="text-center text-sm">
          Não tem uma conta? {""}
          <a href="/registrar" className="text-blue-500 hover:underline">
            Registrar-se
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
