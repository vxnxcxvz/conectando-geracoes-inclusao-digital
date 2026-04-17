(function () {
  // Escala de fonte simples ("zoom" de texto) com persistencia por localStorage.
  var key = 'vivaDigital_fontScale';
  var scale = parseFloat(localStorage.getItem(key) || '1');

  function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }
  function round1(n) { return Math.round(n * 10) / 10; }

  function apply() {
    // Mantem o padrao do navegador como base (16px) e escala a pagina toda.
    document.documentElement.style.fontSize = (16 * scale) + 'px';
  }

  function setScale(next) {
    scale = clamp(round1(next), 0.9, 1.4);
    localStorage.setItem(key, String(scale));
    apply();
  }

  // Aplica ao carregar
  apply();

  // Eventos delegados para funcionar em todas as paginas.
  document.addEventListener('click', function (e) {
    var el = e.target;
    if (!(el instanceof Element)) return;

    var action = el.getAttribute('data-a11y');
    if (!action) return;

    if (action === 'dec') setScale(scale - 0.1);
    if (action === 'inc') setScale(scale + 0.1);
    if (action === 'reset') setScale(1);
  });
})();
