window.onscroll = function positionMainScreen() {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  let navbarMainScreen = document.querySelector(".navbar");

  if(scroll <= navbarMainScreen.offsetHeight) {
    navbarMainScreen.classList.remove("navbar_fixed");
    
  } else if(scroll > navbarMainScreen.offsetHeight) {
    navbarMainScreen.classList.contains("navbar")
      ? navbarMainScreen.classList.add("navbar_fixed")
      : console.log("err");
  }
}

// Paralax
function parallax(event) {
  const classesForParallax = this.querySelectorAll('.services__section, .features');
  classesForParallax.forEach(element => {
    classesForParallax.style.transform = `translateY(${event.scroll}px)`
  });
}

document.addEventListener('onscroll', parallax);

// Second function
window.addEventListener('load', function () {
  const gradientBlock = document.querySelector(".mainScreen__blockGradient");
  const gradient = document.getElementById("mainScreen__gradient");

  gradientBlock.onmousemove = function(event) {
    let x = event.clientX * 20 / window.innerWidth;
    let y = event.clientY * 20 / window.innerHeight;
    const arad = Math.atan2(y, x);
    const angle = Math.abs(arad * 180 / Math.PI - 90);

    gradient.style.background = `linear-gradient(${angle*7}deg, rgba(255,255,255,${angle/100}) 15%, rgba(255,255,255,0) 100%)`;
  }

  gradientBlock.onmouseleave = function(event) {
    gradient.style.background = "transparent";
  }
  
}, false);