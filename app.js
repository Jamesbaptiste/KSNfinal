// window.addEventListener('scroll', function () {
//   const header = document.querySelector('header');
//   header.classList.toggle('sticky', window.scrollY > 0);
// });

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector('.menuToggle');

  const navigation = document.querySelector('.navigation');

  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

function holidayDescription() {
  // const descriptionShow = document.querySelector('.showDescription');
  const holidayDescription = document.getElementById('holiday');
  const dreamHoliday = document.getElementById('dreamHoliday');

  holidayDescription.classList.toggle('active');
  dreamHoliday.classList.toggle('active');
}

function carDescription() {
  const carDescription = document.getElementById('car');
  const cars = document.getElementById('cars');

  carDescription.classList.toggle('active');
  cars.classList.toggle('active');
}

function watchDescription() {
  const watchDescription = document.getElementById('watch');
  const watches = document.getElementById('watches');

  watchDescription.classList.toggle('active');
  watches.classList.toggle('active');
}
function studentDescription() {
  const studentDescription = document.getElementById('student');
  const students = document.getElementById('students');

  studentDescription.classList.toggle('active');
  students.classList.toggle('active');
}
function shopDescription() {
  const shopDescription = document.getElementById('shop');
  const shopping = document.getElementById('shopping');

  shopDescription.classList.toggle('active');
  shopping.classList.toggle('active');
}

function legalDescription() {
  const legalDescription = document.getElementById('legal');
  const legalCounsel = document.getElementById('legalCounsel');

  legalDescription.classList.toggle('active');
  legalCounsel.classList.toggle('active');
}
//define language reload anchors
let dataReload = document.querySelectorAll('[data-reload]');
//language translation
let language = {
  eng: {
    banner: 'We Are Here For You',
    aboutUsTitle: 'About us',
    about:
      'At KSN Connections, we have experience of over 25 years providing our services worldwide, especially the USA, Central America, Europe, the Gulf Area and North Africa. The services we provide are entirely personalized, private, and exclusive. We adapt to the needs and preferences of each individual client and extend the possibility of personally accompany our clients throughout the entire process.',
    servicesTitle: 'Services',
    // service: 'These are our services listed below.',
    dreamHol: 'Dream Holidays',
    watches: 'watches',
    cars: 'Exclusive cars',
    students: 'Foreign students',
    shopping: 'Personal shopper',
    legalCounsel: 'Legal Counseling',
    contactUs: 'contact',
    sendMessage: 'contact',
    homeNav: 'HOME',
    aboutNav: 'About',
    servicesNav: 'Services',
    conactNavt: 'contactNav',
  },
  es: {
    banner: 'Estamos aqui para ti',
    aboutUsTitle: 'Sobre nosotros',
    about:
      'En KSN Connections, contamos con una experiencia de más de 25 años proporcionando servicios por todo el mundo, especialmente en USA, América Central, Europa, el área del Golfo y el norte de Africa. Los servicios proporcionados son totalmente personalizados, privados y exclusivos. Nos adaptamos a las necesidades y preferencias de cada cliente con la posibilidad de acompañar personalmente a nuestros clientes durante todo el proceso.',
    servicesTitle: 'Servicios',
    // service: 'Estos son nuestros servicios que se enumeran a continuación.',
    dreamHol: 'VACACIONES DE ENSUEÑO',
    cars: 'COCHES EXCLUSIVOS',
    watches: 'Relojes',
    students: 'ESTUDIANTES EXTRANJEROS ',
    shopping: 'comprador personal',
    legalCounsel: 'CONSEJERIA LEGAL',
    contactUs: 'Contacto',
    sendMessage: 'Enviar mensaje',
    homeNav: 'Casa',
    aboutNav: 'Acerca de',
    servicesNav: 'Servicios',
    contactNav: 'Contacto',
  },
};
//define language via window has
if (window.location.hash) {
  if (window.location.hash === '#es') {
    content.textContent = language.es.banner;
    aboutUsTitle.textContent = language.es.aboutUsTitle;
    aboutUs.textContent = language.es.about;
    servicesTitle.textContent = language.es.servicesTitle;
    // ourServices.textContent = language.es.service;
    dreamHoliday.textContent = language.es.dreamHol;
    cars.textContent = language.es.cars;
    watches.textContent = language.es.watches;
    students.textContent = language.es.students;
    shopping.textContent = language.es.shopping;
    legalCounsel.textContent = language.es.legalCounsel;
    contactUs.textContent = language.es.contactUs;
    sendMessage.textContent = language.es.sendMessage;
    homeNav.textContent = language.es.homeNav;
    aboutNav.textContent = language.es.aboutNav;
    servicesNav.textContent = language.es.servicesNav;
    contactNav.textContent = language.es.contactNav;
  }
}

// define language reload onclick
// for (i = 0; i <= dataReload.length; i++) {
//   dataReload[i].onclick = function () {
//     location.reload();
//   };
// }
// for (i = 0; i <= dataReload.length - 1; i++) {
//   dataReload[i].onclick = function () {
//     setTimeout(function () {
//       location.reload();
//     }, 150); // adjust the timer that works for you (1000 = 1 second)
//   };
// }
for (i = 0; i <= dataReload.length - 1; i++) {
  dataReload[i].onclick = function () {
    setTimeout(function () {
      location.reload();
    }, 150); // adjust the timer that works for you (1000 = 1 second)
  };
}
// const images = [
//   'assets/passports.jpg',
//   // 'assets/boats.jpg',
//   // 'assets/coast.jpg',
//   // 'assets/hills.jpg',
//   // 'assets/motorboat.jpg',
//   // 'assets/road.jpg',
//   // 'assets/lostboat.jpg',
//   // 'assets/sea.jpg',
// ];

// const banner = document.querySelector('.banner');

// let i = 0;
// setInterval(function () {
//   banner.style.backgroundSize = 'cover';
//   banner.style.backgroundPosition = 'center';
//   banner.style.height = '100%';
//   banner.style.width = '100%';
//   banner.style.backgroundRepeat = 'no-repeat';
//   banner.style.backgroundImage = 'url(' + images[i] + ')';
//   i = i + 1;
//   if (i == images.length) {
//     i = 0;
//   }
// }, 5500);

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName('mySlides');
//   var dots = document.getElementsByClassName('demo');
//   var captionText = document.getElementById('caption');
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex - 1].style.display = 'block';
//   dots[slideIndex - 1].className += ' active';
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }
