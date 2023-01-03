const miner = document.getElementById('miner');

document.addEventListener('mousemove', function (event) {
   miner.style.top = event.clientY - 225 + 'px';
   miner.style.left = event.clientX - 225 + 'px';
});

function endShift() {
   setTimeout(() => {
      const miner = document.getElementById('miner');
      miner.style.opacity = 0;
   }, 500);
}

const button = document.getElementById('fix-this');
button.addEventListener('click', endShift);
