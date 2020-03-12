function openModal4() {
  document.getElementById("myModal4").style.display = "block";
}

function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}

var slideIndex = 1;
showSlides4(slideIndex);

function plusSlides4(n) {
  showSlides4(slideIndex += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex = n);
}

function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("demo4");
  var captionText = document.getElementById("caption4");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active3", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active3";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeModal4();
    }
   if (evt.keyCode == 37) {
      plusSlides4(-1);
   }
   if (evt.keyCode == 39) {
      plusSlides4(1);
  }
}
