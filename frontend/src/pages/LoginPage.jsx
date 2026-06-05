import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <main className="container">
      <h2>Login</h2>

      <LoginForm />

      <a href="#">Criar conta</a>
    </main>
  );
}

export default LoginPage;