/* Sussi Loom — shared layout, fabric drawings, cart */
(function () {
  const PHONE = "+92 317 7907812";
  const WA = "923177907812";
  const FREE_SHIP = 7000;
  const SHIP_FEE = 250;
  const P = window.SL_PRODUCTS || [];
  const byId = (id) => P.find((p) => p.id === id);
  const pkr = (n) => "PKR " + Number(n).toLocaleString("en-PK");
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

  function swatch(p, view = "drape") {
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
        <g filter="url(#${id}d)">${stripes(weave, 5.2, W, H)}</g>
        <rect width="${W}" height="${H}" fill="url(#${id}x)"/>
        <rect width="${W}" height="${H}" fill="${base}" filter="url(#${id}n)"/>
        <rect width="${W}" height="${H}" fill="url(#${id}v)"/>
      </svg>`;
    }

    if (view === "folded") {
      const fold = (y, s, sh) => `
        <g transform="translate(40 ${y})">
          <rect x="4" y="10" width="220" height="${s}" fill="#000" opacity=".12" filter="url(#${id}b)"/>
          <svg width="220" height="${s}" overflow="hidden">${stripes(weave, 1.25, 220, s)}<rect width="220" height="${s}" fill="url(#${id}w)"/><rect width="220" height="${s}" fill="url(#${id}fg)"/></svg>
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
        <svg y="0" width="${W}" height="352" overflow="hidden">${stripes(weave, 1.6, W, 352)}<rect width="${W}" height="352" fill="url(#${id}w)"/><rect width="${W}" height="352" fill="${base}" filter="url(#${id}n)"/><rect width="${W}" height="352" fill="url(#${id}s)"/></svg>
        <rect y="340" width="${W}" height="12" fill="#000" opacity=".12"/>
        ${tassels}
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
      <g filter="url(#${id}d)">${stripes(weave, 1.8, W, H)}</g>
      <rect width="${W}" height="${H}" fill="url(#${id}w)"/>
      <rect width="${W}" height="${H}" fill="${base}" filter="url(#${id}n)"/>
      <rect width="${W}" height="${H}" fill="url(#${id}g)"/>
      <rect width="${W}" height="${H}" fill="url(#${id}t)"/>
    </svg>`;
  }

  /* ---------- cart store ---------- */
  const KEY = "sl_cart_v1";
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
  const write = (c) => { try { localStorage.setItem(KEY, JSON.stringify(c)); } catch {} updateCount(); };
  const Cart = {
    items: read,
    add(id, qty = 1, size = null) {
      const c = read();
      const key = id + "|" + (size || "");
      const ex = c.find((i) => i.key === key);
      if (ex) ex.qty = Math.min(10, ex.qty + qty);
      else c.push({ key, id, size, qty });
      write(c);
    },
    setQty(key, qty) {
      let c = read();
      c = c.map((i) => (i.key === key ? { ...i, qty: Math.max(1, Math.min(10, qty)) } : i));
      write(c);
    },
    remove(key) { write(read().filter((i) => i.key !== key)); },
    clear() { write([]); },
    count() { return read().reduce((a, i) => a + i.qty, 0); },
    lines() { return read().map((i) => ({ ...i, p: byId(i.id) })).filter((l) => l.p); },
    totals() {
      const sub = Cart.lines().reduce((a, l) => a + l.p.price * l.qty, 0);
      const ship = sub === 0 || sub >= FREE_SHIP ? 0 : SHIP_FEE;
      return { sub, ship, total: sub + ship };
    }
  };
  function updateCount() { $$(".cart-count").forEach((el) => (el.textContent = Cart.count())); }

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
    bag: `<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`,
    menu: `<svg viewBox="0 0 24 24"><path d="M3 7h18M3 12h12M3 17h18"/></svg>`,
    wa: `<svg viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7a10.7 10.7 0 0 1-5.5-1.5l-.4-.2-3.9 1 1-3.8-.2-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.1l-1 1.3c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.7 3.7 0 0 0-1.1 2.7 6.4 6.4 0 0 0 1.3 3.4 14.7 14.7 0 0 0 5.6 5c2.1.9 2.9 1 4 .8a3.4 3.4 0 0 0 2.2-1.6 2.8 2.8 0 0 0 .2-1.6c0-.2-.3-.3-.6-.5Z"/></svg>`
  };

  /* ---------- header / footer ---------- */
  function layout() {
    const page = document.body.dataset.page || "";
    const a = (href, label, key) => `<a class="nl${page === key ? " active" : ""}" href="${href}">${label}</a>`;
    const header = `
      <div class="announce" aria-label="Announcements"><div class="track">${("<span>Free shipping across Pakistan above PKR 7,000</span><span>Handwoven sussi · Made in Pakistan</span><span>Order on WhatsApp · " + PHONE + "</span><span>Cash on delivery available</span>").repeat(2)}</div></div>
      <header class="site-header">
        <div class="wrap nav">
          <button class="burger icon-btn" aria-label="Open menu">${I.menu}</button>
          <nav class="nav-left" aria-label="Main">
            ${a("index.html", "Home", "home")}${a("shop.html", "Shop", "shop")}${a("what-is-sussi.html", "What is Sussi", "sussi")}
          </nav>
          <a href="index.html" class="brand" aria-label="Sussi Loom home"><img src="assets/img/logo-full.png" alt="Sussi Loom" width="94" height="78"></a>
          <div class="nav-right">
            ${a("our-story.html", "Our Story", "story")}${a("contact.html", "Contact", "contact")}
            <a href="shop.html" class="icon-btn" aria-label="Search the shop">${I.search}</a>
            <a href="cart.html" class="icon-btn" aria-label="Cart">${I.bag}<span class="cart-count">0</span></a>
          </div>
        </div>
      </header>
      <div class="mobile-menu" aria-hidden="true">
        <button class="close" aria-label="Close menu">×</button>
        <a href="index.html">Home</a><a href="shop.html">Shop</a><a href="what-is-sussi.html">What is Sussi</a><a href="our-story.html">Our Story</a><a href="contact.html">Contact</a><a href="cart.html">Cart</a>
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
              <li><a href="shop.html?cat=dupatta">Dupattas</a></li><li><a href="shop.html?cat=festive">Festive</a></li></ul></div>
            <div><h5>House</h5><ul>
              <li><a href="what-is-sussi.html">What is Sussi</a></li><li><a href="our-story.html">Our Story</a></li>
              <li><a href="contact.html">Contact</a></li><li><a href="cart.html">Your Cart</a></li></ul></div>
            <div><h5>Talk to us</h5><ul>
              <li><a href="https://wa.me/${WA}">WhatsApp · ${PHONE}</a></li>
              <li><a href="tel:+923177907812">Call · ${PHONE}</a></li>
              <li>Karachi, Pakistan</li><li>Mon – Sat · 11am – 8pm</li></ul></div>
          </div>
          <div class="foot-bottom"><span>© ${new Date().getFullYear()} Sussi Loom. Woven by hand in Pakistan.</span><span>Cash on delivery · Bank transfer · JazzCash / Easypaisa</span></div>
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
  function card(p, view = "drape") {
    return `<article class="card rv">
      <a class="media" href="product.html?id=${p.id}" aria-label="${p.name}">${p.badge ? `<span class="badge">${p.badge}</span>` : ""}${swatch(p, view)}</a>
      <div class="quick"><button class="btn" data-add="${p.id}">Add to cart</button></div>
      <div class="meta">
        <div><a href="product.html?id=${p.id}"><h4>${p.name}</h4></a><div class="sub">${p.sub}</div>
          <div class="dots">${[...new Set(p.weave.map((w) => w[0]))].slice(0, 4).map((c) => `<i style="background:${c}"></i>`).join("")}</div></div>
        <div class="price">${pkr(p.price)}</div>
      </div>
    </article>`;
  }

  function bindAdd(root = document) {
    root.addEventListener("click", (e) => {
      const b = e.target.closest("[data-add]");
      if (!b) return;
      const p = byId(b.dataset.add);
      if (!p) return;
      if (p.sizes) { location.href = "product.html?id=" + p.id; return; }
      Cart.add(p.id, 1);
      toast(`<span>${p.name} added to your cart</span><a href="cart.html">View cart</a>`);
    });
  }

  /* ---------- reveal on scroll ---------- */
  function reveal() {
    const els = $$(".rv:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
  }

  window.SL = { swatch, card, Cart, toast, pkr, byId, bindAdd, reveal, I, PHONE, WA, FREE_SHIP, SHIP_FEE, P };

  document.addEventListener("DOMContentLoaded", () => {
    layout();
    $$("[data-swatch]").forEach((el) => { const p = byId(el.dataset.swatch); if (p) el.innerHTML = swatch(p, el.dataset.view || "drape"); });
    $$("[data-arrow]").forEach((el) => el.insertAdjacentHTML("beforeend", I.arrow));
    bindAdd();
    document.dispatchEvent(new Event("sl:ready"));
    reveal();
  });
})();
