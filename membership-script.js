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


// Fee calculator
var feeMenu = document.querySelector("#options");
var option1 = document.querySelector("#opt-1");
var option2 = document.querySelector("#opt-2");
var option3 = document.querySelector("#opt-3");
var fee = document.querySelector("#fee");

option1.classList.add('selected-option');

feeMenu.addEventListener('click', function(){
  feeMenu.classList.toggle("fee-menu-selected");
});

option1.addEventListener('click', function(){
  fee.innerText = '8%';
  option1.classList.add('selected-option');
  option2.classList.remove('selected-option');
  option3.classList.remove('selected-option');
});

option2.addEventListener('click', function(){
  fee.innerText = '12%';
  option1.classList.remove('selected-option');
  option2.classList.add('selected-option');
  option3.classList.remove('selected-option');
});

option3.addEventListener('click', function(){
  fee.innerText = '20%';
  option1.classList.remove('selected-option');
  option2.classList.remove('selected-option');
  option3.classList.add('selected-option');
});

function calculations() {
  var fans = document.getElementById('input-1').value;
  var cost = document.getElementById('input-2').value;
  var fansInput = document.getElementById('input-1');
  var costInput = document.getElementById('input-2');
  var optText = document.getElementById("fee").textContent;
  var optNumber = optText.match(/\d+/);


  if (fansInput.checkValidity() && costInput.checkValidity()) {

    if (fans <= 50){
      feesCrreo = 0;
      revenueCrreo = (fans*cost).toFixed(2);
    } 
    else {
      feesCrreo = ((fans - 50) * 0.2).toFixed(2);
      revenueCrreo = ((fans * cost) - feesCrreo).toFixed(2);
    }

    feesCompetitor = (fans * cost * optNumber / 100).toFixed(2);
    revenueCompetitor = (fans * cost * (100 - optNumber) / 100).toFixed(2);
    savings = (revenueCrreo - revenueCompetitor).toFixed(2);

    document.getElementById("fees-crreo").innerText = '$' + feesCrreo;
    document.getElementById("revenue-crreo").innerText = '$' + revenueCrreo;
    document.getElementById("fees-competitor").innerText = '$' + feesCompetitor;
    document.getElementById("revenue-competitor").innerText = '$' + revenueCompetitor;
    document.getElementById("savings").innerText = '$' + savings;

  }
}