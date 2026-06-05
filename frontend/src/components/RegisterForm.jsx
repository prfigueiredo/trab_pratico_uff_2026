function RegisterForm({ setPage }) {
    // Executado quando o formulário de cadastro é enviado
    async function handleSubmit(event) {
        // Impede o recarregamento padrão da página
        event.preventDefault();

        // Acessa diretamente os campos do formulário
        const form = event.target;

        // Monta os dados no formato esperado pelo Servlet
        const data = new URLSearchParams();
        data.append("name", form.name.value);
        data.append("email", form.email.value);
        data.append("password", form.password.value);

        try {
            // Envia os dados do cadastro para o back-end
            const response = await fetch(
                "http://localhost:8082/trab-pratico-1.0/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: data,
                }
            );

            // Caso o cadastro seja concluído com sucesso
            if (response.ok) {
                alert("Cadastro realizado com sucesso!");

                // Limpa os campos preenchidos
                form.reset();

                // Redireciona o usuário para a tela de login
                setPage("login");
            } else {
                alert("Erro ao cadastrar usuário.");
            }
        } catch (error) {
            // Exibe detalhes do erro no console
            console.error(error);

            alert("Erro de conexão com o servidor.");
        }
    }

    return (
        <form className="form-login" onSubmit={handleSubmit}>
            {/* Campo de nome */}
            <input type="text" name="name" placeholder="Nome" required />

            {/* Campo de email */}
            <input type="email" name="email" placeholder="Email" required />

            {/* Campo de senha */}
            <input type="password" name="password" placeholder="Senha" required />

            {/* Botão de cadastro */}
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default RegisterForm;