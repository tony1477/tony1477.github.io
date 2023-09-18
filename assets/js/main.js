AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

let job = 'Fullstack Programmer'
window.onload = () => {
  position.innerHTML = job
}

const btnMore = document.querySelectorAll('.expand-project')
btnMore.forEach( btn => {
  btn.addEventListener('click', function() {
    showDetail(this)
  })
})

const linkMore = document.querySelectorAll('.more')
linkMore.forEach(txt => {
  txt.addEventListener('click', function(){
    showList(this)
  })
})

const showDetail = (el) => {

  const element = el.previousElementSibling
  const dots = element.querySelector('#dots')
  const moreText = element.querySelector("#more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    el.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    el.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
