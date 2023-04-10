const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entry")
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.mainText');
hiddenElements.forEach((e1) => observer.observe(e1));