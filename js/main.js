(function setActive() {
  const current = document.body.getAttribute('data-page');
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.dataset.page === current) a.classList.add('active');
  });
})();
