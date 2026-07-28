document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive Form Switching System
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');

    if (tabLogin && tabRegister && formLogin && formRegister) {
        tabLogin.addEventListener('click', () => {
            tabRegister.classList.remove('active');
            formRegister.classList.remove('active-form');
            
            tabLogin.classList.add('active');
            formLogin.classList.add('active-form');
        });

        tabRegister.addEventListener('click', () => {
            tabLogin.classList.remove('active');
            formLogin.classList.remove('active-form');
            
            tabRegister.classList.add('active');
            formRegister.classList.add('active-form');
        });
    }

    // 2. Global Header Link State Handler
    const navLinks = document.querySelectorAll('#main-nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const hrefValue = link.getAttribute('href');
        if (currentPath.includes(hrefValue) && hrefValue !== "#" && hrefValue !== "index.html#contact-section") {
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        }
    });

    // 3. Login Redirection System (Direct Redirect - No Alerts)
    const loginForm = document.getElementById('actual-login-form');
    const registerForm = document.getElementById('actual-register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Direct instantaneous routing configuration
            window.location.href = './dashboard.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Account registered successfully! Switching to login view.');
            if (tabLogin) tabLogin.click();
        });
    }

    // 4. Dashboard Yield Simulator Functionality
    const btnSimulate = document.getElementById('btn-simulate');
    const inputAcres = document.getElementById('calc-acres');
    const textResult = document.getElementById('calc-result');

    if (btnSimulate && inputAcres && textResult) {
        btnSimulate.addEventListener('click', () => {
            const acresValue = parseFloat(inputAcres.value);
            if (isNaN(acresValue) || acresValue <= 0) {
                textResult.textContent = "Please enter a valid number of acres.";
                textResult.style.color = "#ef4444";
                return;
            }
            // Standard simulated algorithm: ~2.5 metric tons per acre baseline output metric
            const estimatedYield = (acresValue * 2.5).toFixed(1);
            textResult.textContent = `Estimated Harvest Output: ~${estimatedYield} Metric Tons`;
            textResult.style.color = "#facc15";
        });
    }
});
