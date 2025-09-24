// const slides = document.querySelector(".slides");
// const slideCount = document.querySelectorAll(".slide").length;
// let index = 0;

// document.querySelector(".next").addEventListener("click", () => {
//   index = (index + 1) % slideCount; // loop around
//   slides.style.transform = `translateX(-${index * 100}%)`;
// });

// document.querySelector(".prev").addEventListener("click", () => {
//   index = (index - 1 + slideCount) % slideCount; // loop around
//   slides.style.transform = `translateX(-${index * 100}%)`;
// });


// const slides = document.querySelector(".slides")
// const slide = document.querySelectorAll(".slide").length

// const firstClone = slideItems[0].cloneNode(true);
// const lastClone = slideItems[slideItems.length - 1].cloneNode(true);

// slides.appendChild(firstClone);
// slides.insertBefore(lastClone, slideItems[0]);

// // Update list
// slideItems = document.querySelectorAll(".slide");

// let index = 1; // Start at "real first slide"
// const slideWidth = 100;
// let intervalId;



// function next() {
//   index = (index + 1) % slide;
//   slides.style.transform = `translateX(-${index * 100}%)`;
// }

// function prev() {
//     index = (index - 1 + slide) % slide;
//     slides.style.transform = `translateX(-${index * 100}%)`;
// }


// function startAutoSlide() {
//   intervalId = setInterval(next, 3000);
// }

// function stopAutoSlide() {
//   clearInterval(intervalId)
// }

// document.querySelector(".Carousel").addEventListener("mouseenter",stopAutoSlide)
// document.querySelector(".Carousel").addEventListener("mouseleave",startAutoSlide)


// startAutoSlide();






// --------------------------------------


// const slides = document.querySelector(".slides");
// let slideItems = document.querySelectorAll(".slide");


// const firstClone = slideItems[0].cloneNode(true);
// const lastClone = slideItems[slideItems.length - 1].cloneNode(true);

// slides.appendChild(firstClone);
// slides.insertBefore(lastClone, slideItems[0]);


// slideItems = document.querySelectorAll(".slide");


// let index = 1;
// const slideWidth = 100;
// slides.style.transform = `translateX(-${index * slideWidth}%)`;

// let intervalId; // store auto-slide timer


// function moveToSlide(newIndex) {
//   index = newIndex;
//   slides.style.transition = "transform 1s ease";
//   slides.style.transform = `translateX(-${index * slideWidth}%)`;
// }


// function checkLoop() {
//   if (index === slideItems.length - 1) {
//     // at fake last
//     setTimeout(() => {
//       slides.style.transition = "none";
//       index = 1;
//       slides.style.transform = `translateX(-${index * slideWidth}%)`;
//     }, 500);
//   }

//   if (index === 0) {
//     // at fake first
//     setTimeout(() => {
//       slides.style.transition = "none";
//       index = slideItems.length - 2; // jump to real last
//       slides.style.transform = `translateX(-${index * slideWidth}%)`;
//     }, 500);
//   }
// }

// // Next & Prev
// function showNextSlide() {
//   moveToSlide(index + 1);
//   checkLoop();
// }

// function showPrevSlide() {
//   moveToSlide(index - 1);
//   checkLoop();
// }

// //  Auto slide
// function startAutoSlide() {
//   intervalId = setInterval(showNextSlide, 3000); // 3s
// }

// function stopAutoSlide() {
//   clearInterval(intervalId);
// }

// //  Button clicks
// document.querySelector(".next").addEventListener("click", () => {
//   showNextSlide();
//   stopAutoSlide();
//   // startAutoSlide();
// });

// document.querySelector(".prev").addEventListener("click", () => {
//   showPrevSlide();
//   stopAutoSlide();
//   // startAutoSlide();
// });


// document
//   .querySelector(".carousel")
//   .addEventListener("mouseenter", stopAutoSlide);
// document
//   .querySelector(".carousel")
//   .addEventListener("mouseleave", startAutoSlide);

// startAutoSlide();



// latest-----------------------


const carousel = document.querySelector(".carousel");
const slides = document.querySelector(".slides");
let slideItems = document.querySelectorAll(".slide");

// Clone first and last slides
const firstClone = slideItems[0].cloneNode(true);
const lastClone = slideItems[slideItems.length - 1].cloneNode(true);
slides.appendChild(firstClone);
slides.insertBefore(lastClone, slideItems[0]);

// Update list
slideItems = document.querySelectorAll(".slide");

let index = 1; 
const slideWidth = carousel.offsetWidth;
console.log(slideWidth)
slides.style.transform = `translateX(-${index * slideWidth}px)`;

let intervalId;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = -index * slideWidth;
let animationID;

console.log(animationID)

// ---- Functions ----
function setSliderPosition() {
  slides.style.transform = `translateX(${currentTranslate}px)`;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function touchStart(e) {
  isDragging = true;
  startX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  animationID = requestAnimationFrame(animation);
  slides.style.transition = "none"; // stop smooth scroll while dragging
}

function touchMove(e) {
  if (!isDragging) return;
  const currentX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  const diff = currentX - startX;
  currentTranslate = prevTranslate + diff;
}

function touchEnd() {
  cancelAnimationFrame(animationID);
  isDragging = false;

  // Snap to nearest slide
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -150) {
    index++; 
  } else if (movedBy > 150) {
    index--; 
  }

  moveToSlide(index);
}

function moveToSlide(newIndex) {
  index = newIndex;
  slides.style.transition = "transform 0.5s ease";
  currentTranslate = -index * slideWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
  checkLoop();
}

function checkLoop() {
  slides.addEventListener("transitionend", () => {
    if (index === slideItems.length - 1) {
      slides.style.transition = "none";
      index = 1;
      currentTranslate = -index * slideWidth;
      prevTranslate = currentTranslate;
      setSliderPosition();
    }
    if (index === 0) {
      slides.style.transition = "none";
      index = slideItems.length - 2;
      currentTranslate = -index * slideWidth;
      prevTranslate = currentTranslate;
      setSliderPosition();
    }
  });
}

// ---- Auto slide ----
function startAutoSlide() {
  intervalId = setInterval(() => moveToSlide(index + 1), 3000);
}
function stopAutoSlide() {
  clearInterval(intervalId);
}

// ---- Events ----
carousel.addEventListener("mouseenter", stopAutoSlide);
carousel.addEventListener("mouseleave", startAutoSlide);
document
  .querySelector(".next")
  .addEventListener("click", () => moveToSlide(index + 1));
document
  .querySelector(".prev")
  .addEventListener("click", () => moveToSlide(index - 1));

// Mouse events
slides.addEventListener("mousedown", touchStart);
slides.addEventListener("mousemove", touchMove);
slides.addEventListener("mouseup", touchEnd);
slides.addEventListener("mouseleave", () => {
  if (isDragging) touchEnd();
});

// Touch events (mobile)
slides.addEventListener("touchstart", touchStart);
slides.addEventListener("touchmove", touchMove);
slides.addEventListener("touchend", touchEnd);

// Start
startAutoSlide();

