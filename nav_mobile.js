(function() {
  function initMobileNav() {
    if (document.querySelector('.custom-mobile-nav')) return;

    // Create custom mobile navbar container
    var navContainer = document.createElement('div');
    navContainer.className = 'custom-mobile-nav';
    navContainer.innerHTML = 
      '<a href="index.html" class="mobile-brand">' +
        '<img src="logo_transparent.png" class="mobile-logo" alt="RJ Logo"/>' +
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
      '<a href="#" class="mobile-nav-link" id="m-furnace" data-nav-category="furnace">Industrial Furnace</a>' +
      '<a href="#" class="mobile-nav-link" id="m-oven" data-nav-category="oven">Industrial Oven</a>' +
      '<a href="#" class="mobile-nav-link" id="m-customizable" data-nav-category="customizable">Customizable Furnace</a>' +
      '<a href="service.html" class="mobile-nav-link" id="m-service">Service & Rework</a>' +
      '<a href="contact.html" class="mobile-nav-link" id="m-contact">Contact Us</a>';

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
      // Highlight About Us
    } else if (path.indexOf('service.html') !== -1) {
      menuOverlay.querySelector('#m-service').classList.add('active');
    } else if (path.indexOf('contact.html') !== -1) {
      menuOverlay.querySelector('#m-contact').classList.add('active');
    }

    // Intercept clicks on custom categories
    var categoryLinks = menuOverlay.querySelectorAll('[data-nav-category]');
    categoryLinks.forEach(function(link) {
      link.onclick = function(e) {
        e.preventDefault();
        var cat = link.getAttribute('data-nav-category');
        handleCatalogFilter(cat, null);
      };
    });
  }

  function initDesktopNav() {
    if (document.querySelector('.custom-desktop-header')) return;

    var header = document.createElement('div');
    header.className = 'custom-desktop-header';
    header.innerHTML = 
      '<div class="top-bar">' +
        '<div class="top-bar-left">' +
          '<span>📞 +91 95008 93151</span>' +
          '<span style="margin-left: 1.5rem;">✉️ support@rjheattech.com</span>' +
        '</div>' +
        '<div class="top-bar-right">' +
          '<a href="service.html">Service</a>' +
          '<a href="about.html">About Us</a>' +
          '<a href="contact.html">Contact Us</a>' +
        '</div>' +
      '</div>' +
      '<div class="main-bar">' +
        '<a href="index.html" class="desktop-brand">' +
          '<img src="logo_transparent.png" class="desktop-logo" alt="RJ Logo"/>' +
          '<div>' +
            '<div class="desktop-title">RJ HEAT TECH SERVICES</div>' +
            '<div class="desktop-sub">Industrial Furnace Solutions</div>' +
          '</div>' +
        '</a>' +
        '<div class="desktop-nav-links">' +
          '<div class="dropdown-container">' +
            '<button class="dropdown-btn">' +
              'Industrial Furnace' +
              '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>' +
            '</button>' +
            '<div class="dropdown-menu">' +
              '<a href="#" class="dropdown-item" data-desktop-category="furnace" data-item="Box Furnace">Box Furnace</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="furnace" data-item="Pit Furnace">Pit Furnace</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="furnace" data-item="Bogie Hearth Furnace">Bogie Hearth Furnace</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="furnace" data-item="Wire Annealing Furnace">Wire Annealing Furnace</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="furnace" data-item="Elevator Furnace">Elevator Furnace</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="furnace" data-item="Electric Arc Furnace">Electric Arc Furnace</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="furnace" data-item="Rotary Kiln Furnace">Rotary Kiln Furnace</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="furnace" data-item="Reverberatory Furnace">Reverberatory Furnace</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="furnace" data-item="Crucible Furnace">Crucible Furnace</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="furnace" data-item="Tube Furnace">Tube Furnace</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="furnace" data-item="Muffle Furnace">Muffle Furnace</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="furnace" data-item="Vacuum Furnace">Vacuum Furnace</a>' +
            '</div>' +
          '</div>' +
          '<div class="dropdown-container">' +
            '<button class="dropdown-btn">' +
              'Industrial Oven' +
              '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>' +
            '</button>' +
            '<div class="dropdown-menu">' +
              '<a href="#" class="dropdown-item" data-desktop-category="oven" data-item="Conveyor Oven">Conveyor Oven</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="oven" data-item="Industrial Batch Oven">Industrial Batch Oven</a>' +
              '<a href="#" class="dropdown-item" data-desktop-category="oven" data-item="Clean Room Oven">Clean Room Oven</a>' +
            '</div>' +
          '</div>' +
          '<a href="#" data-desktop-category="customizable">Customizable Furnace</a>' +
          '<a href="service.html">Service & Rework</a>' +
          '<a href="contact.html">Contact Us</a>' +
        '</div>' +
      '</div>';

    document.body.appendChild(header);

    // Bind listeners to desktop nav items
    var categoryLinks = header.querySelectorAll('[data-desktop-category]');
    categoryLinks.forEach(function(link) {
      link.onclick = function(e) {
        e.preventDefault();
        var cat = link.getAttribute('data-desktop-category');
        var item = link.getAttribute('data-item');
        handleCatalogFilter(cat, item);
      };
    });
  }

  function handleCatalogFilter(category, item) {
    // Close mobile menu if open
    var menuOverlay = document.querySelector('.mobile-menu-overlay');
    var menuBtn = document.querySelector('.mobile-menu-btn');
    if (menuOverlay) menuOverlay.classList.remove('open');
    if (menuBtn) menuBtn.classList.remove('open');
    document.body.style.overflow = '';

    var isHome = window.location.pathname.indexOf('index.html') !== -1 || window.location.pathname.endsWith('/') || window.location.pathname === '';
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
            if (item) {
              setTimeout(function() {
                var card = Array.from(document.querySelectorAll('h3')).find(function(el) {
                  return el.textContent.trim() === item;
                });
                if (card) {
                  card = card.closest('[class*="rounded"]');
                  if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.style.transition = 'box-shadow 0.5s ease-in-out';
                    card.style.boxShadow = '0 0 25px #f97316';
                    setTimeout(function() {
                      card.style.boxShadow = '';
                    }, 2000);
                  }
                }
              }, 150);
            } else {
              filterBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }
        }, 400);
      }
    } else {
      var url = 'index.html#catalog?category=' + category;
      if (item) url += '&item=' + encodeURIComponent(item);
      window.location.href = url;
    }
  }

  // Deep-link processing on load
  function checkDeepLink() {
    var hash = window.location.hash;
    var params = new URLSearchParams(window.location.search);
    var category = params.get('category');
    var item = params.get('item');
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
              clearInterval(filterTimer);
              
              if (item) {
                setTimeout(function() {
                  var card = Array.from(document.querySelectorAll('h3')).find(function(el) {
                    return el.textContent.trim() === item;
                  });
                  if (card) {
                    card = card.closest('[class*="rounded"]');
                    if (card) {
                      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      card.style.transition = 'box-shadow 0.5s ease-in-out';
                      card.style.boxShadow = '0 0 25px #f97316';
                      setTimeout(function() {
                        card.style.boxShadow = '';
                      }, 2000);
                    }
                  }
                }, 150);
              } else {
                filterBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }
            if (filterTries > 30) clearInterval(filterTimer);
          }, 150);
        }
        if (tries > 40) clearInterval(timer);
      }, 150);
    }
  }

  // Initialize
  function init() {
    initMobileNav();
    initDesktopNav();
    checkDeepLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Fallback observer in case React re-renders body later
  var obs = new MutationObserver(function() {
    initMobileNav();
    initDesktopNav();
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });
})();
