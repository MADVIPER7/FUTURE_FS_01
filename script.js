// ===== MOBILE MENU =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu on link click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// ===== TYPED.JS =====
var typed = new Typed(".typing", {
  strings: [
    "Full Stack Developer",
    "AI Enthusiast",
    "Machine Learning Learner",
    "Django Developer",
    "React Developer"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1500,
  loop: true
});


// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// ===== SCROLL ANIMATIONS =====
const fadeElements = document.querySelectorAll(
  ".stat-box, .skill-category, .project-card, .cert-card, .timeline-item, .contact-item, .upcoming-card"
);

fadeElements.forEach(el => el.classList.add("fade-in"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index * 80);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
});

fadeElements.forEach(el => observer.observe(el));


// ===== CONTACT FORM =====
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const btn = document.getElementById("submitBtn");
  const originalText = btn.innerHTML;

  btn.innerHTML = '<i class="fa-solid fa-check"></i> Sent!';
  btn.style.background = "linear-gradient(135deg, #00c850, #00a040)";

  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = "";
    form.reset();
  }, 2500);
});


// ===== ACTIVE NAV LINK HIGHLIGHT =====
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLink.style.color = "white";
      } else {
        navLink.style.color = "";
      }
    }
  });
});
