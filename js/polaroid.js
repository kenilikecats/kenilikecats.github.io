const imgs = ['p1.jpg','p2.jpg','p3.jpg','p4.jpg','p5.jpg'].map(n => 'assets/img/' + n);
let i = 0;

const elImg  = document.getElementById('p-img');
const elCnt  = document.getElementById('p-count');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

function render() {
  if (!elImg || !elCnt) return;
  elImg.src = imgs[i];
  elCnt.textContent = `Image ${i + 1} of ${imgs.length}`;
}

if (btnPrev && btnNext) {
  btnPrev.onclick = () => { i = (i - 1 + imgs.length) % imgs.length; render(); };
  btnNext.onclick = () => { i = (i + 1) % imgs.length; render(); };
}
render();
