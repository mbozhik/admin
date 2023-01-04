const images = document.getElementsByClassName('image');
const fix = document.getElementById('virus-fix');
const next = document.getElementById('next-machine');

fix.style.opacity = '0.3';
// fix.style.zIndex = 100;

function multiple() {
   let globalIndex = 0,
      last = { x: 0, y: 0 };

   const activate = (image, x, y) => {
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
      image.style.zIndex = globalIndex;

      image.dataset.status = 'active';

      last = { x, y };
   };

   const distanceFromLast = (x, y) => {
      return Math.hypot(x - last.x, y - last.y);
   };

   const handleOnMove = (e) => {
      if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {
         const lead = images[globalIndex % images.length],
            tail = images[(globalIndex - 5) % images.length];

         activate(lead, e.clientX, e.clientY);

         if (tail) tail.dataset.status = 'inactive';

         globalIndex++;
      }
   };

   window.onmousemove = (e) => handleOnMove(e);

   window.ontouchmove = (e) => handleOnMove(e.touches[0]);
}

multiple();

function endMultiple() {
   setTimeout(() => {
      images.style.opacity = '0.5';
      fix.style.opacity = '1';
      fix.src = 'img/multiple-fix.gif';
   }, 500);

   // setTimeout(() => {
   //    for (let i = 0; i < images.length; i++) {
   //       images[i].style.opacity = 0;
   //    }
   // }, 3000);

   setTimeout(() => {
      fix.style.opacity = '0.3';
   }, 4000);

   setInterval(() => {
      next.classList.add('scaled');
   }, 4100);
}

const button = document.getElementById('fix-this');
button.addEventListener('click', endMultiple);
