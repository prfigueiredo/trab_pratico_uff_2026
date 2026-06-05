function RegisterForm() {
    return (
        <form className="form-login">
            {/* Campo de texto para capturar o nome do usuário */}
            <input
                type="text"
                name="name"
                placeholder="Nome"
                required
            />

            {/* Campo de texto para capturar o email do usuário */}
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
            />

            {/* Campo de texto para capturar a senha do usuário */}
            <input
                type="password"
                name="password"
                placeholder="Senha"
                required
            />

            <button type="submit">
                Cadastrar
            </button>
        </form>
    );
}

// Exporta o componente para ser injetado na RegisterPage
export default RegisterForm;