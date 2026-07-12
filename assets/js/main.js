/* IDSX site helpers */
(function () {
  const path = location.pathname.replace(/\\/g, '/');
  document.querySelectorAll('.nav-links a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    const file = href.split('/').pop();
    if (!file) return;
    if (path.endsWith(file) || (file === 'index.html' && (path.endsWith('/') || path.endsWith('/website')))) {
      a.classList.add('active');
    }
  });

  // year
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  // last updated stamp if present
  const lu = document.querySelector('[data-updated]');
  if (lu && !lu.textContent.trim()) {
    lu.textContent = document.lastModified;
  }
})();
