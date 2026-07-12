/* IDSX Lab shared nav — robust for localhost root & /pages/ */
(function () {
  const here = (location.pathname || '').replace(/\\/g, '/');
  // When site is served from website/ root: / or /index.html → prefix pages/
  // When already under /pages/ → no prefix, home is ../index.html
  const inPages = /\/pages\//.test(here);
  const p = inPages ? '' : 'pages/';
  const home = inPages ? '../index.html' : 'index.html';

  const items = [
    { href: home, key: 'home', label: 'Home' },
    { href: p + 'synthesis.html', key: 'synthesis', label: '종합' },
    { href: p + 'framework.html', key: 'framework', label: '프레임' },
    { href: p + 'module-case.html', key: 'module', label: '모듈' },
    { href: p + 'compute.html', key: 'compute', label: '계산' },
    { href: p + 'af-catalog.html', key: 'afcat', label: 'AF목록' },
    { href: p + 'structures.html', key: 'structures', label: 'AF구조' },
    { href: p + 'ambroxol-gcase.html', key: 'ref', label: '레퍼런스' },
    { href: p + 'data-audit.html', key: 'audit', label: '데이터' },
    { href: p + 'notebook.html', key: 'note', label: '노트' },
    { href: p + 'update.html', key: 'ops', label: '운영' },
  ];

  function activeKey() {
    const file = here.split('/').pop() || '';
    if (!file || file === 'index.html') return 'home';
    if (file === 'synthesis.html') return 'synthesis';
    if (file === 'framework.html' || file === 'question.html') return 'framework';
    if (file === 'module-case.html' || file === 'ser152ile.html') return 'module';
    if (file === 'compute.html') return 'compute';
    if (file === 'af-catalog.html') return 'afcat';
    if (file === 'structures.html') return 'structures';
    if (file === 'data-audit.html') return 'audit';
    if (file === 'ambroxol-gcase.html') return 'ref';
    if (file === 'notebook.html') return 'note';
    if (file === 'update.html') return 'ops';
    return 'home';
  }

  const ak = activeKey();
  const links = items
    .map(
      (it) =>
        `<a href="${it.href}" class="${it.key === ak ? 'active' : ''}">${it.label}</a>`
    )
    .join('\n        ');

  const html = `
  <header class="nav">
    <div class="wrap nav-inner">
      <a class="brand" href="${home}">
        <span class="brand-mark">IX</span>
        <span>IDSX Lab</span>
      </a>
      <nav class="nav-links">
        ${links}
      </nav>
    </div>
  </header>`;

  const mount = document.querySelector('[data-nav]');
  if (mount) mount.outerHTML = html;
  else document.body.insertAdjacentHTML('afterbegin', html);

  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
