// AOS animation library
AOS.init({
  offset: 300,
  duration: 1100,
});


// Mobile optimization
if (width < 1025) {
  if (iOS) {
    $(document).ready(function() {
      $("#appear").html('<video autoplay loop muted poster="resources/poster5.webp" id="url-video2" src="resources/video4.mp4"></video>');
    });
  }
  else {
    $(document).ready(function() {
      $("#appear").html('<video autoplay loop muted poster="resources/poster4.webp" id="url-video2" src="resources/video4.mp4"></video>');
    });
  }
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


// FAQ buttons
$("#btn-1").click( function(){
  $("#btn-1").css("background-color", "#000075");
  $("#btn-1").css("color", "#EBE8E5");
  $("#btn-2").css("background-color", "#EBE8E5");
  $("#btn-2").css("color", "#000075");
  $("#sbtn-1").css("display", "block");
  $("#sbtn-2").css("display", "block");
  $("#sbtn-3").css("display", "block");
  $("#sbtn-4").css("display", "block");
  $(".group2").css("display", "none");
  $(".group1").css("display", "block");
})

$("#btn-2").click( function(){
  $("#btn-2").css("background-color", "#000075");
  $("#btn-2").css("color", "#EBE8E5");
  $("#btn-1").css("background-color", "#EBE8E5");
  $("#btn-1").css("color", "#000075");
  $("#sbtn-1").css("display", "none");
  $("#sbtn-2").css("display", "none");
  $("#sbtn-3").css("display", "none");
  $("#sbtn-4").css("display", "none");
  $(".group1").css("display", "none");
  $(".group2").css("display", "block");
})

$("#sbtn-1").click( function(){
  $("#sbtn-1").css("border-bottom", "0.95px solid #000075");
  $("#sbtn-2").css("border-bottom", "0px");
  $("#sbtn-3").css("border-bottom", "0px");
  $("#sbtn-4").css("border-bottom", "0px");
  $(".sub-group1").css("display", "block");
  $(".sub-group2").css("display", "none");
  $(".sub-group3").css("display", "none");
  $(".sub-group4").css("display", "none");
})

$("#sbtn-2").click( function(){
  $("#sbtn-1").css("border-bottom", "0px");
  $("#sbtn-2").css("border-bottom", "0.95px solid #000075");
  $("#sbtn-3").css("border-bottom", "0px");
  $("#sbtn-4").css("border-bottom", "0px");
  $(".sub-group1").css("display", "none");
  $(".sub-group2").css("display", "block");
  $(".sub-group3").css("display", "none");
  $(".sub-group4").css("display", "none");
})

$("#sbtn-3").click( function(){
  $("#sbtn-1").css("border-bottom", "0px");
  $("#sbtn-2").css("border-bottom", "0px");
  $("#sbtn-3").css("border-bottom", "0.95px solid #000075");
  $("#sbtn-4").css("border-bottom", "0px");
  $(".sub-group1").css("display", "none");
  $(".sub-group2").css("display", "none");
  $(".sub-group3").css("display", "block");
  $(".sub-group4").css("display", "none");
})

$("#sbtn-4").click( function(){
  $("#sbtn-2").css("border-bottom", "0px");
  $("#sbtn-3").css("border-bottom", "0px");
  $("#sbtn-1").css("border-bottom", "0px");
  $("#sbtn-4").css("border-bottom", "0.95px solid #000075");
  $(".sub-group1").css("display", "none");
  $(".sub-group2").css("display", "none");
  $(".sub-group3").css("display", "none");
  $(".sub-group4").css("display", "block");
})

// Questions
var open = ["no","no","no","no","no","no","no","no","no","no","no","no","no","no"];

function expand(number, subsection, section){
  if (open[number-1] == "yes") {
    $("#icon" + number + subsection + section).css("transform", "rotateZ(45deg)");
    if (width < 1025) {
      $("#section" + number + subsection + section).css("height", "10.6vw");
    }
    else {
      $("#section" + number + subsection + section).css("height", "4.5vw");
    }
    open[number-1] = "no";
  }
  else {
    $("#icon" + number + subsection + section).css("transform", "rotateZ(90deg)");
    $("#section" + number + subsection + section).css("height", "auto");
    open[number-1] = "yes";
  }
}

var expanded = "no";

function expand2(){
  if (expanded == "no") {
    if (width < 800) {
      $(".options").css("height", "36.2vw");
    }
    else {
      $(".options").css("height", "27.2vw");
    }
    expanded = "yes";
  }
  else {
    if (width < 800) {
      $(".options").css("height", "15.2vw");
    }
    else {
      $(".options").css("height", "11.2vw");
    }
    expanded = "no";
  }
}

function resetarray(subsection){
  for (var i = 0; i < 15; i++) {

    $("#icon" + i + subsection + 1).css("transform", "rotateZ(45deg)");
    $("#icon" + i + subsection + 2).css("transform", "rotateZ(45deg)");
    if (width < 1025) {
      $("#section" + i + subsection + 1).css("height", "10.6vw");
      $("#section" + i + subsection + 2).css("height", "10.6vw");
    }
    else {
      $("#section" + i + subsection + 1).css("height", "4.5vw");
      $("#section" + i + subsection + 2).css("height", "4.5vw");
    }
    open[i]="no";
  }
}
