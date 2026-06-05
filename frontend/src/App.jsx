import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";

function App() {

  // Controla qual página será exibida na aplicação
  const [page, setPage] = useState("login");

  return (
    <>
      {/* Exibe a página de login */}
      {page === "login" && <LoginPage setPage={setPage} />}

      {/* Exibe a página de cadastro */}
      {page === "register" && <RegisterPage setPage={setPage} />}

      {/* Exibe a página principal do sistema */}
      {page === "dashboard" && <DashboardPage setPage={setPage} />}
    </>
  );
}

export default App;