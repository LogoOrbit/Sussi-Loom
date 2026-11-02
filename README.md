# Sussi Loom

Website for Sussi Loom — Pakistan's house of handwoven sussi.

Static multi-page site (HTML/CSS/vanilla JS), deployed on Vercel.

- `index.html` home · `shop.html` · `product.html?id=` · `what-is-sussi.html` · `our-story.html` · `contact.html`
- Pre-launch: no prices or checkout. `wishlist.html` keeps saved weaves in the browser and sends the list on WhatsApp (+92 317 7907812).
- Products live in `assets/js/data.js` — each has a `weave` (stripe colours + widths) used to draw its fabric image, plus `threads`, `origin`, `weight`, `loom` etc. shown on the product page. Add `price` back and restore the cart when launching.

Run locally: `npx serve .` or any static server.
