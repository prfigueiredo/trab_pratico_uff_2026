import RegisterForm from "../components/RegisterForm";

function RegisterPage({ setPage }) {
    return (
        <main className="container">
            <h2>Cadastro</h2>

            {/* Formulário de criação de usuário */}
            <RegisterForm />

            {/* Retorna para a tela de login */}
            <button type="button" onClick={() => setPage("login")} >
                Já tem conta? Fazer login
            </button>

        </main>
    );
}

export default RegisterPage;