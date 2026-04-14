/* =============================================
   WENDY BONGSISI - PORTFOLIO JAVASCRIPT
   File: script.js
   ============================================= */


/* =============================================
   1. PAGE LOADER
   Hides the loading screen after 1.8 seconds
   ============================================= */
setTimeout(function () {
  document.getElementById('loader').classList.add('hidden');
}, 1800);


/* =============================================
   2. MATRIX RAIN ANIMATION (Background Effect)
   ============================================= */
var canvas = document.getElementById('matrix');
var ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

var cols = Math.floor(window.innerWidth / 16);
var drops = [];
for (var i = 0; i < cols; i++) drops[i] = 1;

var chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEF0123456789';

function drawMatrix() {
  ctx.fillStyle = 'rgba(5,13,26,0.04)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00D4FF';
  ctx.font = '14px Share Tech Mono';
  for (var i = 0; i < drops.length; i++) {
    var c = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(c, i * 16, drops[i] * 16);
    if (drops[i] * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 50);


/* =============================================
   3. TYPING TEXT EFFECT (Hero Section)
   Cycles through your job titles automatically
   TO EDIT: Change the roles array below
   ============================================= */
var roles = [
  'Cybersecurity Analyst',
  'Penetration Tester',
  'Software Developer',
  'DevSecOps Engineer',
  'Vulnerability Assessor'
];

var roleIndex = 0;
var charIndex = 0;
var isDeleting = false;
var typedEl = document.getElementById('typed-text');

function type() {
  var current = roles[roleIndex];
  if (!isDeleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 1800); // pause before deleting
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(type, isDeleting ? 60 : 100);
}
type();


/* =============================================
   4. PROJECTS DATA
   TO EDIT YOUR PROJECTS:
   - Change title, desc, techs for each project
   - Replace github URLs with your real GitHub links
   - Replace demo URLs with your live demo links
   - Add more projects by copying a project block
   ============================================= */
var projects = [
  {
    id: 1,
    cat: 'pentest',
    icon: '🔍',
    title: 'Web Application Security Audit',
    desc: 'Comprehensive security audit of a web app using OWASP Top 10 methodology.',
    techs: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Python'],
    github: 'https://github.com/YOUR_USERNAME/web-security-audit', // <-- REPLACE
    demo: '#', // <-- REPLACE with live demo URL or leave as '#'
    details: 'Performed full black-box penetration testing on a sample web application. Identified 12 critical vulnerabilities including SQL Injection, XSS, IDOR, and CSRF. Produced detailed remediation report.',
    features: [
      'SQL Injection discovery & PoC',
      'XSS reflected & stored exploits',
      'IDOR vulnerability chain',
      'CSRF token bypass',
      'Full security report generation'
    ]
  },
  {
    id: 2,
    cat: 'pentest',
    icon: '🌐',
    title: 'Network Vulnerability Assessment',
    desc: 'Full network scan and vulnerability assessment of a simulated enterprise environment.',
    techs: ['Nmap', 'Metasploit', 'Wireshark', 'Kali Linux'],
    github: 'https://github.com/YOUR_USERNAME/network-assessment', // <-- REPLACE
    demo: '#',
    details: 'Conducted comprehensive network vulnerability assessment using industry tools. Mapped the attack surface, enumerated services, and identified exploitable vulnerabilities.',
    features: [
      'Network discovery & port mapping',
      'Service version fingerprinting',
      'CVE exploitation testing',
      'Firewall rule analysis',
      'Executive risk report'
    ]
  },
  {
    id: 3,
    cat: 'pentest',
    icon: '🛡️',
    title: 'Risk Assessment Case Study',
    desc: 'Complete risk assessment framework for a fintech startup, scoring threats by CVSS.',
    techs: ['CVSS', 'Risk Matrix', 'OWASP', 'Reporting'],
    github: 'https://github.com/YOUR_USERNAME/risk-assessment', // <-- REPLACE
    demo: '#',
    details: 'Developed a full risk assessment framework covering asset inventory, threat modeling, vulnerability scoring, and prioritized remediation roadmap.',
    features: [
      'Asset inventory & classification',
      'Threat modeling (STRIDE)',
      'CVSS v3 scoring',
      'Remediation prioritization',
      'Compliance gap analysis'
    ]
  },
  {
    id: 4,
    cat: 'dev',
    icon: '📱',
    title: 'Emergency Alert Android App',
    desc: 'Real-time emergency alert app with GPS location sharing and SOS messaging.',
    techs: ['Kotlin', 'Android', 'Firebase', 'Maps API'],
    github: 'https://github.com/YOUR_USERNAME/emergency-alert-app', // <-- REPLACE
    demo: '#',
    details: 'Built a life-saving emergency alert Android application featuring one-touch SOS, live GPS tracking, contact notification, and local emergency service integration.',
    features: [
      'One-touch SOS button',
      'Real-time GPS broadcast',
      'SMS & push notification alerts',
      'Contact list management',
      'Offline mode fallback'
    ]
  },
  {
    id: 5,
    cat: 'dev',
    icon: '💻',
    title: 'Portfolio Website',
    desc: 'This very portfolio — built with pure HTML, CSS, and JavaScript. No frameworks.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    github: 'https://github.com/YOUR_USERNAME/portfolio', // <-- REPLACE
    demo: '#',
    details: 'Designed and built this premium portfolio from scratch with custom animations, matrix effect, typing text, dark/light mode, and full mobile responsiveness.',
    features: [
      'Matrix canvas animation',
      'Typed text effect',
      'Scroll reveal animations',
      'Dark/light mode toggle',
      'Full mobile responsive'
    ]
  },
  {
    id: 6,
    cat: 'dev',
    icon: '🧮',
    title: 'Desktop GUI Calculator',
    desc: 'Feature-rich calculator desktop application with scientific mode.',
    techs: ['Java', 'Swing/JavaFX', 'OOP', 'UI Design'],
    github: 'https://github.com/YOUR_USERNAME/java-calculator', // <-- REPLACE
    demo: '#',
    details: 'Built a full-featured desktop calculator application in Java with both standard and scientific modes, history log, and keyboard support.',
    features: [
      'Standard & scientific modes',
      'Calculation history log',
      'Keyboard shortcuts',
      'Expression parser',
      'Custom Java Swing UI'
    ]
  },
  {
    id: 7,
    cat: 'devops',
    icon: '⚙️',
    title: 'Secure CI/CD Pipeline',
    desc: 'End-to-end secure CI/CD pipeline with SAST, DAST, and Docker security scanning.',
    techs: ['GitHub Actions', 'Docker', 'SonarQube', 'SAST'],
    github: 'https://github.com/YOUR_USERNAME/secure-cicd', // <-- REPLACE
    demo: '#',
    details: 'Built a production-grade CI/CD pipeline integrating security at every stage: static analysis, dependency scanning, Docker image hardening, and automated security gates.',
    features: [
      'SAST with SonarQube',
      'Dependency vulnerability scan',
      'Docker image security scan',
      'Automated security gates',
      'Deployment monitoring alerts'
    ]
  },
  {
    id: 8,
    cat: 'devops',
    icon: '🐳',
    title: 'Docker Security Configuration',
    desc: 'Hardened Docker configurations for secure containerized application deployment.',
    techs: ['Docker', 'Linux', 'CIS Benchmarks', 'Secrets Mgmt'],
    github: 'https://github.com/YOUR_USERNAME/docker-security', // <-- REPLACE
    demo: '#',
    details: 'Implemented CIS Docker Benchmark recommendations across a multi-container setup. Configured non-root containers, read-only filesystems, network segmentation, and secrets management.',
    features: [
      'CIS Benchmark compliance',
      'Non-root container execution',
      'Read-only filesystem mounts',
      'Network segmentation',
      'Secrets management integration'
    ]
  },
  {
    id: 9,
    cat: 'devops',
    icon: '🔄',
    title: 'GitHub Actions Security Workflow',
    desc: 'Automated security workflow triggered on every push — zero vulnerable code ships.',
    techs: ['GitHub Actions', 'YAML', 'Trivy', 'Snyk'],
    github: 'https://github.com/YOUR_USERNAME/security-workflow', // <-- REPLACE
    demo: '#',
    details: 'Designed automated GitHub Actions workflows that run security checks on every commit, blocking merges if critical vulnerabilities are detected.',
    features: [
      'Per-commit security scanning',
      'PR blocking on critical CVEs',
      'Trivy container scanning',
      'Snyk dependency analysis',
      'Slack security alerts'
    ]
  }
];


/* =============================================
   5. PROJECT RENDERING & FILTERING
   ============================================= */
function getCatLabel(cat) {
  if (cat === 'pentest') return '// PENETRATION TESTING';
  if (cat === 'dev') return '// DEVELOPMENT';
  return '// DEVSECOPS';
}

function renderProjects(filter) {
  var grid = document.getElementById('projectsGrid');
  var list = filter === 'all' ? projects : projects.filter(function (p) {
    return p.cat === filter;
  });

  grid.innerHTML = list.map(function (p) {
    var techs = p.techs.map(function (t) {
      return '<span class="proj-tech">' + t + '</span>';
    }).join('');

    return '<div class="proj-card" onclick="openModal(' + p.id + ')">'
      + '<div class="proj-arrow">↗</div>'
      + '<div class="proj-top">' + p.icon + '</div>'
      + '<div class="proj-body">'
      + '<div class="proj-cat">' + getCatLabel(p.cat) + '</div>'
      + '<div class="proj-title">' + p.title + '</div>'
      + '<div class="proj-desc">' + p.desc + '</div>'
      + '<div class="proj-techs">' + techs + '</div>'
      + '<div class="proj-links">'
      + '<a class="proj-link" href="' + p.github + '" target="_blank" onclick="event.stopPropagation()">GitHub</a>'
      + '<a class="proj-link" href="' + p.demo + '" target="_blank" onclick="event.stopPropagation()">Demo</a>'
      + '</div>'
      + '</div>'
      + '</div>';
  }).join('');
}

function filterProjects(cat, btn) {
  document.querySelectorAll('.proj-tab').forEach(function (t) {
    t.classList.remove('active');
  });
  btn.classList.add('active');
  renderProjects(cat);
}

// Render all projects on page load
renderProjects('all');


/* =============================================
   6. PROJECT MODAL POPUP
   Click a project card to open the detail modal
   ============================================= */
function openModal(id) {
  var p = projects.find(function (x) { return x.id === id; });
  if (!p) return;

  var features = p.features.map(function (f) {
    return '<li>' + f + '</li>';
  }).join('');

  var techs = p.techs.map(function (t) {
    return '<span class="proj-tech">' + t + '</span>';
  }).join('');

  document.getElementById('modalContent').innerHTML =
    '<div class="modal-cat">' + getCatLabel(p.cat) + '</div>'
    + '<div class="modal-title">' + p.icon + ' ' + p.title + '</div>'
    + '<div class="modal-desc">' + p.details + '</div>'
    + '<div class="modal-section-title">Key Features</div>'
    + '<ul class="modal-features">' + features + '</ul>'
    + '<div class="modal-section-title">Technologies</div>'
    + '<div class="proj-techs" style="margin-bottom:1.5rem;">' + techs + '</div>'
    + '<div style="display:flex;gap:1rem;">'
    + '<a class="proj-link" href="' + p.github + '" target="_blank" style="font-size:0.85rem;padding:10px 20px;">View on GitHub</a>'
    + '<a class="proj-link" href="' + p.demo + '" target="_blank" style="font-size:0.85rem;padding:10px 20px;">Live Demo</a>'
    + '</div>';

  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

// Close modal by clicking outside the box
document.getElementById('modal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});


/* =============================================
   7. SKILL BAR ANIMATION
   Bars animate when scrolled into view
   ============================================= */
function animateBars() {
  document.querySelectorAll('.skill-bar').forEach(function (bar) {
    var rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && !bar.dataset.animated) {
      bar.dataset.animated = '1';
      setTimeout(function () {
        bar.style.width = bar.dataset.width + '%';
      }, 100);
    }
  });
}


/* =============================================
   8. COUNTER ANIMATION
   Numbers count up when scrolled into view
   ============================================= */
function animateCounters() {
  document.querySelectorAll('.counter-animate').forEach(function (el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && !el.dataset.done) {
      el.dataset.done = '1';
      var target = parseInt(el.dataset.target);
      var count = 0;
      var step = Math.ceil(target / 30);
      var timer = setInterval(function () {
        count = Math.min(count + step, target);
        el.textContent = count + (target === 100 ? '%' : '+');
        if (count >= target) clearInterval(timer);
      }, 40);
    }
  });
}


/* =============================================
   9. SCROLL REVEAL ANIMATION
   Elements fade in from below as you scroll
   ============================================= */
function revealElements() {
  document.querySelectorAll('.reveal').forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add('active');
    }
  });
}


/* =============================================
   10. BACK TO TOP BUTTON
   ============================================= */
document.getElementById('backTop').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* =============================================
   11. SCROLL EVENT LISTENER
   Triggers animations on scroll
   ============================================= */
window.addEventListener('scroll', function () {
  revealElements();
  animateBars();
  animateCounters();

  // Show/hide back-to-top button
  var backTop = document.getElementById('backTop');
  if (window.scrollY > 400) {
    backTop.classList.add('visible');
  } else {
    backTop.classList.remove('visible');
  }
});

// Run once on page load too
revealElements();
animateBars();
animateCounters();


/* =============================================
   12. DARK / LIGHT MODE TOGGLE
   ============================================= */
var isDark = true;
document.getElementById('themeBtn').addEventListener('click', function () {
  isDark = !isDark;
  document.body.classList.toggle('light-mode', !isDark);
  this.textContent = isDark ? '☀ LIGHT' : '☾ DARK';
});


/* =============================================
   13. HAMBURGER MENU (Mobile)
   ============================================= */
document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('open');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('navLinks').classList.remove('open');
  });
});


/* =============================================
   14. CONTACT FORM SUBMISSION
   Basic validation + success message
   NOTE: To make this actually send emails,
   connect it to Formspree, EmailJS, or Netlify Forms.
   See the README section in index.html for details.
   ============================================= */
function submitForm() {
  var name = document.getElementById('fname').value.trim();
  var email = document.getElementById('femail').value.trim();
  var message = document.getElementById('fmessage').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in your name, email, and message.');
    return;
  }

  // Show success message
  document.getElementById('formContent').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}
