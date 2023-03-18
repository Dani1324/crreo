const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
var iOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);

// Smooth scrolling to all .smooth links
$("a.smooth").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});


// Mobile menu
document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector(".hamburger");
  var menu = document.querySelector(".menu");
  var header = document.querySelector('.header');
  var body = document.querySelector('body');

  hamburger.addEventListener("click", function() {

    hamburger.classList.toggle("hamburger--open");
    menu.classList.toggle("menu--open");
    header.classList.toggle("menu--header");
    body.classList.toggle("body--fixed");

    gsap.set(".menu-links a", { opacity: 0,});
    gsap.to(".menu-links a", {
      delay: 0.2,
      duration: 0.5, 
      opacity: 1,
    });

  });
});


// Lazy loading
function lazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  const imageCount = images.length;
  let loadedCount = 0;

  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0 && loadedCount < imageCount) {
        const image = entry.target;
        image.src = image.dataset.src;
        observer.unobserve(image);
        loadedCount++;
      }
    });
  }

  const observer = new IntersectionObserver(onIntersection, options);

  const visibleImages = [];
  const hiddenImages = [];
  images.forEach(image => {
    const rect = image.getBoundingClientRect();
    if ((rect.top >= 0 && rect.top <= window.innerHeight) || (rect.bottom >= 0 && rect.bottom <= window.innerHeight)) {
      visibleImages.push(image);
    } else {
      hiddenImages.push(image);
    }
  });

  visibleImages.forEach(image => {
    image.src = image.dataset.src;
    loadedCount++;
  });

  hiddenImages.forEach(image => {
    observer.observe(image);
  });
}

window.addEventListener('DOMContentLoaded', lazyLoad);