document.documentElement.classList.add('js-ready');

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
    var lastScroll = 0;
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = window.scrollY;
    });
  }

  var reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (reveals.length > 0) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(function(el) { observer.observe(el); });
  }

  var counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0) {
    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function(el) { counterObserver.observe(el); });
  }

  function animateCounter(el) {
    var target = el.getAttribute('data-count');
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var num = parseFloat(target);
    var duration = 2000;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = start + (num - start) * eased;

      if (Number.isInteger(num)) {
        el.textContent = prefix + Math.round(current).toLocaleString() + suffix;
      } else {
        el.textContent = prefix + current.toFixed(1) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  var canvas = document.getElementById('hero-canvas');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleCount = 50;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (var i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(function(p) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(64, 224, 208, ' + p.opacity + ')';
        ctx.fill();
      });

      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(64, 224, 208, ' + (0.08 * (1 - dist / 120)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(drawParticles);
    }
    drawParticles();
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
