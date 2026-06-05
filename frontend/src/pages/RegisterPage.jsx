// Importa o componente do formulário de cadastro
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
    return (
        <main className="container">
            <h2>Cadastro</h2>

            {/* Renderiza o formulário de cadastro importado acima */}
            <RegisterForm />

            {/* Link temporário para retornar à tela de login (ajustar o 'href' quando as rotas estiverem prontas) */}
            <a href="#">Já tem conta? Fazer login</a>
        </main>
    );
}

// Exporta o componente para ser utilizado no arquivo de rotas do app
export default RegisterPage;