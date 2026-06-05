import LoginForm from "../components/LoginForm";

function LoginPage({ setPage, setUser }) {
    return (
        <main className="container">
            {/* Título da tela de login */}
            <h2>Login</h2>

            {/* Formulário de login com acesso à navegação e ao usuário logado */}
            <LoginForm setPage={setPage} setUser={setUser} />

            {/* Botão para acessar a tela de cadastro */}
            <button type="button" onClick={() => setPage("register")}>
                Criar conta
            </button>
        </main>
    );
}

export default LoginPage;