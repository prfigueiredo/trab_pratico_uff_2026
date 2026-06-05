function LoginForm() {
  return (
    <form className="form-login">
      <input type="email" name="email" placeholder="Email" required />

      <input type="password" name="password" placeholder="Senha" required />

      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;