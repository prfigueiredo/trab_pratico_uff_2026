function LoginForm({ setPage, setUser }) {
    // Executado ao enviar o formulário de login
    async function handleSubmit(event) {
        // Impede o recarregamento padrão da página
        event.preventDefault();

        // Acessa os campos do formulário
        const form = event.target;

        // Monta os dados no formato esperado pelo Servlet
        const data = new URLSearchParams();
        data.append("email", form.email.value);
        data.append("password", form.password.value);

        try {
            // Envia as credenciais para o endpoint de login
            const response = await fetch(
                "http://localhost:8082/trab-pratico-1.0/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: data,
                }
            );

            // Converte a resposta JSON enviada pelo Servlet
            const result = await response.json();

            // Se o login for válido, salva usuário no state e vai para o dashboard
            if (response.ok && result.success) {
                setUser({
                    name: result.name,
                    email: result.email,
                });

                setPage("dashboard");
            } else {
                alert(result.message || "Email ou senha inválidos.");
            }
        } catch (error) {
            // Exibe erro no console para auxiliar na depuração
            console.error(error);

            alert("Erro de conexão com o servidor.");
        }
    }

    return (
        <form className="form-login" onSubmit={handleSubmit}>
            {/* Campo de email */}
            <input type="email" name="email" placeholder="Email" required />

            {/* Campo de senha */}
            <input type="password" name="password" placeholder="Senha" required />

            {/* Botão de login */}
            <button type="submit">Entrar</button>
        </form>
    );
}

export default LoginForm;