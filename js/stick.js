const miner = document.getElementById('miner');
const fix = document.getElementById('miner-fix');
const next = document.getElementById('next-machine');

document.addEventListener('mousemove', function (event) {
   miner.style.top = event.clientY - 225 + 'px';
   miner.style.left = event.clientX - 225 + 'px';
});

function endStick() {
   setTimeout(() => {
      fix.style.visibility = 'visible';
      fix.src = 'img/stick-fix.gif';
   }, 500);

   setTimeout(() => {
      miner.style.opacity = 0;
   }, 3000);

   setTimeout(() => {
      fix.style.visibility = 'hidden';
   }, 3900);

   setInterval(() => {
      next.classList.add('scaled');
   }, 4100);
}

const button = document.getElementById('fix-this');
button.addEventListener('click', endStick);
