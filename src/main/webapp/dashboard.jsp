<%@ page import="model.User" %>
<%
User user = (User) session.getAttribute("user");
if (user == null) {
    response.sendRedirect("login.jsp");
    return;
}
%>
<html>
<head>
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<h1>Bem-vindo, <%= user.getName() %></h1>
</body>
</html>