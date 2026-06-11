import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";

function App() {
  // Controla qual tela está sendo exibida
  const [page, setPage] = useState("login");

  // Armazena os dados do usuário autenticado
  const [user, setUser] = useState(null);

  // Função para encerrar a sessão do usuário
  function logout() {
    setUser(null);
    setPage("login");
  }

  return (
    <>
      {/* Tela de login, recebendo setUser para salvar o usuário logado */}
      {page === "login" && (
        <LoginPage setPage={setPage} setUser={setUser} />
      )}

      {/* Tela de cadastro */}
      {page === "register" && (
        <RegisterPage setPage={setPage} />
      )}

      {/* Dashboard, recebendo os dados do usuário logado */}
      {page === "dashboard" && (
        <DashboardPage user={user} logout={logout} />
      )}
    </>
  );
}

export default App;