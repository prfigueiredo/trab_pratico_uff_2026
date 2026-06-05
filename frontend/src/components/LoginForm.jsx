function LoginForm({ setPage }) {

    // Executado quando o formulário é enviado
    async function handleSubmit(event) {

        // Impede o recarregamento da página
        event.preventDefault();

        // Coleta os dados preenchidos no formulário
        const formData = new FormData(event.target);

        try {

            // Envia as credenciais para o endpoint de login
            const response = await fetch(
                "http://localhost:8082/trab-pratico-1.0/login",
                {
                    method: "POST",
                    body: formData,
                }
            );

            // Verifica se a autenticação foi realizada com sucesso
            if (response.ok) {

                alert("Login realizado com sucesso!");

                // Navega para o dashboard
                setPage("dashboard");

            } else {

                alert("Email ou senha inválidos.");

            }

        } catch (error) {

            // Exibe erro no console para depuração
            console.error(error);

            alert("Erro de conexão com o servidor.");
        }
    }

    return (
        <form className="form-login" onSubmit={handleSubmit}>

            {/* Campo de email */}
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
            />

            {/* Campo de senha */}
            <input
                type="password"
                name="password"
                placeholder="Senha"
                required
            />

            {/* Botão de autenticação */}
            <button type="submit">
                Entrar
            </button>

        </form>
    );
}

export default LoginForm;