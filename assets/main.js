// mobile menu
const burger = document.getElementById('burgerBtn');
const panel = document.getElementById('mobilePanel');
if (burger && panel) {
  burger.addEventListener('click', () => panel.classList.toggle('open'));
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => panel.classList.remove('open')));
    }

    // scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
          entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
                    });
                      }, { threshold: 0.12 });
                        revealEls.forEach(el => io.observe(el));
                        } else {
                          revealEls.forEach(el => el.classList.add('in'));
                          }
                          
