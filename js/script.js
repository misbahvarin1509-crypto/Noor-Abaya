

document.addEventListener('DOMContentLoaded', function () {

  var hamburger = document.querySelector('.hamburger');
  var navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
      var isOpen = navMenu.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

 
    var navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }


  var navbar = document.querySelector('.navbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll);


  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function (link) {
    var linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  

  var backToTop = document.querySelector('.back-to-top');

  function handleBackToTopVisibility() {
    if (!backToTop) return;
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
  handleBackToTopVisibility();
  window.addEventListener('scroll', handleBackToTopVisibility);

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

 
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId.length <= 1) return; /* ignore bare "#" */
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      var navHeight = navbar ? navbar.offsetHeight : 0;
      var targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });


  var revealItems = document.querySelectorAll('.reveal, .thread-divider');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    
    revealItems.forEach(function (item) {
      item.classList.add('in-view');
    });
  }

 
  document.querySelectorAll('img').forEach(function (img) {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.6s ease';

    function showImage() {
      img.style.opacity = '1';
    }

    function useFallback() {
  
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = 'true';
      var w = img.getAttribute('width') || 800;
      var h = img.getAttribute('height') || 1000;
      img.src = 'https://picsum.photos/' + w + '/' + h + '?grayscale&blur=1';
      showImage();
    }

    if (img.complete && img.naturalWidth > 0) {
      showImage();
    } else if (img.complete) {
      useFallback();
    } else {
      img.addEventListener('load', showImage);
      img.addEventListener('error', useFallback);
    }
  });


  document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left;
      btn.style.setProperty('--x', x + 'px');
    });
  });



  var newsletterForm = document.querySelector('.newsletter-form');

  if (newsletterForm) {
    var emailInput = newsletterForm.querySelector('input[type="email"]');
    var msgBox = document.querySelector('.newsletter-msg');

    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var emailValue = emailInput.value.trim();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailValue === '') {
        showNewsletterMessage('Please enter your email address.', 'error');
      } else if (!emailPattern.test(emailValue)) {
        showNewsletterMessage('Please enter a valid email address.', 'error');
      } else {
        showNewsletterMessage('Thank you for subscribing to Noor Abaya!', 'success');
        newsletterForm.reset();
      }
    });

    function showNewsletterMessage(text, type) {
      if (!msgBox) return;
      msgBox.textContent = text;
      msgBox.className = 'newsletter-msg ' + type;
    }
  }

}); 
