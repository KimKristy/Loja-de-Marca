import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Sobre from "./routes/Sobre";
import Login from "./routes/Login";
import Produtos from "./routes/Produtos";
import Error from "./routes/Error";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AdicionarProdutos from "./routes/AdicionarProdutos";
import EditarProduto from "./routes/EditarProduto";
import Registrar from "./routes/Registrar";
import RotaPrivada from "./routes/RotaPrivada";
import FundoFuturistico from "./components/FundoFuturistico";

function App() {
  return (
    <BrowserRouter>
    <FundoFuturistico/>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="*" element={<Error />} />
          <Route
            path="/adicionar"
            element={
              <RotaPrivada>
                <AdicionarProdutos />
              </RotaPrivada>
            }
          />
          <Route
            path="/editar/:id"
            element={
              <RotaPrivada>
                <EditarProduto />
              </RotaPrivada>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
