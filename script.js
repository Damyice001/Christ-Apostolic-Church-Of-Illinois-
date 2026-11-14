// Mobile menu
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}));

const reasonSelect = document.getElementById('reason');
const sendContactButton = document.getElementById('sendContactButton');
reasonSelect.addEventListener('change', () => {
  sendContactButton.textContent = reasonSelect.value === 'Biblical question'
    ? 'Send biblical question →'
    : 'Send message →';
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const reason = reasonSelect.value;
  const msg = document.getElementById('msg').value;
  const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nReason: ${reason}\n\n${msg}`;
  window.location.href = 'mailto:info@cacmiraclecenter.org?subject=' +
    encodeURIComponent(reason === 'Biblical question'
      ? 'Biblical Question - Website message'
      : `${reason} - Website message`) + '&body=' + encodeURIComponent(body);
});
