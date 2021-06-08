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

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById('myDropdown');
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};

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
    conactNav: 'contactNav',
    contactName: 'Name',
    contactEmail: 'Email',
    contactMessage: 'What can we do for you?',
    contactSend: 'Send',
  },
  es: {
    banner: `Estamos Aqui Para`,
    ti: `Ti`,
    aboutUsTitle: 'Sobre nosotros',
    about:
      'En KSN Connections contamos con una experiencia de más de 25 años proporcionando servicios por todo el mundo, especialmente en USA, América Central, Europa, el área del Golfo y el norte de Africa. Los servicios proporcionados son totalmente personalizados, privados y exclusivos. Nos adaptamos a las necesidades y preferencias de cada cliente con la posibilidad de acompañar personalmente a nuestros clientes durante todo el proceso.',
    servicesTitle: 'Servicios',
    dreamHol: 'Vacaciones De Ensueño',
    cars: 'Coches Exclusivos',
    watches: 'Relojes',
    students: 'Estudiantes Extranjeros',
    shopping: 'Personal Shopper',
    legalCounsel: 'Consejería Legal',
    contactUs: 'Contacto',
    sendMessage: 'Enviar Mensaje',
    homeNav: 'Inicio',
    aboutNav: 'Sobre Nosostros',
    servicesNav: 'Servicios',
    contactNav: 'Contacto',
    contactName: 'Nombre',
    contactEmail: 'Correo Electrónico',
    contactMessage: 'Qué podemos hacer por ti?',
    contactSend: 'Enviar',
  },
  sa: {
    banner: `نحن هنا من أجل`,
    ti: `أنت`,
    aboutUsTitle: 'معلومات عنا',
    about:
      'في KSN Connections ، لدينا خبرة تزيد عن 25 عامًا في تقديم الخدمات في جميع أنحاء العالم ، وخاصة في الولايات المتحدة الأمريكية وأمريكا الوسطى وأوروبا ومنطقة الخليج وشمال إفريقيا. الخدمات المقدمة شخصية تمامًا وخاصة وحصرية. نحن نتكيف مع احتياجات وتفضيلات كل عميل مع إمكانية مرافقة عملائنا شخصيًا طوال العملية',
    servicesTitle: 'الخدمات المتوفرة',
    dreamHol: 'عطلة أحلامك',
    cars: 'قوارب وسيارات فاخرة',
    watches: 'الساعات',
    students: 'توفير المساعة للطلبة الأجانب',
    shopping: 'خدمة المتسوق الشخصي ',
    legalCounsel: 'المشورة القانونية للهجرة',
    contactUs: 'اتصل',
    sendMessage: 'إرسال رسالة',
    homeNav: 'البدء',
    aboutNav: 'معلومات عنا',
    servicesNav: 'خدمات',
    contactNav: 'اتصال',
    contactName: 'اسم',
    contactEmail: 'بريد إلكتروني',
    contactMessage: 'Qué podemos hacer por ti?',
    contactSend: 'Enviar',
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
    // Name.placeholder.textContent = language.es.contactName;
    homeNav.textContent = language.es.homeNav;
    aboutNav.textContent = language.es.aboutNav;
    servicesNav.textContent = language.es.servicesNav;
    contactNav.textContent = language.es.contactNav;

    document.getElementById('Name').placeholder = 'Nombre';
    document.getElementById('Email').placeholder = 'Correo Electrónico';
    document.getElementById('messageBox').placeholder =
      '¿Qué podemos hacer por ti?';
    document.getElementById('sendMessageBox').value = 'Enviar';
    document.getElementById('holiday').innerHTML =
      'Organizamos sus viajes de negocios / vacaciones a medida alrededor del mundo. Nos encargamos de que todas sus necesidades estén cubiertas sin preocuparse de nada solo de disfrutar.';
    document.getElementById('car').innerHTML =
      'Podemos localizar y adquirir cualquier tipo de embarcación (en venta exclusiva o pública) al mejor precio. Especialidad en coches de series limitadas.';
    document.getElementById('watch').innerHTML =
      'Localizamos por todo el mundo relojes de lujo con diseños exclusivos.';
    document.getElementById('student').innerHTML =
      'Nos dedicamos a la inscripción del estudiante en la Universidad y le acompañamos en todo el proceso de adaptación e instalación.';
    document.getElementById('shop').innerHTML =
      'Le asesoramos y orientamos en la adquisición de prendas y complementos de lujo.';
    document.getElementById('legal').innerHTML =
      'Damos la solución más acorde a sus necesidades.';
    document.getElementById('langAbbrev').innerHTML =
      'ES <i i class="fa fa-caret-down"></i>';
  }
}

//define language via window has
if (window.location.hash) {
  if (window.location.hash === '#sa') {
    // document.getElementById('content').innerHTML = `Estamos aqui para ti`;
    // document.getElementById('ti').style.color = 'red';
    ti.textContent = language.sa.ti;
    content.textContent = language.sa.banner;
    aboutUsTitle.textContent = language.sa.aboutUsTitle;
    aboutUs.textContent = language.sa.about;
    servicesTitle.textContent = language.sa.servicesTitle;
    dreamHoliday.textContent = language.sa.dreamHol;
    cars.textContent = language.sa.cars;
    watches.textContent = language.sa.watches;
    students.textContent = language.sa.students;
    shopping.textContent = language.sa.shopping;
    legalCounsel.textContent = language.sa.legalCounsel;
    contactUs.textContent = language.sa.contactUs;
    sendMessage.textContent = language.sa.sendMessage;
    // Name.placeholder.textContent = language.es.contactName;
    homeNav.textContent = language.sa.homeNav;
    aboutNav.textContent = language.sa.aboutNav;
    servicesNav.textContent = language.sa.servicesNav;
    contactNav.textContent = language.sa.contactNav;

    document.getElementById('Name').placeholder = 'اسم';
    document.getElementById('Email').placeholder = 'بريد إلكتروني';
    document.getElementById('messageBox').placeholder =
      'ماذا يمكننا أن نفعل لك؟';
    document.getElementById('sendMessageBox').value = 'إرسال';
    document.getElementById(
      'holiday'
    ).innerHTML = `نقوم بتنظيم رحلات العمل/ إجازات خاصة في جميع أنحاء العالم تتلاءم لمتطلباتكم. نحرص على تغطية كل احتيجاتكم كي لا تفكروا  في شيء سوى الإستمتاع`;
    document.getElementById('car').innerHTML =
      'نقوم بالتوفير والحصول على أي نوع من البواخرأو القوارب (سواءاً المبيعات الخاصة أو العامة) بأفضل الأسعار. بخبرتنا المتميزة والرائدة في سلسلات السيارات الخاصة';
    document.getElementById('watch').innerHTML =
      'نقوم بمساعدتك على الحصول على جميع أنواع الساعات الفاخرة ذات التصاميم الخاصة  بجميع انحاء العالم';
    document.getElementById('student').innerHTML =
      'نلتزم بالمراحل التسجيلية للطالب بالجامعة ونقوم بمرافقته خلال فترة تأقلمه وإقامته';
    document.getElementById('shop').innerHTML =
      'ننصحك ونرشدك في اقتناء الملابس والإكسسوارات الفاخرة';
    document.getElementById('legal').innerHTML = 'نقوم بتوفيرالحل المناسب لك';
    document.getElementById('langAbbrev').innerHTML =
      'AR <i i class="fa fa-caret-down"></i>';
  }
}
for (i = 0; i <= dataReload.length - 1; i++) {
  dataReload[i].onclick = function () {
    setTimeout(function () {
      location.reload();
    }, 150); // adjust the timer that works for you (1000 = 1 second)
  };
}
