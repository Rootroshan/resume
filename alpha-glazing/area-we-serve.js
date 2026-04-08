// area-we-serve.js

// Sticky Header Scroll Detection
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
navToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});

// Intersection Observer Scroll Reveals
const elementsToReveal = document.querySelectorAll('.reveal');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

elementsToReveal.forEach(element => {
    observer.observe(element);
});

// Form Double-Submit Prevention
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    let isSubmitting = false;
    form.addEventListener('submit', function(event) {
        if (isSubmitting) {
            event.preventDefault();
        } else {
            isSubmitting = true;
        }
    });
});