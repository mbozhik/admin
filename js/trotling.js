const images = document.getElementsByClassName('program');
const fix = document.getElementById('program-fix');
const next = document.getElementById('next-machine');

fix.style.visibility = 'hidden';

let clicked = false;
document.addEventListener('click', function (event) {
   if (event.target.classList.contains('program')) {
      event.target.style.display = 'none';
      let clicked = true;
   }
});

function showImages() {
   for (let i = 0; i < images.length; i++) {
      setTimeout(() => {
         const x = Math.random();
         const y = Math.random();
         images[i].style.top = `${x * 100}%`;
         images[i].style.left = `${y * 100}%`;
         images[i].style.opacity = 1;
      }, i * 100);
   }

   if (clicked) {
      return;
   }
}

const timeoutId = setTimeout(() => {
   showImages();
}, 500);

function endTrotling() {
   setTimeout(() => {
      for (let i = 0; i < images.length; i++) {
         images[i].style.opacity = 0.2;
      }
      fix.style.visibility = 'visible';
      fix.src = 'img/multiple-fix.gif';
   }, 500);

   setTimeout(() => {
      for (let i = 0; i < images.length; i++) {
         images[i].style.opacity = 0;
      }
   }, 3000);

   setTimeout(() => {
      fix.style.visibility = 'hidden';
   }, 3900);

   setInterval(() => {
      next.classList.add('scaled');
   }, 4100);
}

const button = document.getElementById('fix-this');
button.addEventListener('click', endTrotling);
