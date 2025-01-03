// Matrix animation setup
const matrix = document.querySelector('.matrix');
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const numChars = 200; // Number of characters

for (let i = 0; i < numChars; i++) {
    const span = document.createElement('span');
    span.style.left = Math.random() * 100 + 'vw';
    span.style.animationDuration = Math.random() * 3 + 3 + 's'; // Speed
    span.style.animationDelay = Math.random() * 5 + 's'; // Random start time
    span.innerHTML = chars.charAt(Math.floor(Math.random() * chars.length));
    matrix.appendChild(span);
}

// Interactive terminal functionality (simplified example)
const terminalInput = document.querySelector('.terminal input');
terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = e.target.value.toLowerCase();
        e.target.value = '';

        if (command === 'help') {
            alert('Available commands: help, home, about, services, contact');
        } else if (['home', 'about', 'services', 'contact'].includes(command)) {
            alert(`Navigating to ${command} page...`);
        } else {
            alert('Unknown command. Type "help" for a list of commands.');
        }
    }
});

// Login form handling
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Hide the current form
    const form = document.querySelector('.login-form');
    form.style.display = 'none';

    // Create the new form for password creation
    const passwordForm = document.createElement('form');
    passwordForm.classList.add('password-form');
    passwordForm.innerHTML = `
        <h2>Create Password</h2>
        <input type="password" id="password" name="password" placeholder="Password" required>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required>
        <button type="submit">Submit</button>
    `;

    // Append the new form to the login container
    document.querySelector('.login-container').appendChild(passwordForm);

    // Handle the new form submission
    passwordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password === confirmPassword) {
            alert('Password set successfully!');
            // Redirect to another page or perform further actions
        } else {
            alert('Passwords do not match. Please try again.');
        }
    });
}
