import { useEffect, useState } from "react";

const Registrar = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  const handleRegistrer = (e) => {
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
        setTipoMensagem("success");
        setMensagem(
          "Usuário registrado com sucesso! Faça login para continuar."
        );
      })
      .catch((err) => {
        setTipoMensagem("error");
        setMensagem(
          "Erro ao registrar. Tente outro e-mail ou verifique sua conexão."
        );
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
        onSubmit={handleRegistrer}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Registrar</h2>

        {mensagem && (
          <p
            className={`text-center text-sm font-medium transition-opacity duration-300 ${
              tipoMensagem === "success" ? "text-green-600" : "text-red-500"
            }`}
          >
            {mensagem}{" "}
          </p>
        )}

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {mensagem && (
          <p className="text-center text-sm text-gray-600">{mensagem} </p>
        )}

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Registrar
        </button>

        <p className="text-center text-sm">
          Já tem uma conta? {""}
          <a href="/login" className="text-blue-500 hover:underline">
            Fazer Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Registrar;
