const program = document.getElementById('program');
const fix = document.getElementById('program-fix');
const next = document.getElementById('next-machine');

fix.style.visibility = 'hidden';

document.addEventListener('mousemove', function (event) {
   program.style.top = event.clientY - 225 + 'px';
   program.style.left = event.clientX - 225 + 'px';
});

function endStick() {
   setTimeout(() => {
      program.style.opacity = '0.5';
      fix.style.visibility = 'visible';
      fix.src = 'img/stick-fix.gif';
   }, 500);

   setTimeout(() => {
      program.style.opacity = 0;
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
