function RegisterForm() {

    // Executado ao enviar o formulário
    async function handleSubmit(event) {

        // Impede o comportamento padrão do formulário
        event.preventDefault();

        // Coleta todos os dados preenchidos pelo usuário
        const formData = new FormData(event.target);

        try {

            // Envia os dados para o Servlet de cadastro
            const response = await fetch(
                "http://localhost:8082/trab-pratico-1.0/register",
                {
                    method: "POST",
                    body: formData,
                }
            );

            // Verifica se o cadastro foi realizado com sucesso
            if (response.ok) {

                alert("Cadastro realizado com sucesso!");

                // Limpa os campos do formulário
                event.target.reset();

            } else {

                alert("Erro ao cadastrar usuário.");

            }

        } catch (error) {

            // Exibe erro no console para depuração
            console.error(error);

            alert("Erro de conexão com o servidor.");
        }
    }

    return (
        <form className="form-login" onSubmit={handleSubmit}>

            {/* Campo para nome */}
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

            {/* Botão de cadastro */}
            <button type="submit">
                Cadastrar
            </button>

        </form>
    );
}

export default RegisterForm;