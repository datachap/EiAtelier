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

  // Smooth scroll when clicking on navigation links
  var navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var target = this.getAttribute('href');
      smoothScroll(target, 800);
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    $('.gallery-carousel').slick({
        autoplay:true,
        autoplaySpeed: 2500,
      arrows: false,
      prevArrow: '<span class="carousel-prev">&#8249;</span>',
      nextArrow: '<span class="carousel-next">&#8250;</span>'
    });
  
    // Manually control the carousel navigation
    $('.carousel-prev').click(function() {
      $('.gallery-carousel').slick('slickPrev');
    });
  
    $('.carousel-next').click(function() {
      $('.gallery-carousel').slick('slickNext');
    });
  });
  
  
  // Scroll effect for services section
  window.addEventListener('scroll', function () {
    const servicesSection = document.querySelector('#services');
    const serviceImage = servicesSection.querySelector('.service-image');
    const scrollPosition = window.pageYOffset;
    const maxScroll = servicesSection.offsetHeight - window.innerHeight;
  
    // Calculate image scale based on scroll position
    const scale = 1 + (scrollPosition / maxScroll) * 0.2; // Adjust the factor (0.05) for desired scale
  
    // Apply scale transformation to image
    serviceImage.style.transform = `scale(${scale})`;
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var heroImage = document.querySelector('.hero-image');
    heroImage.classList.add('show');
  });

  document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('nav');
    nav.classList.add('show');
  });

  var sections = document.querySelectorAll('section');

var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15 // Adjust the threshold as needed
};

var observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var section = entry.target;
      section.classList.add('show');
      observer.unobserve(section);
    }
  });
}, options);

sections.forEach(function(section) {
  observer.observe(section);
});
