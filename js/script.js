
// Menu Responsif
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

hamburgerMenu.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});

// Efek Scroll
const links = document.querySelectorAll('.navbar-nav a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Menutup Menu pada Klik di Luar
window.addEventListener('click', (e) => {
  if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});



// HIVER kelas 'product-card'(HEALTHY FOOD)
const productCards = document.querySelectorAll('.products .product-card');

productCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.background = 'var(--third-color)';
    card.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
  });

  card.addEventListener('mouseout', () => {
    card.style.background = ''; 
    card.style.boxShadow = ''; 
  });
});


// HOVER 'produk-card'(PRODUCT)
const produkCards = document.querySelectorAll('.produk .row .produk-card');


produkCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.background = 'var(--five-color)';
    card.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
  });


  card.addEventListener('mouseout', () => {
    card.style.background = ''; 
    card.style.boxShadow = ''; 
  });
});


