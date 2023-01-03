const element = document.getElementById('virus');

element.addEventListener('mouseenter', function () {
   element.classList.add('move');
   setTimeout(function () {
      element.classList.remove('move');
      element.classList.add('move2');
   }, 500);
   setTimeout(function () {
      element.classList.remove('move2');
      element.classList.add('move3');
   }, 1000);
   setTimeout(function () {
      element.classList.remove('move3');
      element.classList.add('move4');
   }, 1500);
   setTimeout(function () {
      element.classList.remove('move4');
      element.classList.add('move5');
   }, 2000);
   setTimeout(function () {
      element.classList.remove('move5');
      element.classList.add('move');
   }, 2500);
});
