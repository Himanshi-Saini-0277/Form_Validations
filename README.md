# Registration Form
This project is a simple registration form built using HTML, CSS, and JavaScript. The form includes fields for the user's name, email, password, and confirm password. It also includes real-time validation for password strength and matching passwords, and displays a warning if the Caps Lock key is on.

#### Features
Password Requirements: 
1. Password must meet the following criteria:
  - At least 8 characters long
  - Contains at least 1 lowercase character
  - Contains at least 1 uppercase character
  - Contains at least 1 numerical value
  - Contains at least 1 special character
2. Real-Time Validation: Password requirements change color from blue to green when the condition is met.
3. Caps Lock Warning: Displays a warning if the Caps Lock key is on while typing the password.
4. Show/Hide Password: Allows the user to toggle the visibility of the password fields.
5. Matching Passwords: Confirms that the "Password" and "Confirm Password" fields match.

#### Files
- index.html: Contains the HTML structure of the form.
- style.css: Contains the CSS for styling the form.
- script.js: Contains the JavaScript for form validation and interactivity.

#### Usage
- Open index.html in your web browser.
- Fill in the registration form with your name, email, password, and confirm password.
- The password requirements will be checked in real-time, and their colors will change from blue to green when met.
- A warning will be displayed if the Caps Lock key is on.
- Use the "Show Password" button to toggle the visibility of the password fields.
- Ensure the "Password" and "Confirm Password" fields match.
- Click "Register" to submit the form.

#### Code Overview
- HTML (index.html)
The HTML file contains the structure of the registration form, including input fields for name, email, password, and confirm password. It also includes buttons for showing/hiding the password and submitting the form.
- CSS (style.css)
The CSS file styles the registration form, including layout, colors, font sizes, and alignment. It ensures the form is centered on the page and visually appealing.
- JavaScript (script.js)
The JavaScript file provides the functionality for form validation and interactivity. It includes functions for:

#### Toggling the visibility of the password fields.
- Checking if the Caps Lock key is on.
- Validating that the password meets the required criteria.
- Ensuring the "Password" and "Confirm Password" fields match.
