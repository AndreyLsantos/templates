const navbar = document.querySelector(".nav-bar");

function touggle() {
  if (navbar.classList.contains("nonavbar") == true) {
    navbar.classList.remove("nonavbar");
  } else {
    navbar.classList.add("nonavbar");
  }
}

// Google maps

function initMap() {
  const uluru = { lat: -25.697, lng: -48.476 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// Listagem dos doces
const c = (el)=>document.querySelector(el);

lady.map((item, index) => {
  let docesItem = c(".models .doces-item").cloneNode(true);
  docesItem.querySelector(".doces-item--img img").src = item.img;
  docesItem.querySelector(".doces-item--name").innerHTML = item.name;
  docesItem.querySelector(".doces-item--desc").innerHTML = item.description;

  c('.doces-area').append( docesItem );
});

const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}





