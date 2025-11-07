import { useState } from "react";

const Registrar = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

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
        alert("Usuário registrado com sucesso!");
        window.location.href = "/login";
      })
      .catch((err) => {
        alert(
          "Erro ao registrar. Tente outro e-mail ou verifique sua conexão."
        );
        console.error(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleRegistrer}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Registrar</h2>

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
