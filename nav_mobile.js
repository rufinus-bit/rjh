(function() {
  function initMobileNav() {
    if (document.querySelector('.custom-mobile-nav')) return;

    // Create custom mobile navbar container
    var navContainer = document.createElement('div');
    navContainer.className = 'custom-mobile-nav';
    navContainer.innerHTML = 
      '<a href="/" class="mobile-brand">' +
        '<img src="/logo_transparent.png" class="mobile-logo" alt="RJ Logo"/>' +
        '<div>' +
          '<div class="mobile-title">RJ HEAT TECH SERVICES</div>' +
          '<div class="mobile-sub">Industrial Furnace Solutions</div>' +
        '</div>' +
      '</a>' +
      '<button class="mobile-menu-btn" aria-label="Toggle navigation">' +
        '<span></span>' +
        '<span></span>' +
        '<span></span>' +
      '</button>';

    // Create menu overlay drawer
    var menuOverlay = document.createElement('div');
    menuOverlay.className = 'mobile-menu-overlay';
    menuOverlay.innerHTML = 
      '<a href="/" class="mobile-nav-link" id="m-home">Home</a>' +
      '<a href="/about.html" class="mobile-nav-link" id="m-about">About Us</a>' +
      '<a href="#" class="mobile-nav-link" id="m-furnace" data-nav-category="furnace">Industrial Furnace</a>' +
      '<a href="#" class="mobile-nav-link" id="m-oven" data-nav-category="oven">Industrial Oven</a>' +
      '<a href="#" class="mobile-nav-link" id="m-customizable" data-nav-category="customizable">Customizable Furnace</a>' +
      '<a href="/service.html" class="mobile-nav-link" id="m-service">Service & Rework</a>' +
      '<a href="/contact.html" class="mobile-nav-link" id="m-contact">Contact Us</a>' +
      '<a href="/quotation.html" class="mobile-cta-btn" id="m-quote">Get a Quote</a>';

    document.body.appendChild(navContainer);
    document.body.appendChild(menuOverlay);

    // Setup toggle listeners
    var menuBtn = navContainer.querySelector('.mobile-menu-btn');
    menuBtn.onclick = function() {
      menuBtn.classList.toggle('open');
      menuOverlay.classList.toggle('open');
      if (menuOverlay.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    // Setup active state highlighting
    var path = window.location.pathname;
    if (path.indexOf('about.html') !== -1) {
      menuOverlay.querySelector('#m-about').classList.add('active');
    } else if (path.indexOf('service.html') !== -1) {
      menuOverlay.querySelector('#m-service').classList.add('active');
    } else if (path.indexOf('contact.html') !== -1) {
      menuOverlay.querySelector('#m-contact').classList.add('active');
    } else if (path.indexOf('quotation.html') !== -1) {
      menuOverlay.querySelector('#m-quote').classList.add('active');
    } else if (path.indexOf('catalog') === -1) {
      menuOverlay.querySelector('#m-home').classList.add('active');
    }

    // Intercept clicks on custom categories
    var categoryLinks = menuOverlay.querySelectorAll('[data-nav-category]');
    categoryLinks.forEach(function(link) {
      link.onclick = function(e) {
        e.preventDefault();
        var cat = link.getAttribute('data-nav-category');
        handleCatalogFilter(cat);
      };
    });
  }

  function handleCatalogFilter(category) {
    // Close mobile menu
    var menuOverlay = document.querySelector('.mobile-menu-overlay');
    var menuBtn = document.querySelector('.mobile-menu-btn');
    if (menuOverlay) menuOverlay.classList.remove('open');
    if (menuBtn) menuBtn.classList.remove('open');
    document.body.style.overflow = '';

    var isHome = window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '';
    if (isHome) {
      var catalogBtn = Array.from(document.querySelectorAll('button, a')).find(function(el) {
        var t = (el.textContent || el.innerText || '').trim().toLowerCase();
        return t === 'complete catalog' || t === 'catalog';
      });
      if (catalogBtn) {
        catalogBtn.click();
        setTimeout(function() {
          var filterBtn = Array.from(document.querySelectorAll('button')).find(function(el) {
            return el.getAttribute('data-category') === category;
          });
          if (filterBtn) {
            filterBtn.click();
            filterBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 400);
      }
    } else {
      window.location.href = '/#catalog?category=' + category;
    }
  }

  // Deep-link processing on load
  function checkDeepLink() {
    var hash = window.location.hash;
    var params = new URLSearchParams(window.location.search);
    var category = params.get('category');
    if (hash.indexOf('#catalog') === 0 && category) {
      var tries = 0;
      var timer = setInterval(function() {
        tries++;
        var catalogBtn = Array.from(document.querySelectorAll('button, a')).find(function(el) {
          var t = (el.textContent || el.innerText || '').trim().toLowerCase();
          return t === 'complete catalog' || t === 'catalog';
        });
        if (catalogBtn) {
          catalogBtn.click();
          clearInterval(timer);
          
          var filterTries = 0;
          var filterTimer = setInterval(function() {
            filterTries++;
            var filterBtn = Array.from(document.querySelectorAll('button')).find(function(el) {
              return el.getAttribute('data-category') === category;
            });
            if (filterBtn) {
              filterBtn.click();
              filterBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
              clearInterval(filterTimer);
            }
            if (filterTries > 30) clearInterval(filterTimer);
          }, 150);
        }
        if (tries > 40) clearInterval(timer);
      }, 150);
    }
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initMobileNav();
      checkDeepLink();
    });
  } else {
    initMobileNav();
    checkDeepLink();
  }

  // Fallback observer in case React re-renders body later
  var obs = new MutationObserver(function() {
    initMobileNav();
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });
})();
