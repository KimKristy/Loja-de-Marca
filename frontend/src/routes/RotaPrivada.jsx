import { Navigate } from "react-router-dom";

const RotaPrivada = ({ children }) => {
  const logado = localStorage.getItem("logado") === "true";

  if (!logado) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RotaPrivada;
