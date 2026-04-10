document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('mobile-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
  }

  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 25, 41, 0.98)';
      } else {
        header.style.background = 'rgba(10, 25, 41, 0.95)';
      }
    });
  }

  var tabs = document.querySelectorAll('.form-tab');
  var panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var target = tab.getAttribute('data-tab');

      tabs.forEach(function(t) { t.classList.remove('active'); });
      panels.forEach(function(p) { p.classList.remove('active'); p.style.display = 'none'; });

      tab.classList.add('active');
      var panel = document.getElementById(target);
      if (panel) {
        panel.classList.add('active');
        panel.style.display = 'block';
      }
    });
  });

  var stepBtns = document.querySelectorAll('[data-step-next]');
  var stepBackBtns = document.querySelectorAll('[data-step-prev]');
  var steps = document.querySelectorAll('.form-step');
  var dots = document.querySelectorAll('.step-dot');

  function showStep(n) {
    steps.forEach(function(s, i) {
      s.classList.toggle('active', i === n);
      s.style.display = i === n ? 'block' : 'none';
    });
    dots.forEach(function(d, i) {
      d.classList.toggle('active', i === n);
      d.classList.toggle('completed', i < n);
    });
  }

  stepBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var next = parseInt(btn.getAttribute('data-step-next'));
      showStep(next);
      window.scrollTo({ top: document.querySelector('.form-step.active').offsetTop - 100, behavior: 'smooth' });
    });
  });

  stepBackBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var prev = parseInt(btn.getAttribute('data-step-prev'));
      showStep(prev);
    });
  });
});
