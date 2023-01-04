const wrapper = document.getElementById('wrapper');
const adminText = document.getElementById('user');

const body = document.body;
body.style.transition = 'background-color .5s';
const trotling = document.getElementById('trotling');
const multiple = document.getElementById('multiple');
const clippy = document.getElementById('clippy');
const shift = document.getElementById('shift');
const stick = document.getElementById('stick');

const rootStyles = window.getComputedStyle(document.documentElement);
const varBlack = rootStyles.getPropertyValue('--black');
const varWhite = rootStyles.getPropertyValue('--white');
const varSiren = rootStyles.getPropertyValue('--siren');

wrapper.style.transform = 'translate(-17%, -40%)';

function adminLogin() {
   let adminLogIn = prompt('Enter your admin login:', 'admin');

   if (adminLogIn) {
      adminText.innerHTML = 'Welcome, ' + `<span>${adminLogIn}</span>` + '!';
   } else {
      adminText.innerHTML = 'Welcome, <span>unknown!</span>';
   }

   setTimeout(() => {
      adminText.innerHTML = `${adminLogIn}`;
   }, 3000);

   trotling.addEventListener('mouseenter', function () {
      adminText.innerHTML = `<b>cpu trotling</b>`;
      body.style.backgroundColor = varWhite;
   });
   trotling.addEventListener('mouseleave', function () {
      adminText.innerHTML = `${adminLogIn}`;
      body.style.backgroundColor = varBlack;
   });

   multiple.addEventListener('mouseenter', function () {
      adminText.innerHTML = `<b>multi windows</b>`;
      body.style.backgroundColor = varWhite;
   });
   multiple.addEventListener('mouseleave', function () {
      adminText.innerHTML = `${adminLogIn}`;
      body.style.backgroundColor = varBlack;
   });

   clippy.addEventListener('mouseenter', function () {
      adminText.innerHTML = `<b>ai clippy</b>`;
      body.style.backgroundColor = varWhite;
   });
   clippy.addEventListener('mouseleave', function () {
      adminText.innerHTML = `${adminLogIn}`;
      body.style.backgroundColor = varBlack;
   });

   shift.addEventListener('mouseenter', function () {
      adminText.innerHTML = `<b>virus shift</b>`;
      body.style.backgroundColor = varWhite;
   });
   shift.addEventListener('mouseleave', function () {
      adminText.innerHTML = `${adminLogIn}`;
      body.style.backgroundColor = varBlack;
   });

   stick.addEventListener('mouseenter', function () {
      adminText.innerHTML = `<b>miner sticking</b>`;
      body.style.backgroundColor = varWhite;
   });
   stick.addEventListener('mouseleave', function () {
      adminText.innerHTML = `${adminLogIn}`;
      body.style.backgroundColor = varBlack;
   });
}

adminLogin();

function userInfo() {
   const isMobile = navigator.userAgentData.mobile;
   const whatSystem = navigator.userAgentData.platform;
   const whatBrowserObj = navigator.userAgentData.brands[1];
   const whatBrowser = Object.values(whatBrowserObj)[0];

   if (isMobile == true) {
      document.getElementById('mobile').innerHTML = `Mobile,`;
   } else {
      document.getElementById('mobile').innerHTML = `Desktop,`;
   }
   document.getElementById('system').innerHTML = `${whatSystem},`;
   document.getElementById('browser').innerHTML = `${whatBrowser};`;

   fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
         const ip = data.ip;
         const city = data.city;
         const country = data.country_name;
         const countryCode = data.country; // country code
         document.querySelector('#ip').innerHTML = `<span>${ip}</span>`;
         document.querySelector('#countryCode').innerHTML = `${countryCode},`;
         document.querySelector('#country').innerHTML = `${country},`;
         document.querySelector('#city').innerHTML = `${city};`;
      });
}

userInfo();

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
