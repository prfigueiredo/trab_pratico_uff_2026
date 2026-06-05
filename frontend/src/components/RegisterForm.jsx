function RegisterForm() {

    // Executado quando o formulário é enviado
    function handleSubmit(event) {

        // Impede o recarregamento da página
        event.preventDefault();

        // Simula o envio do formulário para testes
        console.log("Cadastro enviado");
    }

    return (
        <form className="form-login" onSubmit={handleSubmit}>

            {/* Campo para nome do usuário */}
            <input
                type="text"
                name="name"
                placeholder="Nome"
                required
            />

            {/* Campo para email */}
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
            />

            {/* Campo para senha */}
            <input
                type="password"
                name="password"
                placeholder="Senha"
                required
            />

            {/* Botão de envio */}
            <button type="submit">
                Cadastrar
            </button>

        </form>
    );
}

export default RegisterForm;