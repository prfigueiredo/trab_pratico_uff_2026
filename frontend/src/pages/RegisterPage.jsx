import RegisterForm from "../components/RegisterForm";

function RegisterPage({ setPage }) {
    return (
        <main className="container">

            {/* Título da página */}
            <h2>Cadastro</h2>

            {/* Formulário de cadastro */}
            <RegisterForm />

            {/* Botão que retorna para a tela de login */}
            <button type="button" onClick={() => setPage("login")} >
                Já tem conta? Fazer login
            </button>

        </main>
    );
}

export default RegisterPage;