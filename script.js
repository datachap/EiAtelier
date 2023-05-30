// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
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
    const scale = 1 + (scrollPosition / maxScroll) * 0.05; // Adjust the factor (0.05) for desired scale
  
    // Apply scale transformation to image
    serviceImage.style.transform = `scale(${scale})`;
  });
  
  