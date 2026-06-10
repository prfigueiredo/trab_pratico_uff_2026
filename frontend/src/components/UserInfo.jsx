// Função para dar "bem vindo" com o nome do usuário
function UserInfo({ name }) {
    return (
        <h1>Bem-vindo, {name}</h1>
    );
}

// Exporta o componente para ser reutilizado
export default UserInfo;