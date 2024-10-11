(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".header-logo");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // === logo change
    if (ud_header.classList.contains("sticky")) {
      logo.src = "assets/images/logo/logo.svg";
    } else {
      logo.src = "assets/images/logo/logo-white.svg";
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // ===== responsive navbar
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("hidden");
  });

  //===== close navbar-collapse when a  clicked
  document
    .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
    .forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      })
    );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector(".submenu").classList.toggle("hidden");
    });
  });

  // ===== Faq accordion
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((el) => {
    el.querySelector(".faq-btn").addEventListener("click", () => {
      el.querySelector(".icon").classList.toggle("rotate-180");
      el.querySelector(".faq-content").classList.toggle("hidden");
    });
  });

  // ===== wow js
  new WOW().init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };
})();

var vincentBool = true;
function vincentFunction() {
  var popup = document.getElementById("vincentPopup");
  popup.classList.toggle("show");

  var imgVincent = document.getElementById("vincentIMG");
  var vincentCircles = document.getElementById("vincentCircles");
  var vincentTriangle = document.getElementById("vincentTriangle");
  if(vincentBool){
    vincentCircles.style.opacity = 1;
    imgVincent.style.opacity = 1;  
    vincentTriangle.style.opacity = 1;
    vincentBool = !vincentBool;
  } else {
    vincentCircles.style.opacity = 0;
    imgVincent.style.opacity = 0;
    vincentTriangle.style.opacity = 0;
    vincentBool = !vincentBool;
  }
}

var nishantBool = true;
function nishantFunction() {
  var popup = document.getElementById("nishantPopup");
  popup.classList.toggle("show");

  var imgNishant = document.getElementById("nishantIMG");
  var nishantCircles = document.getElementById("nishantCircles");
  var nishantTriangle = document.getElementById("nishantTriangle"); 
  if(nishantBool){
    nishantTriangle.style.opacity = 1;
    nishantCircles.style.opacity = 1;
    imgNishant.style.opacity = 1;  
    nishantBool = !nishantBool;
  } else {
    nishantTriangle.style.opacity = 0;
    nishantCircles.style.opacity = 0;
    imgNishant.style.opacity = 0;
    nishantBool = !nishantBool;

  }
}

var raghavBool = true;
function raghavFunction() {
  var popup = document.getElementById("raghavPopup");
  popup.classList.toggle("show");

  var imgRaghav = document.getElementById("raghavIMG");
  var raghavCircles = document.getElementById("raghavCircles");
  var raghavTriangle = document.getElementById("raghavTriangle"); 
  if(raghavBool){
    raghavTriangle.style.opacity = 1;
    raghavCircles.style.opacity = 1;
    imgRaghav.style.opacity = 1;  
    raghavBool = !raghavBool;
  } else {
    raghavTriangle.style.opacity = 0;
    raghavCircles.style.opacity = 0;
    imgRaghav.style.opacity = 0;
    raghavBool = !raghavBool;

  }
}

var manasviniBool = true;
function manasviniFunction() {
  var popup = document.getElementById("manasviniPopup");
  popup.classList.toggle("show");

  var imgManasvini = document.getElementById("manasviniIMG");
  var manasviniCircles = document.getElementById("manasviniCircles");
  var manasviniTriangle = document.getElementById("manasviniTriangle"); 
  if(manasviniBool){
    manasviniTriangle.style.opacity = 1;
    manasviniCircles.style.opacity = 1;
    imgManasvini.style.opacity = 1;  
    manasviniBool = !manasviniBool;
  } else {
    manasviniTriangle.style.opacity = 0;
    manasviniCircles.style.opacity = 0;
    imgManasvini.style.opacity = 0;
    manasviniBool = !manasviniBool;

  }
}

var brianBool = true;
function brianFunction() {
  var popup = document.getElementById("brianPopup");
  popup.classList.toggle("show");

  var imgBrian = document.getElementById("brianIMG");
  var brianCircles = document.getElementById("brianCircles");
  var brianTriangle = document.getElementById("brianTriangle"); 
  if(brianBool){
    brianTriangle.style.opacity = 1;
    brianCircles.style.opacity = 1;
    imgBrian.style.opacity = 1;  
    brianBool = !brianBool;
  } else {
    brianTriangle.style.opacity = 0;
    brianCircles.style.opacity = 0;
    imgBrian.style.opacity = 0;
    brianBool = !brianBool;

  }
}
