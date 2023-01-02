const element = document.getElementById('virus');

element.style.top = '250px';
element.style.left = '250px';

element.addEventListener('mouseenter', function () {
   element.style.top = '300px';
   element.style.left = '900px';
   setTimeout(function () {
      element.style.top = '100px';
      element.style.left = '150px';
   }, 500);
   setTimeout(function () {
      element.style.top = '100px';
      element.style.left = '1000px';
   }, 500);
   setTimeout(function () {
      element.style.top = '100px';
      element.style.left = '100px';
   }, 500);
});
