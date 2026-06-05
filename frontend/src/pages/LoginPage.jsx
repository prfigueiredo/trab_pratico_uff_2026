// Importa o componente do formulário de login
import LoginForm from "../components/LoginForm";

function LoginPage() {
    return (
        <main className="container">
            <h2>Login</h2>

            {/* Renderiza o formulário de login com campos e botão de submit */}
            <LoginForm />

            <a href="#">Criar conta</a>
        </main>
    );
}

// Exporta o componente para ser utilizado no arquivo de rotas do app
export default LoginPage;