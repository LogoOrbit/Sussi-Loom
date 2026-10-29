# Sussi Loom

Website for Sussi Loom — Pakistan's house of handwoven sussi.

Static multi-page site (HTML/CSS/vanilla JS), deployed on Vercel.

- `index.html` home · `shop.html` · `product.html?id=` · `what-is-sussi.html` · `our-story.html` · `contact.html`
- `cart.html` → `checkout.html` → `thank-you.html` (cart stored in the browser; orders are confirmed on WhatsApp +92 317 7907812)
- Products live in `assets/js/data.js` — each has a `weave` (stripe colours + widths) used to draw its fabric image.

Run locally: `npx serve .` or any static server.
