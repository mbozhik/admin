const wrapper = document.getElementById('wrapper');
const adminText = document.getElementById('user');
const exitBtnSpan = document.getElementById('dashboard-exit');

const body = document.body;
body.style.transition = 'background-color .5s';
const trotling = document.getElementById('trotling');
const multiple = document.getElementById('multiple');
const clippy = document.getElementById('clippy');
const shift = document.getElementById('shift');
const stick = document.getElementById('stick');

const aim = document.getElementById('aim');
const draw = document.getElementById('draw');

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
      exitBtnSpan.style.color = varSiren;
   });
   trotling.addEventListener('mouseleave', function () {
      adminText.innerHTML = `${adminLogIn}`;
      body.style.backgroundColor = varBlack;
      exitBtnSpan.style.color = varWhite;
   });

   multiple.addEventListener('mouseenter', function () {
      adminText.innerHTML = `<b>multi windows</b>`;
      body.style.backgroundColor = varWhite;
      exitBtnSpan.style.color = varSiren;
   });
   multiple.addEventListener('mouseleave', function () {
      adminText.innerHTML = `${adminLogIn}`;
      body.style.backgroundColor = varBlack;
      exitBtnSpan.style.color = varWhite;
   });

   clippy.addEventListener('mouseenter', function () {
      adminText.innerHTML = `<b>clippy assistant</b>`;
      body.style.backgroundColor = varWhite;
      exitBtnSpan.style.color = varSiren;
   });
   clippy.addEventListener('mouseleave', function () {
      adminText.innerHTML = `${adminLogIn}`;
      body.style.backgroundColor = varBlack;
      exitBtnSpan.style.color = varWhite;
   });

   shift.addEventListener('mouseenter', function () {
      adminText.innerHTML = `<b>virus shift</b>`;
      body.style.backgroundColor = varWhite;
      exitBtnSpan.style.color = varSiren;
   });
   shift.addEventListener('mouseleave', function () {
      adminText.innerHTML = `${adminLogIn}`;
      body.style.backgroundColor = varBlack;
      exitBtnSpan.style.color = varWhite;
   });

   stick.addEventListener('mouseenter', function () {
      adminText.innerHTML = `<b>miner sticking</b>`;
      body.style.backgroundColor = varWhite;
      exitBtnSpan.style.color = varSiren;
   });
   stick.addEventListener('mouseleave', function () {
      adminText.innerHTML = `${adminLogIn}`;
      body.style.backgroundColor = varBlack;
      exitBtnSpan.style.color = varWhite;
   });
   aim.addEventListener('mouseenter', function () {
      adminText.innerHTML = `<b>aim game</b>`;
      body.style.backgroundColor = varWhite;
      exitBtnSpan.style.color = varSiren;
   });
   aim.addEventListener('mouseleave', function () {
      adminText.innerHTML = `${adminLogIn}`;
      body.style.backgroundColor = varBlack;
      exitBtnSpan.style.color = varWhite;
   });
   draw.addEventListener('mouseenter', function () {
      adminText.innerHTML = `<b>draw game</b>`;
      body.style.backgroundColor = varWhite;
      exitBtnSpan.style.color = varSiren;
   });
   draw.addEventListener('mouseleave', function () {
      adminText.innerHTML = `${adminLogIn}`;
      body.style.backgroundColor = varBlack;
      exitBtnSpan.style.color = varWhite;
   });

   aim.addEventListener('click', function () {
      window.location.href = './aim.html';
   });
   draw.addEventListener('click', function () {
      window.location.href = './draw.html';
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
