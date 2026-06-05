package controller;

import dao.UserDAO;
import model.User;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;

// Endpoint responsável pela autenticação de usuários
@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    // Responde às requisições OPTIONS utilizadas pelo CORS
    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {

        // Permite requisições vindas da aplicação React
        resp.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

        // Métodos HTTP permitidos
        resp.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");

        // Cabeçalhos permitidos
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        resp.setStatus(HttpServletResponse.SC_OK);
    }

    // Processa a autenticação do usuário
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        // Configuração de CORS
        resp.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        resp.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");

        // Obtém as credenciais enviadas pelo formulário
        String email = req.getParameter("email");
        String password = req.getParameter("password");

        try {

            // Busca usuário pelo email informado
            UserDAO dao = new UserDAO();
            User user = dao.findByEmail(email);

            // Verifica se usuário existe e se a senha está correta
            if (user != null && user.getPassword().equals(password)) {

                // Armazena usuário na sessão
                HttpSession session = req.getSession();
                session.setAttribute("user", user);

                // Redireciona para o dashboard
                resp.sendRedirect("dashboard.jsp");

            } else {

                // Retorna mensagem de erro para a tela de login
                req.setAttribute("error", "Invalid credentials");

                RequestDispatcher rd = req.getRequestDispatcher("login.jsp");

                rd.forward(req, resp);
            }

        } catch (Exception e) {

            // Registra erro no console do servidor
            e.printStackTrace();
        }
    }
}