/* Sussi Loom — shared layout, fabric drawings, launch wishlist */
(function () {
  const PHONE = "+92 317 7907812";
  const WA = "923177907812";
  const P = window.SL_PRODUCTS || [];
  const byId = (id) => P.find((p) => p.id === id);
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  let uid = 0;

  /* ---------- fabric drawing ---------- */
  function stripes(weave, scale, w, h) {
    const total = weave.reduce((a, s) => a + s[1], 0) * scale;
    let x = -total, out = "";
    while (x < w + total) {
      for (const [c, sw] of weave) {
        const ww = sw * scale;
        out += `<rect x="${x.toFixed(2)}" y="-60" width="${(ww + 0.4).toFixed(2)}" height="${h + 120}" fill="${c}"/>`;
        x += ww;
      }
    }
    return out;
  }

  // stripes, plus the same order run crosswise for chaarkhana (check) pieces
  function cloth(p, scale, w, h) {
    let out = stripes(p.weave, scale, w, h);
    if (p.check) {
      const L = Math.max(w, h) + 200;
      out += `<g opacity=".5" style="mix-blend-mode:multiply" transform="translate(${w / 2} ${h / 2}) rotate(90) translate(${-L / 2} ${-L / 2})">${stripes(p.weave, scale, L, L)}</g>`;
    }
    return out;
  }

  function swatch(p, view) {
    view = view || p.view || "drape";
    const id = "f" + uid++;
    const W = 300, H = 400;
    const weave = p.weave;
    const base = weave[0][0];
    const texture = `
      <pattern id="${id}w" width="3" height="3" patternUnits="userSpaceOnUse">
        <rect width="3" height="1.2" fill="#fff" opacity=".07"/>
        <rect y="1.5" width="3" height=".6" fill="#000" opacity=".08"/>
        <rect x="1.4" width=".5" height="3" fill="#000" opacity=".05"/>
      </pattern>
      <filter id="${id}n" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="1.4 .35" numOctaves="2" seed="${uid}"/>
        <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .22 0"/>
        <feComposite in2="SourceGraphic" operator="in"/>
      </filter>`;

    if (view === "close") {
      return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${p.name} weave close-up">
        <defs>${texture}
          <pattern id="${id}x" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M0 3h6M3 0v6" stroke="#000" stroke-width=".7" opacity=".14"/>
            <path d="M0 1h6" stroke="#fff" stroke-width=".8" opacity=".12"/>
          </pattern>
          <filter id="${id}d"><feTurbulence baseFrequency=".006 .02" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="5"/></filter>
          <radialGradient id="${id}v" cx=".5" cy=".45" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></radialGradient>
        </defs>
        <g filter="url(#${id}d)">${cloth(p, 5.2, W, H)}</g>
        <rect width="${W}" height="${H}" fill="url(#${id}x)"/>
        <rect width="${W}" height="${H}" fill="${base}" filter="url(#${id}n)"/>
        <rect width="${W}" height="${H}" fill="url(#${id}v)"/>
      </svg>`;
    }

    if (view === "folded") {
      const fold = (y, s, sh) => `
        <g transform="translate(40 ${y})">
          <rect x="4" y="10" width="220" height="${s}" fill="#000" opacity=".12" filter="url(#${id}b)"/>
          <svg width="220" height="${s}" overflow="hidden">${cloth(p, 1.25, 220, s)}<rect width="220" height="${s}" fill="url(#${id}w)"/><rect width="220" height="${s}" fill="url(#${id}fg)"/></svg>
          <rect width="220" height="${s}" fill="none" stroke="#000" stroke-opacity=".08"/>
          <rect y="${s - 6}" width="220" height="6" fill="#000" opacity="${sh}"/>
        </g>`;
      return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${p.name} folded">
        <defs>${texture}
          <filter id="${id}b"><feGaussianBlur stdDeviation="6"/></filter>
          <linearGradient id="${id}fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".18"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient>
          <linearGradient id="${id}bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#efe5d6"/><stop offset="1" stop-color="#e2d4bf"/></linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#${id}bg)"/>
        <path d="M0 300 Q150 285 300 300 V400 H0Z" fill="#d9c8ae" opacity=".6"/>
        ${fold(250, 46, ".1")}${fold(196, 52, ".12")}${fold(138, 56, ".14")}
        <g transform="translate(150 140)"><rect x="-26" y="-4" width="52" height="64" fill="#f6efe3" opacity=".95"/><text x="0" y="22" text-anchor="middle" font-family="Cormorant Garamond,serif" font-size="13" fill="#5b3d22">S&amp;L</text><line x1="-14" x2="14" y1="32" y2="32" stroke="#a77a45" stroke-width=".6"/><text x="0" y="46" text-anchor="middle" font-family="Jost,sans-serif" font-size="5" letter-spacing="1.5" fill="#7a6656">HANDLOOM</text></g>
      </svg>`;
    }

    if (view === "flat") {
      let tassels = "";
      for (let x = 6; x < W; x += 9) tassels += `<path d="M${x} 352 q${(x % 3) - 1} 14 ${(x % 5) - 2} 30" stroke="${weave[(x / 9 | 0) % weave.length][0]}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
      return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${p.name} flat lay">
        <defs>${texture}<linearGradient id="${id}s" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".12"/><stop offset=".25" stop-color="#fff" stop-opacity=".08"/><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".14"/></linearGradient></defs>
        <rect width="${W}" height="${H}" fill="#eadfcd"/>
        <svg y="0" width="${W}" height="352" overflow="hidden">${cloth(p, 1.6, W, 352)}<rect width="${W}" height="352" fill="url(#${id}w)"/><rect width="${W}" height="352" fill="${base}" filter="url(#${id}n)"/><rect width="${W}" height="352" fill="url(#${id}s)"/></svg>
        <rect y="340" width="${W}" height="12" fill="#000" opacity=".12"/>
        ${tassels}
      </svg>`;
    }

    if (view === "kurta") {
      const vest = /waistcoat/i.test(p.sub);
      const body = vest
        ? "M112 62 Q150 132 188 62 L224 74 Q214 112 228 134 L230 318 Q150 330 70 318 L72 134 Q86 112 76 74 Z"
        : "M120 60 Q150 76 180 60 L232 76 L284 186 L258 198 L222 126 L224 356 Q150 368 76 356 L78 126 L42 198 L16 186 L68 76 Z";
      const trim = vest
        ? `<path d="M150 122 V318" stroke="#000" stroke-opacity=".28" stroke-width="1.4"/>${[150, 180, 210, 240, 270].map((y) => `<circle cx="154" cy="${y}" r="3.4" fill="${weave[weave.length - 1][0]}" stroke="#000" stroke-opacity=".3"/>`).join("")}
           <path d="M88 220 h30 M182 220 h30" stroke="#000" stroke-opacity=".3" stroke-width="1.2"/>`
        : `<path d="M120 60 Q150 82 180 60" stroke="#000" stroke-opacity=".35" stroke-width="2" fill="none"/>
           <path d="M150 74 V138" stroke="#000" stroke-opacity=".28" stroke-width="1.4"/>
           ${[92, 108, 124].map((y) => `<circle cx="150" cy="${y}" r="2.8" fill="#f4ead8" stroke="#000" stroke-opacity=".25"/>`).join("")}
           <path d="M80 318 L78 356 M220 318 L222 356" stroke="#000" stroke-opacity=".25"/>`;
      return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${p.name} ${p.sub}">
        <defs>${texture}
          <clipPath id="${id}c"><path d="${body}"/></clipPath>
          <filter id="${id}b"><feGaussianBlur stdDeviation="8"/></filter>
          <linearGradient id="${id}s" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".22"/><stop offset=".3" stop-color="#fff" stop-opacity=".1"/><stop offset=".55" stop-color="#000" stop-opacity=".04"/><stop offset=".75" stop-color="#fff" stop-opacity=".08"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient>
          <linearGradient id="${id}bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1e8da"/><stop offset="1" stop-color="#e2d4bf"/></linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#${id}bg)"/>
        <path d="M150 50 V30 q0-10 9-10 q9 0 9 9" stroke="#8a6a48" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <path d="M150 50 L${vest ? "104 70" : "86 72"} M150 50 L${vest ? "196 70" : "214 72"}" stroke="#8a6a48" stroke-width="3" stroke-linecap="round"/>
        <path d="${body}" fill="#000" opacity=".22" transform="translate(6 12)" filter="url(#${id}b)"/>
        <g clip-path="url(#${id}c)">${cloth(p, 1.5, W, H)}
          <rect width="${W}" height="${H}" fill="url(#${id}w)"/><rect width="${W}" height="${H}" fill="${base}" filter="url(#${id}n)"/><rect width="${W}" height="${H}" fill="url(#${id}s)"/></g>
        ${trim}
      </svg>`;
    }

    if (view === "cushion") {
      const pillow = "M0 0 Q90 12 180 0 Q170 90 180 180 Q90 168 0 180 Q10 90 0 0Z";
      const one = (tx, ty, rot, sc, k) => `
        <g transform="translate(${tx} ${ty}) rotate(${rot}) scale(${sc})">
          <path d="${pillow}" fill="#000" opacity=".22" transform="translate(6 14)" filter="url(#${id}b)"/>
          <clipPath id="${id}c${k}"><path d="${pillow}"/></clipPath>
          <g clip-path="url(#${id}c${k})">${cloth(p, 1.4, 180, 180)}<rect width="180" height="180" fill="url(#${id}w)"/><rect width="180" height="180" fill="url(#${id}r)"/></g>
          <path d="${pillow}" fill="none" stroke="${weave[0][0]}" stroke-width="5" stroke-linejoin="round"/>
          <path d="${pillow}" fill="none" stroke="#000" stroke-opacity=".25" stroke-width="1"/>
        </g>`;
      return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${p.name} cushions">
        <defs>${texture}
          <filter id="${id}b"><feGaussianBlur stdDeviation="7"/></filter>
          <radialGradient id="${id}r" cx=".45" cy=".4" r=".7"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></radialGradient>
          <linearGradient id="${id}bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#efe5d6"/><stop offset=".62" stop-color="#e4d6c1"/><stop offset=".62" stop-color="#cdb795"/><stop offset="1" stop-color="#bfa682"/></linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#${id}bg)"/>
        ${one(96, 70, 6, 0.9, "a")}${one(36, 160, -5, 1, "b")}
      </svg>`;
    }

    // drape (default): stripes bent by a soft displacement, with fold light
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${p.name} sussi fabric">
      <defs>${texture}
        <filter id="${id}d" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".008 .003" numOctaves="2" seed="${(p.id.length * 7) % 50}"/><feDisplacementMap in="SourceGraphic" scale="46"/></filter>
        <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2=".25">
          <stop offset="0" stop-color="#000" stop-opacity=".28"/>
          <stop offset=".18" stop-color="#fff" stop-opacity=".16"/>
          <stop offset=".32" stop-color="#000" stop-opacity=".2"/>
          <stop offset=".5" stop-color="#fff" stop-opacity=".12"/>
          <stop offset=".63" stop-color="#000" stop-opacity=".24"/>
          <stop offset=".8" stop-color="#fff" stop-opacity=".1"/>
          <stop offset="1" stop-color="#000" stop-opacity=".3"/>
        </linearGradient>
        <linearGradient id="${id}t" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".08"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient>
      </defs>
      <g filter="url(#${id}d)">${cloth(p, 1.8, W, H)}</g>
      <rect width="${W}" height="${H}" fill="url(#${id}w)"/>
      <rect width="${W}" height="${H}" fill="${base}" filter="url(#${id}n)"/>
      <rect width="${W}" height="${H}" fill="url(#${id}g)"/>
      <rect width="${W}" height="${H}" fill="url(#${id}t)"/>
    </svg>`;
  }

  /* ---------- launch wishlist (no prices / checkout until launch) ---------- */
  const KEY = "sl_wish_v1";
  const read = () => { try { const v = JSON.parse(localStorage.getItem(KEY)); return Array.isArray(v) ? v.filter((id) => byId(id)) : []; } catch { return []; } };
  const write = (c) => { try { localStorage.setItem(KEY, JSON.stringify(c)); } catch {} updateCount(); };
  const Wish = {
    ids: read,
    has: (id) => read().includes(id),
    toggle(id) { const c = read(); const on = !c.includes(id); write(on ? [...c, id] : c.filter((x) => x !== id)); return on; },
    remove(id) { write(read().filter((x) => x !== id)); },
    clear() { write([]); },
    count: () => read().length,
    items: () => read().map(byId)
  };
  function updateCount() {
    const n = Wish.count();
    $$(".cart-count").forEach((el) => (el.textContent = n));
    $$("[data-wish]").forEach((b) => { const on = Wish.has(b.dataset.wish); b.classList.toggle("on", on); b.innerHTML = on ? "♥ Saved" : "♡ Save for launch"; });
  }
  const waLink = (text) => "https://wa.me/" + WA + "?text=" + encodeURIComponent(text);

  /* ---------- toast ---------- */
  function toast(html) {
    let t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.innerHTML = html;
    requestAnimationFrame(() => t.classList.add("show"));
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 3600);
  }

  /* ---------- icons ---------- */
  const I = {
    arrow: `<svg class="arrow" viewBox="0 0 16 10" fill="none" stroke="currentColor" stroke-width="1"><path d="M0 5h15M11 1l4 4-4 4"/></svg>`,
    search: `<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>`,
    heart: `<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z"/></svg>`,
    menu: `<svg viewBox="0 0 24 24"><path d="M3 7h18M3 12h12M3 17h18"/></svg>`,
    wa: `<svg viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7a10.7 10.7 0 0 1-5.5-1.5l-.4-.2-3.9 1 1-3.8-.2-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.1l-1 1.3c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7 6.4 6.4 0 0 0 1.3 3.4 14.7 14.7 0 0 0 5.6 5c2.1.9 2.9 1 4 .8a3.4 3.4 0 0 0 2.2-1.6 2.8 2.8 0 0 0 .2-1.6c0-.2-.3-.3-.6-.5Z"/></svg>`
  };

  /* ---------- header / footer ---------- */
  function layout() {
    const page = document.body.dataset.page || "";
    const a = (href, label, key) => `<a class="nl${page === key ? " active" : ""}" href="${href}">${label}</a>`;
    const header = `
      <div class="announce" aria-label="Announcements"><div class="track">${("<span>First collection · coming soon</span><span>24 weaves from Hala, Nasarpur, Multan &amp; Bahawalpur</span><span>Join the launch list on WhatsApp · " + PHONE + "</span><span>Prices announced at launch</span>").repeat(2)}</div></div>
      <header class="site-header">
        <div class="wrap nav">
          <button class="burger icon-btn" aria-label="Open menu">${I.menu}</button>
          <nav class="nav-left" aria-label="Main">
            ${a("index.html", "Home", "home")}${a("shop.html", "Collection", "shop")}${a("what-is-sussi.html", "What is Sussi", "sussi")}
          </nav>
          <a href="index.html" class="brand" aria-label="Sussi Loom home"><img src="assets/img/logo-full.png" alt="Sussi Loom" width="94" height="78"></a>
          <div class="nav-right">
            ${a("our-story.html", "Our Story", "story")}${a("contact.html", "Contact", "contact")}
            <a href="shop.html" class="icon-btn" aria-label="Search the shop">${I.search}</a>
            <a href="wishlist.html" class="icon-btn" aria-label="Launch wishlist">${I.heart}<span class="cart-count">0</span></a>
          </div>
        </div>
      </header>
      <div class="mobile-menu" aria-hidden="true">
        <button class="close" aria-label="Close menu">×</button>
        <a href="index.html">Home</a><a href="shop.html">Collection</a><a href="what-is-sussi.html">What is Sussi</a><a href="our-story.html">Our Story</a><a href="contact.html">Contact</a><a href="wishlist.html">Wishlist</a>
        <p style="margin-top:30px">WhatsApp · <a style="font-size:1rem;display:inline;border:0;font-family:var(--sans)" href="https://wa.me/${WA}">${PHONE}</a></p>
      </div>`;
    const footer = `
      <div class="weave-strip" aria-hidden="true"></div>
      <footer class="site-footer">
        <div class="wrap">
          <div class="foot-grid">
            <div>
              <img class="foot-logo" src="assets/img/logo-full.png" alt="Sussi Loom" width="132" height="110">
              <p>The only house in Pakistan devoted entirely to sussi — the striped handloom cloth of Sindh and southern Punjab. Nothing else, ever.</p>
            </div>
            <div><h5>Shop</h5><ul>
              <li><a href="shop.html?cat=unstitched">Unstitched</a></li><li><a href="shop.html?cat=ready">Ready to Wear</a></li>
              <li><a href="shop.html?cat=men">Men</a></li><li><a href="shop.html?cat=dupatta">Dupattas &amp; Shawls</a></li>
              <li><a href="shop.html?cat=festive">Festive</a></li><li><a href="shop.html?cat=home">Home</a></li></ul></div>
            <div><h5>House</h5><ul>
              <li><a href="what-is-sussi.html">What is Sussi</a></li><li><a href="our-story.html">Our Story</a></li>
              <li><a href="contact.html">Contact</a></li><li><a href="wishlist.html">Your Wishlist</a></li></ul></div>
            <div><h5>Talk to us</h5><ul>
              <li><a href="https://wa.me/${WA}">WhatsApp · ${PHONE}</a></li>
              <li><a href="tel:+923177907812">Call · ${PHONE}</a></li>
              <li>Karachi, Pakistan</li><li>Mon – Sat · 11am – 8pm</li></ul></div>
          </div>
          <div class="foot-bottom"><span>© ${new Date().getFullYear()} Sussi Loom. Woven by hand in Pakistan.</span><span>First collection coming soon · Karachi studio</span></div>
        </div>
      </footer>
      <a class="wa-fab" href="https://wa.me/${WA}?text=${encodeURIComponent("Assalam o Alaikum Sussi Loom, I'd like to ask about your sussi.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${I.wa}</a>`;
    const h = $("#header"), f = $("#footer");
    if (h) h.outerHTML = header;
    if (f) f.outerHTML = footer;

    const mm = $(".mobile-menu");
    $(".burger")?.addEventListener("click", () => { mm.classList.add("open"); mm.setAttribute("aria-hidden", "false"); });
    $(".mobile-menu .close")?.addEventListener("click", () => { mm.classList.remove("open"); mm.setAttribute("aria-hidden", "true"); });
    updateCount();
  }

  /* ---------- product card ---------- */
  function card(p, view) {
    return `<article class="card rv">
      <a class="media" href="product.html?id=${p.id}" aria-label="${p.name}">${p.badge ? `<span class="badge">${p.badge}</span>` : ""}${swatch(p, view)}</a>
      <div class="quick"><button class="btn" data-wish="${p.id}">♡ Save for launch</button></div>
      <div class="meta">
        <div><a href="product.html?id=${p.id}"><h4>${p.name}</h4></a><div class="sub">${p.sub} · ${p.origin.split(",")[0]}</div>
          <div class="dots">${[...new Set(p.weave.map((w) => w[0]))].slice(0, 5).map((c) => `<i style="background:${c}"></i>`).join("")}</div></div>
        <div class="soon">Coming soon</div>
      </div>
    </article>`;
  }

  function bindWish(root = document) {
    root.addEventListener("click", (e) => {
      const b = e.target.closest("[data-wish]");
      if (!b) return;
      e.preventDefault();
      const p = byId(b.dataset.wish);
      if (!p) return;
      const on = Wish.toggle(p.id);
      toast(on ? `<span>${p.name} saved — we'll tell you when it's live</span><a href="wishlist.html">Wishlist</a>` : `<span>${p.name} removed</span>`);
    });
  }

  /* ---------- reveal on scroll ---------- */
  function reveal() {
    const els = $$(".rv:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
  }

  window.SL = { swatch, card, Wish, toast, byId, bindWish, reveal, updateCount, waLink, I, PHONE, WA, P };

  document.addEventListener("DOMContentLoaded", () => {
    layout();
    $$("[data-swatch]").forEach((el) => { const p = byId(el.dataset.swatch); if (p) el.innerHTML = swatch(p, el.dataset.view || "drape"); });
    $$("[data-arrow]").forEach((el) => el.insertAdjacentHTML("beforeend", I.arrow));
    bindWish();
    document.dispatchEvent(new Event("sl:ready"));
    updateCount();
    reveal();
  });
})();
