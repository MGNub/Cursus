const header = document.querySelector('header');
const topBar = document.querySelector('#top-bar');
window.addEventListener('scroll', () => {
  if(window.scrollY > 0) {
    header.classList.add('solid');
    topBar.style.borderRadius = '0';
  } else {
    header.classList.remove('solid');
    topBar.style.borderRadius = '100px';
  }
});
window.onload = function() {
  window.addEventListener("scroll", function() {
    var slide = document.getElementById("slide");
    if (window.scrollY > 100) {
      slide.classList.add("fade-out");
      slide.style.color = "transparent";
    } else {
      slide.classList.remove("fade-out");
      slide.classList.add("fade-out");
      slide.style.color = "white";
    }
  });
};
