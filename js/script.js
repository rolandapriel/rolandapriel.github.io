const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;
const slideInterval = 3000; // Waktu dalam milidetik (misalnya, 3 detik)

function nextSlide() {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add('active');
}

// Set slide pertama menjadi aktif saat halaman dimuat
if (testimonials.length > 0) { 
    testimonials[0].classList.add('active');
    setInterval(nextSlide, slideInterval);
}