/* Sussi Loom — product catalogue
   Each product's "weave" is the actual stripe sequence of the fabric: [colour, width].
   Images are drawn from this so the swatch matches the cloth. */
window.SL_PRODUCTS = [
  {
    id: "hala-heritage", name: "Hala Heritage", sub: "Unstitched 3-piece · Pure sussi",
    cat: "unstitched", price: 12500, badge: "Signature",
    weave: [["#7b1f22",10],["#e7c88e",2],["#1f3a52",6],["#e7c88e",2],["#7b1f22",10],["#2a1a12",2],["#c98b2e",4],["#2a1a12",2]],
    desc: "Our first and most-loved weave. Deep madder red broken by indigo and turmeric pin-stripes, the way it has been woven in Hala for generations. Shirt, sussi shalwar and a plain cotton dupatta.",
    fabric: "Handloom sussi — cotton warp with silk-sheen weft", length: "Shirt 2.5m · Shalwar 2.5m · Dupatta 2.5m"
  },
  {
    id: "nasarpur-lehar", name: "Nasarpur Lehar", sub: "Unstitched 2-piece · Pure sussi",
    cat: "unstitched", price: 9800,
    weave: [["#2c4a3e",8],["#d9c49b",1.5],["#a2482b",3],["#d9c49b",1.5],["#2c4a3e",8],["#f1e6cf",4]],
    desc: "Bottle green and cream with a single rust thread running through — a quiet, everyday sussi named after the waves (lehar) its stripes make when the cloth moves.",
    fabric: "Handloom sussi — cotton warp with mercerised weft", length: "Shirt 2.5m · Shalwar 2.5m"
  },
  {
    id: "multani-mehfil", name: "Multani Mehfil", sub: "Festive 3-piece · Silk-rich sussi",
    cat: "festive", price: 17500, badge: "Limited",
    weave: [["#5a1832",9],["#d4a64a",1.5],["#5a1832",3],["#d4a64a",1.5],["#2e1022",6],["#e9c977",3],["#2e1022",2]],
    desc: "Plum and wine with real gold-toned zari threads. Woven slower and denser for weddings and Eid evenings. Only a small number of lengths come off the loom each season.",
    fabric: "Handloom sussi — higher silk content, zari pin-stripe", length: "Shirt 3m · Shalwar 2.5m · Dupatta 2.5m"
  },
  {
    id: "thar-dhoop", name: "Thar Dhoop", sub: "Ready to wear kurta",
    cat: "ready", price: 8900, sizes: ["XS","S","M","L","XL"],
    weave: [["#d58a2a",6],["#f4e2b8",2],["#b2401f",3],["#f4e2b8",2],["#d58a2a",6],["#4a2a18",1.5]],
    desc: "Desert sun in cloth — saffron and terracotta stripes cut into a straight, relaxed kurta with a narrow band collar and hand-finished side slits.",
    fabric: "Handloom sussi", length: "Kurta length 42\" (size M)"
  },
  {
    id: "kachi-moti", name: "Kachi Moti", sub: "Ready to wear kurta",
    cat: "ready", price: 9400, sizes: ["XS","S","M","L","XL"], badge: "New",
    weave: [["#efe4d2",8],["#b99a76",1],["#efe4d2",3],["#8e6a4a",1],["#efe4d2",8],["#c7a07a",2]],
    desc: "Pearl and oat — the softest sussi we make. Tonal stripes you only notice up close. Straight-cut kurta with pearl-style buttons.",
    fabric: "Handloom sussi — unbleached cotton with silk-sheen weft", length: "Kurta length 40\" (size M)"
  },
  {
    id: "shikarpur-pista", name: "Shikarpur Pista", sub: "Ready to wear 2-piece",
    cat: "ready", price: 11200, sizes: ["S","M","L","XL"],
    weave: [["#a9b98a",7],["#f2ead6",2],["#6d7d4f",2],["#f2ead6",2],["#a9b98a",7],["#c87f5a",1.5]],
    desc: "Pistachio green with a coral line. Kurta with matching sussi shalwar — light, breathable and made for long summer afternoons.",
    fabric: "Handloom sussi", length: "Kurta 40\" · Shalwar standard"
  },
  {
    id: "indus-neel", name: "Indus Neel", sub: "Sussi dupatta",
    cat: "dupatta", price: 5200,
    weave: [["#1d3557",8],["#e8dcc4",1.5],["#3c6e91",4],["#e8dcc4",1.5],["#1d3557",8],["#b5452c",1.2]],
    desc: "River indigo with a thin red selvedge stripe. A dupatta that lifts a plain white kurta into something people ask about.",
    fabric: "Handloom sussi, fine count", length: "2.5m × 1.1m, hand-knotted tassels"
  },
  {
    id: "gulab-gali", name: "Gulab Gali", sub: "Sussi dupatta",
    cat: "dupatta", price: 5600,
    weave: [["#c98a8a",6],["#f3e3d6",2],["#8c3b4a",2],["#f3e3d6",2],["#c98a8a",6],["#d3a660",1]],
    desc: "Dusty rose and wine with a turmeric pin-stripe. Light enough to wear all day, rich enough for a dholki.",
    fabric: "Handloom sussi, fine count", length: "2.5m × 1.1m"
  },
  {
    id: "rohi-raat", name: "Rohi Raat", sub: "Festive 3-piece · Silk-rich sussi",
    cat: "festive", price: 16800,
    weave: [["#1a1714",9],["#c9a14e",1.2],["#1a1714",3],["#7d1f24",2],["#1a1714",9],["#c9a14e",1.2]],
    desc: "Night in Cholistan — black sussi with gold and garnet threads. Dramatic, but still soft enough to sit cross-legged in all night.",
    fabric: "Handloom sussi — higher silk content", length: "Shirt 3m · Shalwar 2.5m · Dupatta 2.5m"
  },
  {
    id: "sehwan-mitti", name: "Sehwan Mitti", sub: "Unstitched 3-piece · Pure sussi",
    cat: "unstitched", price: 11900,
    weave: [["#8a5a3b",7],["#e9d7b7",2],["#5e3a26",3],["#d2a46b",2],["#8a5a3b",7],["#2f4b55",1.5]],
    desc: "Clay, sand and a slate-blue line. Earthy and grounded — the sussi we reach for most often ourselves.",
    fabric: "Handloom sussi", length: "Shirt 2.5m · Shalwar 2.5m · Dupatta 2.5m"
  },
  {
    id: "bahawal-baagh", name: "Bahawal Baagh", sub: "Sussi shalwar fabric",
    cat: "unstitched", price: 4200,
    weave: [["#2f5d50",4],["#e9c46a",1],["#9c2f2f",4],["#e9c46a",1],["#264653",4],["#f1e3c8",1.5]],
    desc: "The classic way sussi was worn — as a shalwar. A full 2.75m length of multi-stripe sussi to pair with any plain kurta.",
    fabric: "Handloom sussi", length: "2.75m single length"
  },
  {
    id: "noor-mahal", name: "Noor Mahal", sub: "Festive kurta · Ready to wear",
    cat: "festive", price: 13900, sizes: ["XS","S","M","L","XL"], badge: "New",
    weave: [["#e6d3b0",6],["#b8893f",1.5],["#e6d3b0",2],["#7e5a2f",1],["#e6d3b0",6],["#b8893f",1.5]],
    desc: "Ivory and antique gold. A long, gently flared kurta with hand-done tilla edging at the neckline and cuffs.",
    fabric: "Handloom sussi — silk-rich, zari stripe", length: "Kurta length 46\" (size M)"
  }
];

window.SL_CATS = {
  unstitched: "Unstitched",
  ready: "Ready to Wear",
  dupatta: "Dupattas",
  festive: "Festive"
};
