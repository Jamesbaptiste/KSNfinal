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

// let joke = ('Ti'.style.color = 'green');
//language translation
let language = {
  eng: {
    banner: `We Are Here For`,
    ti: `you`,
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
    banner: `Estamos Aqui Para`,
    ti: `Ti`,
    aboutUsTitle: 'Sobre nosotros',
    about:
      'En KSN Connections, contamos con una experiencia de más de 25 años proporcionando servicios por todo el mundo, especialmente en USA, América Central, Europa, el área del Golfo y el norte de Africa. Los servicios proporcionados son totalmente personalizados, privados y exclusivos. Nos adaptamos a las necesidades y preferencias de cada cliente con la posibilidad de acompañar personalmente a nuestros clientes durante todo el proceso.',
    servicesTitle: 'Servicios',
    dreamHol: 'Vacaciones De Ensueño',
    cars: 'Coches Exclusivos',
    watches: 'Relojes',
    students: 'Estudiantes Extranjeros',
    shopping: 'Comprador Personal',
    legalCounsel: 'Consejeria Legal',
    contactUs: 'Contacto',
    sendMessage: 'Enviar Mensaje',
    homeNav: 'Casa',
    aboutNav: 'Acerca De',
    servicesNav: 'Servicios',
    contactNav: 'Contacto',
  },
};
//define language via window has
if (window.location.hash) {
  if (window.location.hash === '#es') {
    // document.getElementById('content').innerHTML = `Estamos aqui para ti`;
    // document.getElementById('ti').style.color = 'red';
    ti.textContent = language.es.ti;
    content.textContent = language.es.banner;
    aboutUsTitle.textContent = language.es.aboutUsTitle;
    aboutUs.textContent = language.es.about;
    servicesTitle.textContent = language.es.servicesTitle;
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

    document.getElementById('holiday').innerHTML =
      'Organizamos sus viajes de negocios / vacaciones a medida alrededor del mundo. Nos encargamos de que todas sus necesidades estén cubiertas sin preocuparse de nada solo de disfrutar.';
    document.getElementById('car').innerHTML =
      'Podemos localizar y adquirir cualquier tipo de embarcación (en venta exclusiva o pública) al mejor precio. Especialidad en coches de series limitadas.';
    document.getElementById('watch').innerHTML =
      'Localizamos por todo el mundo relojes de lujo con diseños exclusivos.';
    document.getElementById('student').innerHTML =
      'Nos dedicamos a la inscripción del estudiante en la Universidad y le acompañamos en todo el proceso de adaptación e instalación.';
    document.getElementById('shop').innerHTML =
      'Le asesoramos y orientamos en la adquisicion de prendas y complementos de lujo.';
    document.getElementById('legal').innerHTML =
      'Damos la solución más acorde a sus necesidades.';
  }
}
for (i = 0; i <= dataReload.length - 1; i++) {
  dataReload[i].onclick = function () {
    setTimeout(function () {
      location.reload();
    }, 150); // adjust the timer that works for you (1000 = 1 second)
  };
}
