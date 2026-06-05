package controller;

import dao.UserDAO;
import model.User;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;

// Endpoint responsável pela autenticação do usuário
@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    // Responde às requisições OPTIONS usadas pelo navegador em chamadas CORS
    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {

        // Permite requisições vindas do front-end React
        resp.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

        // Define quais métodos HTTP podem ser usados
        resp.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");

        // Permite o envio do cabeçalho Content-Type
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        resp.setStatus(HttpServletResponse.SC_OK);
    }

    // Processa a tentativa de login
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        // Configuração de CORS para permitir integração com o React
        resp.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        resp.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        // Define que a resposta será enviada em JSON
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        // Lê email e senha enviados pelo formulário React
        String email = req.getParameter("email");
        String password = req.getParameter("password");

        try {
            // Busca o usuário no banco pelo email
            UserDAO dao = new UserDAO();
            User user = dao.findByEmail(email);

            // Valida se o usuário existe e se a senha está correta
            if (user != null && user.getPassword().equals(password)) {

                // Monta resposta JSON com os dados necessários para o React
                String json = "{"
                        + "\"success\":true,"
                        + "\"name\":\"" + user.getName() + "\","
                        + "\"email\":\"" + user.getEmail() + "\""
                        + "}";

                resp.setStatus(HttpServletResponse.SC_OK);
                resp.getWriter().write(json);

            } else {

                // Retorna erro de autenticação em JSON
                resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                resp.getWriter().write(
                        "{\"success\":false,\"message\":\"Email ou senha inválidos\"}");
            }

        } catch (Exception e) {
            // Registra erro no console do servidor
            e.printStackTrace();

            // Retorna erro interno para o front-end
            resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            resp.getWriter().write(
                    "{\"success\":false,\"message\":\"Erro interno no servidor\"}");
        }
    }
}