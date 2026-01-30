import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimations = () => {
  // Set initial state to visible first
  gsap.set('.hero-title, .hero-subtitle, .hero-cta', { opacity: 1 });
  
  gsap.from('.hero-title', {
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: 'power4.out',
    stagger: 0.2,
    clearProps: 'all',
  });

  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out',
    clearProps: 'all',
  });

  gsap.from('.hero-cta', {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    delay: 1,
    ease: 'back.out(1.7)',
    clearProps: 'all',
  });
};

export const initAboutAnimations = () => {
  gsap.set('.about-content, .stat-card', { opacity: 1 });
  
  gsap.from('.about-content', {
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x: -100,
    duration: 1,
    ease: 'power3.out',
    clearProps: 'all',
  });

  gsap.from('.stat-card', {
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    stagger: 0.1,
    ease: 'back.out(1.7)',
    clearProps: 'all',
  });
};

export const initEventsAnimations = () => {
  gsap.set('.event-card', { opacity: 1 });
  
  gsap.from('.event-card', {
    scrollTrigger: {
      trigger: '.events-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 80,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    clearProps: 'all',
  });
};

export const initScheduleAnimations = () => {
  gsap.set('.timeline-item', { opacity: 1 });
  
  gsap.from('.timeline-item', {
    scrollTrigger: {
      trigger: '.schedule-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x: (index) => (index % 2 === 0 ? -50 : 50),
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
    clearProps: 'all',
  });
};

export const initParallaxEffect = () => {
  gsap.to('.parallax-bg', {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.3,
    ease: 'none',
  });
};

export const initAllAnimations = () => {
  initHeroAnimations();
  initAboutAnimations();
  initEventsAnimations();
  initScheduleAnimations();
  initParallaxEffect();
};
