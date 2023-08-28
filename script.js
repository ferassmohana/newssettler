'uset strict';


// Check if the email is valid or not
const log_email = document.getElementById("log_email");
const thanking = document.getElementById("thanking");

const submit_btn = document.getElementById("submit_btn");
const close_message = document.getElementById("close_message");
const email_input = document.getElementById("email_input");
const error_message = document.getElementById("error_message");
const form = document.getElementById("form");

const user_email = document.getElementById("user_email");

function isValidEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ((input.value.length > 0 && emailRegex.test(input.value.trim()))) {
        submit_btn.classList.add("active");
        input.classList.remove("error");
        error_message.classList.remove("active");
    }
    else if (input.value.length > 0 && !emailRegex.test(input.value.trim())) {
        input.classList.add("error");
        error_message.classList.add("active");
        submit_btn.classList.remove("active");
    } else {
        input.classList.remove("error")
        error_message.classList.remove("active");
        submit_btn.classList.remove("active");
    }
}

submit_btn.addEventListener("click", (e) => {
    e.preventDefault();
    user_email.textContent = email_input.value;
    email_input.value = "";
    log_email.classList.add("hide");
    thanking.classList.add("active");
})
close_message.addEventListener("click", () => {
    log_email.classList.remove("hide");
    thanking.classList.remove("active");
    submit_btn.classList.remove("active");
})
