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
