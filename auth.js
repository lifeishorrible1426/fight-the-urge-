document.addEventListener("DOMContentLoaded", () => {

    const signupForm = document.getElementById("signup-form");
    const loginForm = document.getElementById("login-form");
    const message = document.getElementById("auth-message");


    signupForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        message.textContent = "Creating your account...";

        const { data, error } = await supabaseClient.auth.signUp({
            email: email,
            password: password
        });

        if (error) {
            message.textContent = error.message;
            return;
        }

        message.textContent =
            "Account created! Check your email to verify your account.";
    });


    loginForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        message.textContent = "Logging in...";

        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            message.textContent = error.message;
            return;
        }

        window.location.href = "dashboard.html";
    });

});
