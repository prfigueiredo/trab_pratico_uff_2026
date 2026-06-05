import UserInfo from "../components/UserInfo";

function DashboardPage({ user }) {
    return (
        <main className="container">
            {/* Exibe o nome do usuário logado ou um texto padrão */}
            <UserInfo name={user?.name || "usuário"} />
        </main>
    );
}

export default DashboardPage;