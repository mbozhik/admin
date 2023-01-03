const virus = document.getElementById('virus');
const fix = document.getElementById('virus-fix');

fix.style.display = 'none';

virus.addEventListener('mouseenter', function () {
   virus.classList.add('move');
   setTimeout(function () {
      virus.classList.remove('move');
      virus.classList.add('move2');
   }, 500);
   setTimeout(function () {
      virus.classList.remove('move2');
      virus.classList.add('move3');
   }, 1000);
   setTimeout(function () {
      virus.classList.remove('move3');
      virus.classList.add('move4');
   }, 1500);
   setTimeout(function () {
      virus.classList.remove('move4');
      virus.classList.add('move5');
   }, 2000);
   setTimeout(function () {
      virus.classList.remove('move5');
      virus.classList.add('move');
   }, 2500);
});

function endShift() {
   setTimeout(() => {
      virus.style.opacity = 0;
      fix.style.display = 'block';
      fix.src = 'img/shift-fix.gif';
   }, 500);

   setTimeout(() => {
      fix.style.display = 'none';
   }, 3900);
}

const button = document.getElementById('fix-this');
button.addEventListener('click', endShift);

function endShift() {
   setTimeout(() => {
      miner.style.opacity = 0;
   }, 500);

   setTimeout(() => {
      fix.style.display = 'none';
   }, 3900);
}
