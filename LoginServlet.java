package com.farmease.auth;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // Tomcat 9 invokes doPost when your form submits via method="POST"
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // 1. Retrieve the text values typed by the user in auth.html
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        // 2. Validate user credentials securely on the server side
        if ("farmer@farmease.com".equals(email) && "password123".equals(password)) {
            
            // 3. Login success: create a unique server session tracker
            HttpSession session = request.getSession();
            session.setAttribute("userEmail", email);
            
            // 4. Force browser redirection directly into your dashboard view
            response.sendRedirect("dashboard.html");
        } else {
            // 5. Login failure: bounce back to login page with an error parameter
            response.sendRedirect("auth.html?error=invalid");
        }
    }
}
