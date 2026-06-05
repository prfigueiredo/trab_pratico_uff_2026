import LoginForm from "../components/LoginForm";

function LoginPage({ setPage }) {
    return (
        <main className="container">

            {/* Título da página */}
            <h2>Login</h2>

            {/* Formulário de autenticação */}
            <LoginForm setPage={setPage} />

            {/* Navega para a tela de cadastro */}
            <button type="button" onClick={() => setPage("register")} >
                Criar conta
            </button>

        </main>
    );
}

export default LoginPage;