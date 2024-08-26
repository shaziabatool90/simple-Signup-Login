const signup_form = document.getElementById('signup-form');
const signup_name = document.getElementById('signup_name');
const signup_password = document.getElementById('signup_password');
const signup_confirm_pass = document.getElementById('signup_confirm_pass');
const S_btn = document.getElementById('S_btn');

const login_form = document.getElementById('login-form');
const login_name = document.getElementById('login_name');
const login_password = document.getElementById('login_password');
const L_btn = document.getElementById('L_btn');

S_btn.addEventListener('click', function (event) {
    event.preventDefault();
    if ($("#signup-form").valid()) {
        alert("Sign Up Success!");
        const opt = confirm("Do you want to login?");
        if (opt === true) {
            login_form.style.visibility = 'visible';
            signup_form.style.display= 'none';
        } else {
            signup_name.value = '';
            signup_password.value = '';
            signup_confirm_pass.value = '';
        }
    }
});

// Handle login logic
L_btn.addEventListener('click', function (event) {
    event.preventDefault();

    if ($("#login-form").valid()) {
        const str_name = signup_name.value;
        const str_pass = signup_password.value;

        if (login_name.value === str_name && login_password.value === str_pass) {
            alert("Login Successful!");
        }
        login_name.value = '';
        login_password.value = '';
    }
});

$(document).ready(function () {
    $("#signup-form").validate({
        rules: {
            signup_name: "required",
            signup_password: {
                required: true,
                minlength: 5
            },
            signup_confirm_pass: {
                required: true,
                minlength: 5,
                equalTo: "#signup_password"
            }
        },
        messages: {
            signup_name: "Please enter your full name",
            signup_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            signup_confirm_pass: {
                required: "Please confirm your password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            }
        }
    });

    $("#login-form").validate({
        rules: {
            login_name: {
                required: true,
                equalTo: "#signup_name"
            },
            login_password: {
                required: true,
                equalTo: "#signup_password"
            }
        },
        messages: {
            login_name: {
                required: "Please enter your full name",
                equalTo: "Name is incorrect"
            },
            login_password: {
                required: "Please provide a password",
                equalTo: "Password is incorrect"
            }
        }
    });
});
