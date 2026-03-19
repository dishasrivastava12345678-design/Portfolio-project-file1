// GSAP Animations

// Floating profile pic
gsap.to(".hero-profile-pic img", {
  y: 20,          // move 20px up and down
  repeat: -1,     // infinite
  yoyo: true,     // reverse
  ease: "sine.inOut",
  duration: 3
});

// Hero Text Animation on page load
gsap.from(".hero-text h1", {
  opacity: 0,
  x: 100,
  duration: 1.5,
  delay: 0.3,
  ease: "power2.out"
});

gsap.from(".hero-text p", {
  opacity: 0,
  x: 100,
  duration: 1.5,
  delay: 0.6,
  ease: "power2.out"
});

// Scroll Reveal Animation for sections
gsap.utils.toArray(".reveal").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    let top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {y:-50, opacity:0, duration:1});
gsap.from(".hero p", {y:50, opacity:0, duration:1});

// GALLERY

const slides = document.getElementById("slides");
const images = slides.children;
const total = images.length;

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.getElementById("dots");

let index = 0;

// CREATE DOTS
for (let i = 0; i < total; i++) {
  let dot = document.createElement("span");
  dot.addEventListener("click", () => {
    index = i;
    updateSlide();
  });
  dotsContainer.appendChild(dot);
}

// UPDATE SLIDE
function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;

  let dots = dotsContainer.children;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[index].classList.add("active");
}

// BUTTON EVENTS
nextBtn.addEventListener("click", () => {
  index = (index + 1) % total;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + total) % total;
  updateSlide();
});

// AUTO SLIDE
setInterval(() => {
  index = (index + 1) % total;
  updateSlide();
}, 3000);

// TOUCH SWIPE (mobile)
let startX = 0;

slides.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startX > endX + 50) {
    index = (index + 1) % total;
  } else if (startX < endX - 50) {
    index = (index - 1 + total) % total;
  }

  updateSlide();
});

// INIT
updateSlide();