// Importa o componente visual que exibe a saudação ao usuário
import UserInfo from "../components/UserInfo";

function DashboardPage() {
    return (
        <main className="container">

            {/* Renderiza o componente UserInfo e passa o valor "Brenda" para a prop 'name'.
        O teste deve informar "Bem-vindo, Brenda". */}
            <UserInfo name="Brenda" />

        </main>
    );
}

// Exporta a página do dashboard para o sistema de rotas
export default DashboardPage;