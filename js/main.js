// reveal no scroll
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}

// menu mobile (sanduíche)
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('open');
    navMobile.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMobile.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// CTA de cada caminho (empresa/profissional) pré-seleciona o perfil no formulário de contato
document.querySelectorAll('[data-perfil]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-perfil');
    const radio = document.querySelector(`input[name="perfil"][value="${value}"]`);
    if (radio) radio.checked = true;
  });
});

// formulário de lead, validação client-side (envio real depende de integração de backend)
const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeField = document.getElementById('nome');
    const emailField = document.getElementById('email');
    const nome = nomeField.value.trim();
    const email = emailField.value.trim();

    [nomeField, emailField].forEach((field) => field.closest('.field').classList.remove('field-error'));

    if (!nome || !email || !email.includes('@')) {
      const invalidField = !nome ? nomeField : emailField;
      invalidField.closest('.field').classList.add('field-error');
      invalidField.focus();
      return;
    }

    document.getElementById('formFields').style.display = 'none';
    document.getElementById('formOk').style.display = 'block';
  });
}
