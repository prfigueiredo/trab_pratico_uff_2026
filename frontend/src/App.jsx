import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";

function App() {

  // Armazena qual tela está sendo exibida atualmente
  const [page, setPage] = useState("login");

  return (
    <>
      {/* Tela de Login */}
      {page === "login" && (
        <LoginPage setPage={setPage} />
      )}

      {/* Tela de Cadastro */}
      {page === "register" && (
        <RegisterPage setPage={setPage} />
      )}

      {/* Tela Principal do Sistema */}
      {page === "dashboard" && (
        <DashboardPage setPage={setPage} />
      )}
    </>
  );
}

export default App;