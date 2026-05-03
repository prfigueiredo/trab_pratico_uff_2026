package controller;

import dao.UserDAO;
import model.User;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.IOException;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        String email = req.getParameter("email");
        String password = req.getParameter("password");

        try {
            UserDAO dao = new UserDAO();
            User user = dao.findByEmail(email);

            if (user != null && user.getPassword().equals(password)) {
                HttpSession session = req.getSession();
                session.setAttribute("user", user);
                resp.sendRedirect("dashboard.jsp");
            } else {
                req.setAttribute("error", "Invalid credentials");
                RequestDispatcher rd = req.getRequestDispatcher("login.jsp");
                rd.forward(req, resp);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}