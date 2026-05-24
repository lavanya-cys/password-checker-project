const password = document.getElementById("password");
const bar = document.getElementById("strength-bar");
const text = document.getElementById("strength-text");
const percentText = document.getElementById("percent");
const suggestions = document.getElementById("suggestions");
const toggle = document.getElementById("toggle");

// Show/Hide password
toggle.onclick = () => {
    password.type = password.type === "password" ? "text" : "password";
    let commonPasswords = ["123456", "password", "12345678", "qwerty", "abc123"];

if (commonPasswords.includes(val)) {
    text.innerText = "Very Weak ❌ (Common Password)";
}
};

// Live checking
password.addEventListener("input", () => {
    let val = password.value;
    let score = 0;

    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[a-z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    let percent = (score / 5) * 100;

    bar.style.width = percent + "%";
    percentText.innerText = "Strength: " + percent + "%";

    if (percent <= 40) {
        bar.style.background = "red";
        text.innerText = "Weak ❌";
    } else if (percent <= 80) {
        bar.style.background = "orange";
        text.innerText = "Medium ⚠️";
    } else {
        bar.style.background = "green";
        text.innerText = "Strong ✅";
    }

    // Suggestions
    let msg = "";
    if (val.length < 8) msg += "Use 8+ characters\n";
    if (!/[A-Z]/.test(val)) msg += "Add uppercase\n";
    if (!/[0-9]/.test(val)) msg += "Add number\n";
    if (!/[a-z]/.test(val)) msg += "Add lowercase\n";
    if (!/[^A-Za-z0-9]/.test(val)) msg += "Add special character\n";

    suggestions.innerText = msg;
});
function generatePassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";

    for (let i = 0; i < 10; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("password").value = password;
}
function toggleTheme() {
    document.body.classList.toggle("dark");
}
