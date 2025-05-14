document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("formMessage").textContent = `Thank you, ${name}. Your message has been sent!`;
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMessage").textContent = "Please fill in all fields.";
    }
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const target = document.getElementById(pageId);
    if (target) {
        target.style.display = 'block';
    }

   
    history.pushState(null, null, `#${pageId}`);
}


window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1) || 'about';
    showPage(hash);
});