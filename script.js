const loadText = document.querySelector('.loading-text');
const bgImg = document.querySelector('.bg img'); // blur the image itself

let load = 0;
const int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.textContent = `${load}%`;
  loadText.style.opacity = String(scale(load, 0, 100, 1, 0));
  bgImg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
