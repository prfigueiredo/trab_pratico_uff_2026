// Função para dar "bem-vindo" com o nome do usuário
function UserInfo({ name, logout }) {
    return (
        <div>
            <h1>
                Bem-vindo,
                <br />
                {name}
            </h1>

            <button onClick={logout}>
                Sair
            </button>
        </div>
    );
}

// Exporta o componente para ser reutilizado
export default UserInfo;