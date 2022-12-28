const adminText = document.getElementById('user');
let adminLogin = prompt('Enter your admin login:');

if (adminLogin) {
   adminText.textContent = 'Welcome, ' + adminLogin + '!';
}

const wrapper = document.getElementById('wrapper');
wrapper.style.transform = 'translate(-22.5%, -40%)'; // set start position

window.onmousemove = (e) => {
   const mouseX = e.clientX,
      mouseY = e.clientY;

   const xDecimal = mouseX / window.innerWidth,
      yDecimal = mouseY / window.innerHeight;

   const maxX = wrapper.offsetWidth - window.innerWidth,
      maxY = wrapper.offsetHeight - window.innerHeight;

   const panX = maxX * xDecimal * -1,
      panY = maxY * yDecimal * -1;

   wrapper.animate(
      {
         transform: `translate(${panX}px, ${panY}px)`
      },
      {
         duration: 6000,
         fill: 'forwards',
         easing: 'ease'
      }
   );
};
