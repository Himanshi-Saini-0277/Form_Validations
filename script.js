document.addEventListener("DOMContentLoaded", function () {
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var flag = -1; // -1: no error, 0: error present

    window.toggle = function (elem) {
        var type = password.getAttribute('type');
        if (type === "password") {
            password.setAttribute('type', 'text');
            confirmPassword.setAttribute('type', 'text');
            elem.innerText = "Hide Password";
        } else {
            password.setAttribute('type', 'password');
            confirmPassword.setAttribute('type', 'password');
            elem.innerText = "Show Password";
        }
    }

    window.check = function (elem) {
        if (elem.value.length > 0) {
            if (elem.value !== password.value) {
                document.getElementById('alert').innerText = "Confirm password does not match";
                flag = 0;
            } else {
                document.getElementById('alert').innerText = "";
                flag = 1;
            }
        } else {
            document.getElementById('alert').innerText = "Please confirm password";
            flag = 0;
        }
    }

    window.validate = function () {
        return flag === 1;
    }

    window.passCheck = function (data) {
        var passClass = document.getElementsByClassName('password-check');
        const lowerCase = new RegExp("(?=.*[a-z])");
        const upperCase = new RegExp("(?=.*[A-Z])");
        const number = new RegExp("(?=.*[0-9])");
        const specialChar = new RegExp("(?=.*[@#$%^&*])");
        const eightChar = new RegExp("(?=.{8,})");

        if (eightChar.test(data)) {
            passClass[0].style.color = "green";
        } else {
            passClass[0].style.color = "blue";
        }

        if (lowerCase.test(data)) {
            passClass[1].style.color = "green";
        } else {
            passClass[1].style.color = "blue";
        }

        if (upperCase.test(data)) {
            passClass[2].style.color = "green";
        } else {
            passClass[2].style.color = "blue";
        }

        if (number.test(data)) {
            passClass[3].style.color = "green";
        } else {
            passClass[3].style.color = "blue";
        }

        if (specialChar.test(data)) {
            passClass[4].style.color = "green";
        } else {
            passClass[4].style.color = "blue";
        }

        // Check for Caps Lock during typing
        document.addEventListener('keydown', function (e) {
            var capsLockWarning = document.getElementById('alert-caps');
            if (e.getModifierState('CapsLock')) {
                capsLockWarning.innerText = "Caps Lock is ON";
            } else {
                capsLockWarning.innerText = "";
            }
        });

        // Check if confirm password matches
        check(document.getElementById('confirmPassword'));
    }
});
