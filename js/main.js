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

// acordeão "outros serviços/formatos": abre no hover (preview) e fixa aberto no clique
document.querySelectorAll('.svc-accordion details').forEach((det) => {
  let pinned = det.hasAttribute('open');
  const summary = det.querySelector('summary');

  det.addEventListener('mouseenter', () => { det.open = true; });
  det.addEventListener('mouseleave', () => { if (!pinned) det.open = false; });

  summary.addEventListener('click', (e) => {
    e.preventDefault();
    pinned = !pinned;
    det.open = pinned;
  });
});

// slider de depoimentos (troca automática + navegação por bolinhas)
document.querySelectorAll('.quotes-slider').forEach((slider) => {
  const track = slider.querySelector('.quotes-track');
  const slides = Array.from(track.children);
  const dots = Array.from(slider.querySelectorAll('.quotes-dot'));
  let index = 0;
  let timer;

  const show = (i) => {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle('active', di === index));
  };
  const next = () => show(index + 1);
  const start = () => { timer = setInterval(next, 6000); };
  const stop = () => clearInterval(timer);

  dots.forEach((d, di) => d.addEventListener('click', () => { show(di); stop(); start(); }));
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);

  show(0);
  start();
});

// CTA de cada caminho (empresa/profissional) pré-seleciona o perfil no formulário de contato
document.querySelectorAll('[data-perfil]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-perfil');
    const radio = document.querySelector(`input[name="perfil"][value="${value}"]`);
    if (radio) radio.checked = true;
  });
});

// vindo da página de Serviços & Cursos, pré-seleciona perfil e desafio via query string
const linkParams = new URLSearchParams(window.location.search);
const perfilParam = linkParams.get('perfil');
if (perfilParam) {
  const radio = document.querySelector(`input[name="perfil"][value="${perfilParam}"]`);
  if (radio) radio.checked = true;
}
const desafioParam = linkParams.get('desafio');
if (desafioParam) {
  const desafioSelect = document.getElementById('desafio');
  if (desafioSelect) desafioSelect.value = desafioParam;
}

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
