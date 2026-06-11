import UserInfo from "../components/UserInfo";

function DashboardPage({ user, logout }) {
  return (
    <main className="container">
        {/* Exibe o nome do usuário logado ou um texto padrão */}
      <UserInfo name={user?.name || "usuário"} logout={logout} />
    </main>
  );
}

export default DashboardPage;