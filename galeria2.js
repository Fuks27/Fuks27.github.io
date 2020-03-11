function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides2(n) {
  showSlides(slideIndex += n);
}

function currentSlide2(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  var captionText = document.getElementById("caption2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeModal2();
    }
}
