let currentSlide = 0;
  const totalSlides = document.querySelectorAll('.v-slide').length;
  const sliderInner = document.getElementById('sliderInner');
  const dots = document.querySelectorAll('.v-dot');

  function goToSlide(index) {
    currentSlide = index;
    // Move the container vertically
    sliderInner.style.transform = `translateY(-${currentSlide * 100}vh)`;
    
    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  // Auto-scroll logic
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
  }

  let autoCycle = setInterval(nextSlide, 5000);

  // Pause auto-cycle if user clicks a dot
  function manualNav(index) {
    clearInterval(autoCycle);
    goToSlide(index);
    autoCycle = setInterval(nextSlide, 5000);
  }