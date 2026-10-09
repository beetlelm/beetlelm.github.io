/* beetle — shared site behaviour: mobile nav, stat count-up, Hub filter */
(function () {
  // -- mobile nav toggle --
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }

  // -- animated count-up for headline stats --
  function animate(el) {
    var target = +el.dataset.count, suf = el.dataset.suffix || '';
    var dur = 1300, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('en-US') + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.num[data-count]').forEach(function (el) { io.observe(el); });
  }

  // -- Hugging Face catalogue filter (models page) --
  var input = document.getElementById('hf-search');
  if (input) {
    var orgs = Array.prototype.slice.call(document.querySelectorAll('.hf-org'));
    var noResult = document.getElementById('hf-noresult');
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      var anyOrg = false;
      orgs.forEach(function (org) {
        var orgName = (org.querySelector('.hf-org-title h3') || {}).textContent || '';
        var orgMatch = orgName.toLowerCase().indexOf(q) !== -1;
        var anyGroup = false;
        org.querySelectorAll('.hf-group').forEach(function (group) {
          var anyChip = false;
          group.querySelectorAll('.hf-chip').forEach(function (chip) {
            var show = !q || orgMatch || chip.textContent.toLowerCase().indexOf(q) !== -1;
            chip.style.display = show ? '' : 'none';
            if (show) anyChip = true;
          });
          group.style.display = anyChip ? '' : 'none';
          if (anyChip) anyGroup = true;
        });
        org.style.display = anyGroup ? '' : 'none';
        if (anyGroup) anyOrg = true;
      });
      if (noResult) noResult.style.display = anyOrg ? 'none' : 'block';
    });
  }
})();
