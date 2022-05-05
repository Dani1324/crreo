// AOS animation library
AOS.init({
  offset: 300,
  duration: 1100,
});

// Write html lines
var iOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);
if (iOS){
  $('#mail1').removeAttr("href");
  document.getElementById("mail1").style.color = "#000075";
  $('#mail2').removeAttr("href");
  document.getElementById("mail2").style.color = "#000075";
  $('#mail3').removeAttr("href");
  document.getElementById("mail3").style.color = "#000075";
  $('#mail4').removeAttr("href");
  document.getElementById("mail4").style.color = "#000075";
}

// Mobile optimization
const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

if (width < 1025) {
  $(document).ready(function() {
    $("#appear").html('<video autoplay loop muted poster="resources/poster4.webp" id="url-video2" src="resources/video4.mp4"></video>');
  });
}
else {
  $(document).ready(function() {
    $("#appear1").html('<video autoplay loop muted poster="resources/poster3.webp" id="url-video1" src="resources/video3.mp4"></video>');
    $("#appear2").html('<video autoplay loop muted poster="resources/poster4.webp" id="url-video2" src="resources/video4.mp4"></video>');
  });
}

// Text change
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = this.loopNum != this.toRotate.length - 1; // it should be true if all text had not been displayed
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    if (this.loopNum != this.toRotate.length) this.loopNum++;
    delta = 1000;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  css.type = "text/css";
  if (width > 1025) {
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0vw solid; border-image: linear-gradient(rgb(0, 0, 0, 0) 24%, #000075 0%, #000075 85%, rgb(0, 0, 0, 0) 1%) 1 100%;}";
  }
  else {
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0vw solid; border-image: linear-gradient(rgb(0, 0, 0, 0) 24%, #ffffff 0%, #ffffff 85%, rgb(0, 0, 0, 0) 1%) 1 100%;}";
  }
  document.body.appendChild(css);
};


// Menu
$( document ).ready(function() {
  $( ".hamburger" ).on('click', function() {
      $(".menu").toggleClass("menu--open");
    });
});

// Add smooth scrolling to all links
$("a#ciao").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
      // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  }
});
