import RegisterForm from "../components/RegisterForm";

function RegisterPage({ setPage }) {
    return (
        <main className="container">
            {/* Título da tela de cadastro */}
            <h2>Cadastro</h2>

            {/* Formulário de cadastro, recebendo setPage para redirecionar após sucesso */}
            <RegisterForm setPage={setPage} />

            {/* Botão para retornar manualmente à tela de login */}
            <button type="button" onClick={() => setPage("login")}>
                Já tem conta? Fazer login
            </button>
        </main>
    );
}

export default RegisterPage;