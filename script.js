// Toggle mobile menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    if (navLinks.classList.contains('open')) navLinks.classList.remove('open');
  });
});

// Efek ketikan di "Tentang Saya"
document.addEventListener("DOMContentLoaded", function () {
  const text = "Sedikit cerita, gue suka ngoding, main Minecraft, dan belajar hal baru tiap hari. Berwawasan ke depan, gue selalu cari cara buat jadi lebih baik.";
  const typingElement = document.getElementById("typing-text");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 35); // atur kecepatan ketikan
    }
  }

  typeWriter();
});
