// Small enhancements; the site works without JavaScript.
(function () {
  // Mobile menu.
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      btn.textContent = open ? 'Menu' : 'Close';
      nav.classList.toggle('is-open', !open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        btn.click();
        btn.focus();
      }
    });
  }

  // Local time in Kathmandu.
  var clocks = document.querySelectorAll('[data-clock]');
  if (clocks.length && window.Intl) {
    var fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kathmandu', hour: '2-digit', minute: '2-digit' });
    var tick = function () {
      var now = fmt.format(new Date());
      clocks.forEach(function (el) { el.textContent = now; });
    };
    tick();
    setInterval(tick, 30000);
  }

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Home: search pipeline as tabs (arrow keys, Home and End move between them).
  // Earlier stages show as done and the track fills to the open stage. With
  // data-autoplay it advances on its own once in view, until the visitor hovers
  // or picks a stage.
  var stillMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-stages]').forEach(function (box) {
    var tabs = Array.prototype.slice.call(box.querySelectorAll('[role="tab"]'));
    var timer = null;
    var current = 0;
    var select = function (tab, focus) {
      current = tabs.indexOf(tab);
      tabs.forEach(function (t, k) {
        var on = k === current;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        t.classList.toggle('is-done', k < current);
        document.getElementById(t.getAttribute('aria-controls')).classList.toggle('is-active', on);
      });
      box.style.setProperty('--progress', tabs.length > 1 ? current / (tabs.length - 1) : 0);
      if (focus) tab.focus();
    };
    var stop = function () { clearInterval(timer); timer = null; box.removeAttribute('data-autoplay'); };
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { stop(); select(tab); });
      tab.addEventListener('keydown', function (e) {
        var next = { ArrowRight: tabs[(i + 1) % tabs.length], ArrowLeft: tabs[(i - 1 + tabs.length) % tabs.length],
                     Home: tabs[0], End: tabs[tabs.length - 1] }[e.key];
        if (next) {
          e.preventDefault();
          stop();
          select(next, true);
        }
      });
    });
    select(tabs[0]);

    if (stillMotion || !box.hasAttribute('data-autoplay') || !('IntersectionObserver' in window)) return;
    box.addEventListener('mouseenter', stop);
    box.addEventListener('focusin', stop);
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!box.hasAttribute('data-autoplay')) return;
        if (entry.isIntersecting && !timer) {
          timer = setInterval(function () { select(tabs[(current + 1) % tabs.length]); }, 5000);
        } else if (!entry.isIntersecting && timer) {
          clearInterval(timer);
          timer = null;
        }
      });
    }, { threshold: 0.35 }).observe(box);
  });

  // Home hero: entity orbit. Nodes light up on hover or focus and cycle on
  // their own while idle; the orbit tilts slightly with the pointer.
  var calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-orbit]').forEach(function (orbit) {
    var nodes = Array.prototype.slice.call(orbit.querySelectorAll('.orbit-node'));
    var edges = orbit.querySelectorAll('.orbit-edge');
    var caption = document.querySelector('[data-orbit-caption]');
    var title = caption && caption.querySelector('.orbit-caption-title');
    var text = caption && caption.querySelector('.orbit-caption-text');
    var initial = caption ? [title.textContent, text.textContent] : null;
    var current = -1;
    var timer = null;

    var show = function (i) {
      current = i;
      nodes.forEach(function (n, k) { n.classList.toggle('is-active', k === i); });
      Array.prototype.forEach.call(edges, function (e, k) { e.classList.toggle('is-active', k === i); });
      if (!caption) return;
      title.textContent = i > -1 ? nodes[i].textContent : initial[0];
      text.textContent = i > -1 ? nodes[i].getAttribute('data-desc') : initial[1];
    };
    var cycle = function () {
      if (calm || timer) return;
      timer = setInterval(function () { show((current + 1) % nodes.length); }, 2800);
    };
    var stop = function () { clearInterval(timer); timer = null; };

    nodes.forEach(function (n, i) {
      n.addEventListener('mouseenter', function () { stop(); show(i); });
      n.addEventListener('focus', function () { stop(); show(i); });
      n.addEventListener('blur', function () { show(-1); cycle(); });
    });
    orbit.addEventListener('mouseleave', function () { show(-1); cycle(); });
    cycle();

    if (!calm && matchMedia('(pointer: fine)').matches) {
      var wrap = orbit.parentElement;
      wrap.addEventListener('pointermove', function (e) {
        var r = wrap.getBoundingClientRect();
        orbit.style.setProperty('--ry', (((e.clientX - r.left) / r.width - 0.5) * 10).toFixed(2) + 'deg');
        orbit.style.setProperty('--rx', ((0.5 - (e.clientY - r.top) / r.height) * 10).toFixed(2) + 'deg');
      });
      wrap.addEventListener('pointerleave', function () {
        orbit.style.setProperty('--rx', '0deg');
        orbit.style.setProperty('--ry', '0deg');
      });
    }
  });

  // "Hire me" pop-up form. Trigger links keep their normal href as the no-JS
  // fallback. With no endpoint configured, submit opens the visitor's email app.
  var dialog = document.getElementById('lead-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    var form = dialog.querySelector('form');
    var status = dialog.querySelector('.lead-status');
    document.querySelectorAll('[data-open-form]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        status.textContent = '';
        dialog.showModal();
        form.querySelector('[name="name"]').focus();
      });
    });
    dialog.querySelector('[data-close-form]').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      if (data.get('_gotcha')) return;
      var to = form.getAttribute('data-email');
      var endpoint = form.getAttribute('data-endpoint');
      if (endpoint) {
        status.textContent = 'Sending…';
        fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: data })
          .then(function (r) {
            if (!r.ok) throw new Error(r.status);
            form.reset();
            status.textContent = 'Thanks, your request is on its way. I’ll reply personally.';
          })
          .catch(function () { status.textContent = 'Sending failed. Please email me at ' + to + '.'; });
        return;
      }
      var body = ['Name: ' + data.get('name'), 'Email: ' + data.get('email'), 'Website: ' + (data.get('website') || '-'), '', data.get('message')].join('\n');
      location.href = 'mailto:' + to + '?subject=' + encodeURIComponent('Website review request from ' + data.get('name')) +
        '&body=' + encodeURIComponent(body);
      status.textContent = 'Your email app should open with your request ready to send.';
    });
  }

  // Home hero: search results simulator. A tab picks the search type; its query
  // types into the bar and only the result blocks for that type are shown.
  document.querySelectorAll('[data-serp]').forEach(function (serp) {
    var tabs = Array.prototype.slice.call(serp.querySelectorAll('[role="tab"]'));
    var query = serp.querySelector('[data-serp-query]');
    var blocks = serp.querySelectorAll('[data-for]');
    var swaps = serp.querySelectorAll('[data-local]');
    var typing = null;
    var timer = null;
    var current = 0;
    var show = function (i, focus) {
      current = i;
      var tab = tabs[i];
      var key = tab.getAttribute('data-scenario');
      tabs.forEach(function (t, k) {
        t.setAttribute('aria-selected', String(k === i));
        t.tabIndex = k === i ? 0 : -1;
      });
      Array.prototype.forEach.call(blocks, function (b) {
        b.hidden = b.getAttribute('data-for').split(' ').indexOf(key) === -1;
      });
      Array.prototype.forEach.call(swaps, function (s) { s.textContent = s.getAttribute('data-' + key); });
      serp.classList.remove('is-run');
      void serp.offsetWidth;
      serp.classList.add('is-run');
      var text = tab.getAttribute('data-query');
      clearInterval(typing);
      if (stillMotion) {
        query.textContent = text;
      } else {
        var n = 0;
        query.textContent = '';
        typing = setInterval(function () {
          n += 1;
          query.textContent = text.slice(0, n);
          if (n >= text.length) clearInterval(typing);
        }, 45);
      }
      if (focus) tab.focus();
    };
    var stop = function () { clearInterval(timer); timer = null; serp.removeAttribute('data-autoplay'); };
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { stop(); show(i); });
      tab.addEventListener('keydown', function (e) {
        var next = { ArrowRight: (i + 1) % tabs.length, ArrowLeft: (i - 1 + tabs.length) % tabs.length, Home: 0, End: tabs.length - 1 }[e.key];
        if (next !== undefined) { e.preventDefault(); stop(); show(next, true); }
      });
    });
    show(0);

    if (stillMotion || !('IntersectionObserver' in window)) return;
    serp.setAttribute('data-autoplay', '');
    serp.addEventListener('mouseenter', stop);
    serp.addEventListener('focusin', stop);
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!serp.hasAttribute('data-autoplay')) return;
        if (entry.isIntersecting && !timer) {
          timer = setInterval(function () { show((current + 1) % tabs.length); }, 6500);
        } else if (!entry.isIntersecting && timer) {
          clearInterval(timer);
          timer = null;
        }
      });
    }, { threshold: 0.35 }).observe(serp);
  });

  // Stats bar: numbers count up once when they scroll into view. The final
  // value is already in the HTML, so nothing changes without JS.
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && !stillMotion && 'IntersectionObserver' in window) {
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        countIO.unobserve(entry.target);
        var el = entry.target;
        var to = +el.getAttribute('data-count');
        var from = +(el.getAttribute('data-from') || 0);
        var suffix = el.getAttribute('data-suffix') || '';
        var start = null;
        var step = function (t) {
          if (start === null) start = t;
          var k = Math.min((t - start) / 1200, 1);
          el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3))) + suffix;
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { countIO.observe(el); });
  }

  // Fade sections in as they scroll into view.
  var targets = document.querySelectorAll('main > .frame:not(:first-child) .body');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el) {
      el.setAttribute('data-reveal', '');
      io.observe(el);
    });
  }

  // Blog tools. Each one starts from a static example in the HTML, so the page
  // still reads correctly without JavaScript.
  var escapeXml = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  };
  var field = function (form, name) {
    var el = form.elements.namedItem(name);
    return el ? el.value.trim() : '';
  };

  // Entity triple builder: each fact becomes a list row, a sentence and a branch of the graph.
  document.querySelectorAll('[data-tool="triple"]').forEach(function (tool) {
    var form = tool.querySelector('form');
    var svg = tool.querySelector('.triple-graph');
    var list = tool.querySelector('.triple-list');
    var sentence = tool.querySelector('.triple-sentence');
    var entity = 'Nepal';
    var facts = [['capital', 'Kathmandu'], ['highest point', 'Mount Everest'], ['currency', 'Nepalese rupee']];
    var clip = function (s, n) { return s.length > n ? s.slice(0, n - 1) + '…' : s; };
    var render = function () {
      var cx = 320, cy = 140, rx = 215, ry = 100, n = facts.length, out = '';
      var nodes = facts.map(function (f, k) {
        var a = (-90 + k * 360 / n) * Math.PI / 180;
        var x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a);
        // Edge label halfway between the circle's edge and the value, not on the circle.
        return { x: x, y: y, t: 0.5 + 23 / Math.hypot(x - cx, y - cy), attr: clip(f[0], 22), val: clip(f[1], 20) };
      });
      nodes.forEach(function (p) {
        out += '<line class="tg-edge" x1="' + cx + '" y1="' + cy + '" x2="' + p.x.toFixed(1) + '" y2="' + p.y.toFixed(1) + '"/>';
      });
      nodes.forEach(function (p) {
        var w = p.val.length * 7.2 + 26;
        out += '<g class="tg-node"><rect x="' + (p.x - w / 2).toFixed(1) + '" y="' + (p.y - 15).toFixed(1) + '" width="' + w.toFixed(1) +
          '" height="30" rx="15"/><text x="' + p.x.toFixed(1) + '" y="' + p.y.toFixed(1) + '">' + escapeXml(p.val) + '</text></g>' +
          '<text class="tg-label" x="' + (cx + (p.x - cx) * p.t).toFixed(1) + '" y="' + (cy + (p.y - cy) * p.t).toFixed(1) + '">' + escapeXml(p.attr) + '</text>';
      });
      out += '<g class="tg-center"><circle cx="' + cx + '" cy="' + cy + '" r="46"/><text x="' + cx + '" y="' + cy + '">' + escapeXml(clip(entity, 14)) + '</text></g>';
      svg.innerHTML = out;
      svg.setAttribute('aria-label', 'Graph of ' + entity + (facts.length ? ': ' + facts.map(function (f) { return f[0] + ' ' + f[1]; }).join('; ') : ''));
      list.innerHTML = facts.map(function (f) {
        return '<li><span class="t-e">' + escapeXml(entity) + '</span><span class="t-a">' + escapeXml(f[0]) + '</span><span class="t-v">' + escapeXml(f[1]) + '</span></li>';
      }).join('');
      var last = facts[facts.length - 1];
      sentence.textContent = last ? 'The ' + last[0] + ' of ' + entity + ' is ' + last[1] + '.' : 'Add a fact to start the graph.';
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = field(form, 'entity'), attr = field(form, 'attribute'), val = field(form, 'val');
      if (!name || !attr || !val) return;
      if (name !== entity) { entity = name; facts = []; }
      facts.push([attr, val]);
      if (facts.length > 6) facts.shift();
      render();
      form.elements.namedItem('attribute').value = '';
      form.elements.namedItem('val').value = '';
      form.elements.namedItem('attribute').focus();
    });
    form.querySelector('[data-reset]').addEventListener('click', function () {
      facts = [];
      entity = field(form, 'entity') || entity;
      render();
    });
  });

  // Entity schema generator: the form becomes JSON-LD for the entity home.
  document.querySelectorAll('[data-tool="schema"]').forEach(function (tool) {
    var form = tool.querySelector('form');
    var out = tool.querySelector('[data-schema-out]');
    var copy = tool.querySelector('[data-copy]');
    var build = function () {
      var type = field(form, 'type');
      var url = field(form, 'url');
      var data = { '@context': 'https://schema.org', '@type': type };
      if (url) data['@id'] = url.replace(/#.*$/, '') + '#' + type.toLowerCase();
      if (field(form, 'name')) data.name = field(form, 'name');
      if (url) data.url = url;
      if (type === 'Person') {
        if (field(form, 'jobTitle')) data.jobTitle = field(form, 'jobTitle');
        if (field(form, 'image')) data.image = field(form, 'image');
      } else if (field(form, 'logo')) {
        data.logo = field(form, 'logo');
      }
      if (type === 'LocalBusiness') {
        if (field(form, 'telephone')) data.telephone = field(form, 'telephone');
        var address = { '@type': 'PostalAddress' };
        if (field(form, 'street')) address.streetAddress = field(form, 'street');
        if (field(form, 'city')) address.addressLocality = field(form, 'city');
        if (field(form, 'country')) address.addressCountry = field(form, 'country').toUpperCase();
        if (Object.keys(address).length > 1) data.address = address;
      }
      if (field(form, 'description')) data.description = field(form, 'description');
      var same = field(form, 'sameAs').split(/\s+/).filter(function (s) { return /^https?:\/\/\S+$/.test(s); });
      if (same.length) data.sameAs = same;
      out.textContent = '<script type="application/ld+json">\n' + JSON.stringify(data, null, 2).replace(/<\//g, '<\\/') + '\n</' + 'script>';
      tool.querySelectorAll('[data-for]').forEach(function (el) { el.hidden = el.getAttribute('data-for').split(' ').indexOf(type) === -1; });
    };
    form.addEventListener('input', build);
    form.addEventListener('change', build);
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    copy.addEventListener('click', function () {
      var done = function () {
        copy.textContent = 'Copied';
        setTimeout(function () { copy.textContent = 'Copy code'; }, 1600);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(out.textContent).then(done, function () {});
      } else {
        var range = document.createRange();
        range.selectNodeContents(out);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        try { if (document.execCommand('copy')) done(); } catch (err) { /* the code stays selected for manual copy */ }
      }
    });
    build();
  });

  // Entity recognition checker: one name and one URL fill in the check links.
  document.querySelectorAll('[data-tool="check"]').forEach(function (tool) {
    var form = tool.querySelector('form');
    var links = tool.querySelectorAll('[data-check]');
    var update = function () {
      var q = encodeURIComponent(field(form, 'name'));
      var u = encodeURIComponent(field(form, 'url'));
      var urls = {
        google: q && 'https://www.google.com/search?q=' + q,
        wikidata: q && 'https://www.wikidata.org/w/index.php?search=' + q,
        rich: u && 'https://search.google.com/test/rich-results?url=' + u,
        schema: u && 'https://validator.schema.org/#url=' + u
      };
      Array.prototype.forEach.call(links, function (a) {
        var href = urls[a.getAttribute('data-check')];
        if (href) a.href = href;
      });
    };
    form.addEventListener('input', update);
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    update();
  });
})();
