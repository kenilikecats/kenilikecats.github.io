const T = document.getElementById('demoTable');
const panel = document.getElementById('table-styler');

if (T && panel) {
  panel.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;

    if (b.dataset.width) {
      T.style.width = b.dataset.width + 'px';
    }
    if (b.dataset.border) {
      const px = b.dataset.border;
      T.style.borderSpacing = px + 'px';
      T.style.border = px + 'px solid #444';
    }
    if (b.dataset.bg) {
      const color = b.dataset.bg;
      const resolved = color.startsWith('#') ? color : `var(--${color})`;
      T.querySelectorAll('td').forEach(td => td.style.background = resolved);
    }
    if (b.id === 'reset') {
      T.removeAttribute('style');
      T.querySelectorAll('td').forEach(td => td.removeAttribute('style'));
    }
  });
}
