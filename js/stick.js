const miner = document.getElementById('miner');
const fix = document.getElementById('miner-fix');
fix.style.display = 'none';

document.addEventListener('mousemove', function (event) {
   miner.style.top = event.clientY - 225 + 'px';
   miner.style.left = event.clientX - 225 + 'px';
});

function endShift() {
   setTimeout(() => {
      miner.style.opacity = 0;
      fix.style.display = 'block';
      fix.src = 'img/stick-fix.gif';
   }, 500);

   setTimeout(() => {
      fix.style.display = 'none';
   }, 3900);
}

const button = document.getElementById('fix-this');
button.addEventListener('click', endShift);
