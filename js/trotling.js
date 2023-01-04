const images = document.getElementsByClassName('program');

function showImages() {
   for (let i = 0; i < images.length; i++) {
      setTimeout(() => {
         // Generate a random number between 0 and 1
         const x = Math.random();
         // Generate a random number between 0 and 1
         const y = Math.random();
         // Set the image's position based on the random numbers
         images[i].style.top = `${x * 100}%`;
         images[i].style.left = `${y * 100}%`;
         // Make the image visible
         images[i].style.opacity = 1;
      }, i * 300);
   }
}

showImages();

document.addEventListener('click', function (event) {
   event.target.style.display = 'none';
   showImages();
});
