const miner = document.getElementById('miner');
const fix = document.getElementById('miner-fix');
const next = document.getElementById('next-machine');

fix.style.visibility = 'hidden';

document.addEventListener('mousemove', function (event) {
   miner.style.top = event.clientY - 225 + 'px';
   miner.style.left = event.clientX - 225 + 'px';
});

function endShift() {
   setTimeout(() => {
      miner.style.opacity = 0;
      fix.style.visibility = 'visible';
      fix.src = 'img/stick-fix.gif';
   }, 500);

   setTimeout(() => {
      fix.style.visibility = 'hidden';
   }, 3900);

   setInterval(() => {
      next.classList.add('scaled');
   }, 4000);
}

const button = document.getElementById('fix-this');
button.addEventListener('click', endShift);
