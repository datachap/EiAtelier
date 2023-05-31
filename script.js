 // Smooth scroll function
 function smoothScroll(target, duration) {
   var targetElement = document.querySelector(target);
   var targetPosition = targetElement.offsetTop;
   var startPosition = window.pageYOffset;
   var distance = targetPosition - startPosition;
   var startTime = null;

   function scrollAnimation(currentTime) {
     if (startTime === null) startTime = currentTime;
     var timeElapsed = currentTime - startTime;
     var run = ease(timeElapsed, startPosition, distance, duration);
     window.scrollTo(0, run);
     if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
   }

   // Easing function
   function ease(t, b, c, d) {
     t /= d / 2;
     if (t < 1) return c / 2 * t * t + b;
     t--;
     return -c / 2 * (t * (t - 2) - 1) + b;
   }

   requestAnimationFrame(scrollAnimation);
 }





 document.addEventListener('DOMContentLoaded', function () {
   var heroImage = document.querySelector('.hero-image');
   heroImage.classList.add('show');
 });

 document.addEventListener('DOMContentLoaded', function () {
   var nav = document.querySelector('nav');
   nav.classList.add('show');
 });

 var sections = document.querySelectorAll('section');

 var options = {
   root: null,
   rootMargin: '0px',
   threshold: 0.15 // Adjust the threshold as needed
 };

 var observer = new IntersectionObserver(function (entries, observer) {
   entries.forEach(function (entry) {
     if (entry.isIntersecting) {
       var section = entry.target;
       section.classList.add('show');
       observer.unobserve(section);
     }
   });
 }, options);

 sections.forEach(function (section) {
   observer.observe(section);
 });


 var main = new Splide('#gallery', {
   type: 'carousel',
   heightRatio: 0.5,
   pagination: true,
   arrows: false,
   cover: true,
   autoplay: true,
 });

 var thumbnails = new Splide('#thumbnail-slider', {
   type: 'slide',
   rewind: true,
   fixedWidth: 104,
   fixedHeight: 58,
   isNavigation: true,
   gap: 10,
   focus: 'center',
   pagination: false,
   cover: true,
   dragMinThreshold: {
     mouse: 4,
     touch: 10,
   },
   breakpoints: {
     640: {
       fixedWidth: 66,
       fixedHeight: 38,
     },
   },
 });

 main.sync(thumbnails);
 main.mount();
 thumbnails.mount();