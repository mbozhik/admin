const virus = document.getElementById('virus');

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
      const virus = document.getElementById('virus');
      virus.style.opacity = 0;
   }, 500);
}

const button = document.getElementById('fix-this');
button.addEventListener('click', endShift);
