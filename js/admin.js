const wrapper = document.getElementById('wrapper');
wrapper.style.transform = 'translate(-17%, -40%)'; // set start position

const adminText = document.getElementById('user');
let adminLogin = prompt('Enter your admin login:', 'admin');

if (adminLogin) {
   adminText.innerHTML = 'Welcome, ' + `<span>${adminLogin}</span>` + '!';
} else {
   adminText.innerHTML = 'Welcome, <span>unknown!</span>';
}

function userInfo() {
   const isMobile = navigator.userAgentData.mobile;
   const whatSystem = navigator.userAgentData.platform;
   const whatBrowserObj = navigator.userAgentData.brands[1];
   const whatBrowser = Object.values(whatBrowserObj)[0];

   if (isMobile == true) {
      document.getElementById('mobile').innerHTML = `Mobile`;
   } else {
      document.getElementById('mobile').innerHTML = `Desktop`;
   }
   document.getElementById('system').innerHTML = `${whatSystem}`;
   document.getElementById('browser').innerHTML = `${whatBrowser}`;
}

userInfo();

fetch('https://ipapi.co/json/')
   .then((response) => response.json())
   .then((data) => {
      const ip = data.ip; // The user's IP address
      const city = data.city; // The user's city
      const country = data.country_name; // The user's country
      const countryCode = data.country; // The user's country code
      document.querySelector('#ip').innerHTML = `IP: ${ip}`;
      document.querySelector('#city').innerHTML = `Your city is: ${city}`;
      document.querySelector('#country').innerHTML = `Your country is: ${country}`;
      document.querySelector('#countryCode').innerHTML = `Your country code is: ${countryCode}`;
   });

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
