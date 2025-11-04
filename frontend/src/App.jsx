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

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="*" element={<Error />} />
        <Route path="/adicionar" element={<AdicionarProdutos />} />
        <Route path="/editar/:id" element={<EditarProduto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
