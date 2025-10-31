// JS vanilla sederhana
// 1) Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2) Kecilkan navbar saat scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) navbar.classList.add('small');
  else navbar.classList.remove('small');
});

// 3) Validasi form kontak sederhana (Bootstrap style)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      alert('Terima kasih! Pesanmu sudah terkirim (simulasi).');
      form.reset();
    }
    form.classList.add('was-validated');
  });
}
