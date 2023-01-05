const assistant = document.getElementsByClassName('assistant');
const fix = document.getElementById('delete-fix');
const dsk = document.getElementsByClassName('desktop-item');
const next = document.getElementById('next-machine');

assistant[0].style.visibility = 'hidden';
fix.style.visibility = 'hidden';

function clippy() {
   setTimeout(() => {
      assistant[0].style.visibility = 'visible';

      for (let i = 0; i < dsk.length; i++) {
         setTimeout(() => {
            dsk[i].style.opacity = 0;
         }, 1000 * i);
      }
   }, 1000);
}

clippy();

function endClippy() {
   setTimeout(() => {
      for (let i = 0; i < assistant.length; i++) {
         assistant[i].style.opacity = 0.2;
      }
      fix.style.visibility = 'visible';
      fix.src = 'img/clippy-fix.gif';
   }, 500);

   setTimeout(() => {
      for (let i = 0; i < assistant.length; i++) {
         assistant[i].style.opacity = 0;
      }
   }, 3000);

   setTimeout(() => {
      for (let i = 0; i < dsk.length; i++) {
         dsk[i].style.opacity = 1;
      }
   }, 6000);

   setTimeout(() => {
      fix.style.visibility = 'hidden';
   }, 7000);

   setInterval(() => {
      next.classList.add('scaled');
   }, 7200);
}

const button = document.getElementById('fix-this');
button.addEventListener('click', endClippy);
