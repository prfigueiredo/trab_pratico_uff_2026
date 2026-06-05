import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && <LoginPage />}
      {page === "register" && <RegisterPage />}
      {page === "dashboard" && <DashboardPage />}
    </>
  );
}

export default App;