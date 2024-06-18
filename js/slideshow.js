var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;

showSlides(current);        // 현재 이미지 표시
prev.onclick = prevSlide;   // 이전 이미지 표시
next.onclick = nextSlide;   // 다음 이미지 표시

