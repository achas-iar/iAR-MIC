/* iAR · Manual de Identidad Corporativa 2027 — comportamiento del manual
   Patrones: modern-web-guidance (dark-mode-toggle, scrollspy, copy-button,
   dialog, declarative-dialog-popover-control). Todo progresivo: sin JS el
   manual se lee completo y sigue el esquema del sistema. */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- 1. Esquema claro/oscuro: override de dos estados + volver a sistema ---------- */
const meta = $('meta[name="color-scheme"]');
const KEY = 'iar-color-scheme';
const sysDark = matchMedia('(prefers-color-scheme: dark)');
const store = {
  get() { try { return localStorage.getItem(KEY); } catch { return null; } },
  set(v) { try { v ? localStorage.setItem(KEY, v) : localStorage.removeItem(KEY); } catch {} },
};
const resolved = () => store.get() || (sysDark.matches ? 'dark' : 'light');

function syncSchemeUI() {
  const pinned = store.get();
  $('#scheme-reset').hidden = !pinned;
  const label = resolved() === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro';
  $('#scheme-toggle').setAttribute('aria-label', label);
  $('#scheme-toggle .scheme-label').textContent = label;
}
function applyScheme() {
  meta.content = store.get() || 'light dark';
  syncSchemeUI();
}
$('#scheme-toggle').addEventListener('click', () => {
  const target = resolved() === 'dark' ? 'light' : 'dark';
  const system = sysDark.matches ? 'dark' : 'light';
  // Si el destino coincide con el sistema, el usuario deshace su ajuste: no se fija.
  store.set(target === system ? null : target);
  applyScheme();
});
$('#scheme-reset').addEventListener('click', () => { store.set(null); applyScheme(); });
sysDark.addEventListener('change', syncSchemeUI); // nunca borra el valor guardado
addEventListener('storage', (e) => { if (e.key === KEY) applyScheme(); });
applyScheme();

/* ---------- 2. Scrollspy del índice: nativo + fallback IntersectionObserver ---------- */
const navLinks = $$('.indice a');
const sections = $$('.lamina');
function syncAriaCurrent() {
  const current = $('.indice a:is(:target-current, .target-current)');
  navLinks.forEach((a) => a.setAttribute('aria-current', a === current ? 'true' : 'false'));
}
if (CSS.supports('scroll-target-group: auto')) {
  syncAriaCurrent();
  document.addEventListener('scrollend', syncAriaCurrent);
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      navLinks.forEach((a) => {
        const on = a.getAttribute('href') === `#${en.target.id}`;
        a.classList.toggle('target-current', on);
        a.setAttribute('aria-current', String(on));
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach((s) => io.observe(s));
}

/* ---------- 3. Copiar valores: invoker commands + fallback de clic ---------- */
const timers = new WeakMap();
let lastMessage = '';
async function copyText(button, target) {
  const text = target.matches('input, textarea') ? target.value : target.innerText.trim();
  if (!text) return;
  let ok = true;
  try { await navigator.clipboard.writeText(text); }
  catch {
    ok = legacyCopy(text);
  }
  reportCopy(button, ok);
}
function legacyCopy(text) {
  const field = Object.assign(document.createElement('textarea'), { value: text });
  field.setAttribute('readonly', '');
  field.style.cssText = 'position:fixed;inset-block-start:0;opacity:0';
  document.body.append(field);
  field.select();
  try { return document.execCommand('copy'); } finally { field.remove(); }
}
function reportCopy(button, ok) {
  const tip = button.nextElementSibling;
  clearTimeout(timers.get(button));
  button.removeAttribute('data-copied');
  button.removeAttribute('data-failed');
  let message = ok ? 'Copiado' : 'No se pudo copiar';
  if (message === lastMessage) message += ' ';
  lastMessage = message;
  const use = $('use', button);
  if (use) use.setAttribute('href', ok ? '#i-check' : '#i-error');
  tip.textContent = '';
  void button.offsetWidth;
  button.setAttribute(ok ? 'data-copied' : 'data-failed', '');
  requestAnimationFrame(() => { tip.textContent = message; });
  timers.set(button, setTimeout(() => {
    button.removeAttribute('data-copied');
    button.removeAttribute('data-failed');
    tip.textContent = '';
    if (use) use.setAttribute('href', '#i-copy');
  }, 2000));
}
function onCommand(event) {
  if (event.command.startsWith('--copy')) copyText(event.source, event.target);
}
function clickFallback(event) {
  const button = event.target.closest('button[command]');
  if (!button) return;
  const command = button.getAttribute('command');
  const target = document.getElementById(button.getAttribute('commandfor'));
  if (command.startsWith('--copy') && target) copyText(button, target);
  else if (command === 'show-modal' && target) target.showModal();
  else if (command === 'close' && target) target.close();
}
if ('commandForElement' in HTMLButtonElement.prototype) {
  document.addEventListener('command', onCommand, true);
} else {
  import('https://esm.run/invokers-polyfill')
    .then(() => document.addEventListener('command', onCommand, true))
    .catch(() => document.addEventListener('click', clickFallback));
}

/* ---------- 4. Diálogo de demostración: closedby + estado al cerrar ---------- */
const modal = $('#demo-modal');
if (!('closedBy' in HTMLDialogElement.prototype)) {
  const outside = (e) => {
    const r = modal.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };
  let pressedOutside = false;
  modal.addEventListener('pointerdown', (e) => { pressedOutside = outside(e); });
  modal.addEventListener('pointerup', (e) => { if (pressedOutside && outside(e)) modal.close(); });
}
modal.addEventListener('close', () => {
  const status = $('#modal-status');
  status.textContent = modal.returnValue === 'close'
    ? 'OT-2418 cerrada (demostración).'
    : 'Cancelado: la orden sigue abierta.';
  modal.returnValue = '';
});

/* ---------- 5. Escalas de color: swatches con copia ---------- */
const TEAL = ['50:#eef6f8', '100:#d9ecf1', '200:#b3d9e2', '300:#82bfd0', '400:#4a9fb5', '500:#1b839e', '600:#05677f', '700:#04566b', '800:#044556', '900:#033340', '950:#02222b'];
const INK = ['50:#f6f7f7', '100:#eef2f3', '200:#d3dde0', '300:#b9c8cc', '400:#8aa0a8', '500:#75909a', '600:#5b6d73', '700:#33474f', '800:#1c3038', '900:#0e1b20', '950:#0c1a20'];
function buildScale(el, steps, name) {
  el.innerHTML = steps.map((s, i) => {
    const [step, hex] = s.split(':');
    const id = `sw-${name}-${step}`;
    return `<button class="swatch" type="button" command="--copy" commandfor="${id}" aria-label="Copiar ${name} ${step}, ${hex}">
      <span class="sw" style="background:${hex}"></span>
      <span class="hx" id="${id}">${hex.toUpperCase()}</span>
    </button>`;
  }).join('');
}
buildScale($('#scale-teal'), TEAL, 'teal');
buildScale($('#scale-ink'), INK, 'ink');

/* ---------- 7. Tabla GMAO: filtros por estado + búsqueda ---------- */
const rows = $$('#ot-table tbody tr');
const chips = $$('.chip-btn');
const search = $('#ot-search');
const empty = $('#ot-empty');
let filter = 'all';
function applyFilters() {
  const q = search.value.trim().toLowerCase();
  let visible = 0;
  rows.forEach((tr) => {
    const okState = filter === 'all' || tr.dataset.estado === filter;
    const okText = !q || tr.textContent.toLowerCase().includes(q);
    tr.hidden = !(okState && okText);
    if (!tr.hidden) visible++;
  });
  empty.hidden = visible > 0;
}
chips.forEach((chip) => chip.addEventListener('click', () => {
  filter = chip.dataset.filter;
  chips.forEach((c) => {
    const on = c === chip;
    c.classList.toggle('is-on', on);
    c.setAttribute('aria-pressed', String(on));
  });
  applyFilters();
}));
search.addEventListener('input', applyFilters);
$('#ot-clear').addEventListener('click', () => {
  search.value = '';
  chips[0].click();
});

/* ---------- 8. Pestañas de la app de demostración ---------- */
const tabs = $$('[role="tab"]');
function selectTab(tab) {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (e) => {
    const map = { ArrowRight: (i + 1) % tabs.length, ArrowLeft: (i - 1 + tabs.length) % tabs.length, Home: 0, End: tabs.length - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    tabs[map[e.key]].focus();
    selectTab(tabs[map[e.key]]);
  });
});

/* ---------- 9. Rail de diapositivas y selector segmentado ---------- */
const segBtns = $$('.seg-btn');
segBtns.forEach((btn) => btn.addEventListener('click', () => {
  segBtns.forEach((b) => {
    const on = b === btn;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-pressed', String(on));
  });
}));

const rail = $('#slides');
const slides = $$('.slide', rail);
const count = $('#slide-count');
const dots = $$('.slide-dot');
function slideIndex() {
  const mid = rail.scrollLeft + rail.clientWidth / 2;
  let best = 0, bestDist = Infinity;
  slides.forEach((s, i) => {
    const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - mid);
    if (d < bestDist) { bestDist = d; best = i; }
  });
  return best;
}
function syncCount() {
  const idx = slideIndex();
  count.textContent = `${idx + 1} / ${slides.length}`;
  dots.forEach((d, i) => d.classList.toggle('is-on', i === idx));
}
function goToSlide(i) {
  const target = Math.min(slides.length - 1, Math.max(0, i));
  rail.scrollTo({ left: slides[target].offsetLeft - (rail.clientWidth - slides[target].offsetWidth) / 2, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}
function goSlide(delta) {
  goToSlide(slideIndex() + delta);
}
$('#slide-prev').addEventListener('click', () => goSlide(-1));
$('#slide-next').addEventListener('click', () => goSlide(1));
dots.forEach((dot) => dot.addEventListener('click', () => goToSlide(Number(dot.dataset.slide))));
let railTick = false;
rail.addEventListener('scroll', () => {
  if (railTick) return;
  railTick = true;
  requestAnimationFrame(() => { syncCount(); railTick = false; });
});
rail.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') { e.preventDefault(); goSlide(1); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); goSlide(-1); }
});
syncCount();

/* ---------- 10. Láminas acotadas en móvil: paneo centrado en la pieza ---------- */
if (matchMedia('(width < 640px)').matches) {
  $$('.plate-drawing .plate-stage').forEach((st) => {
    st.scrollLeft = (st.scrollWidth - st.clientWidth) / 2;
  });
}

/* ---------- 11. Momento de movimiento: las cotas de la lámina 00 se dibujan una vez ---------- */
const plano = $('#plano-00');
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  plano.classList.add('drawn');
} else {
  const drawIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        // pathLength normalizado para que el trazo se dibuje completo
        $$('.dim path, .leader path', plano).forEach((p) => p.setAttribute('pathLength', '1'));
        plano.classList.add('drawn');
        drawIO.disconnect();
      }
    });
  }, { threshold: 0.35 });
  drawIO.observe(plano);
}
