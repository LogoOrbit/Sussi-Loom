/* Sussi Loom, product catalogue (pre-launch: no prices yet)
   weave  = the actual stripe sequence of the cloth: [colour, width]. Images are drawn from this.
   threads = names for each distinct colour in the weave, in order of first appearance.
   check  = true for chaarkhana (checked) pieces: the same stripe order runs both ways.
   view   = how the piece is drawn on cards: drape | flat | folded | kurta | cushion | close
   Spec values (weight, width, loom days) are per-run targets; confirm against each batch before launch. */
window.SL_PRODUCTS = [
  /* ---------- UNSTITCHED ---------- */
  {
    id: "hala-heritage", name: "Hala Heritage", sub: "Unstitched 3-piece", cat: "unstitched", badge: "Signature", view: "drape",
    weave: [["#7b1f22",10],["#e7c88e",2],["#1f3a52",6],["#e7c88e",2],["#7b1f22",10],["#2a1a12",2],["#c98b2e",4],["#2a1a12",2]],
    threads: ["Madder red","Raw-silk gold","Indigo","Kohl","Turmeric"],
    desc: "The weave we built the house around. A 10-thread madder red band, then indigo framed by two gold pin-stripes, then a turmeric line held between two black ones. That last trio is the Hala signature; weavers there have used it for as long as anyone in the mohalla can remember.",
    fabric: "Cotton warp, mercerised silk-sheen weft", length: "Shirt 2.5m · Shalwar 2.5m · Plain cotton dupatta 2.5m",
    origin: "Hala, Matiari", weight: "Medium · ~150 gsm", width: "38\" loom width", loom: "≈ 4 days for the full suit",
    pair: "Wear the shirt over the plain shalwar and let the sussi shalwar do the work on its own another day. It's two outfits."
  },
  {
    id: "nasarpur-lehar", name: "Nasarpur Lehar", sub: "Unstitched 2-piece", cat: "unstitched", view: "folded",
    weave: [["#2c4a3e",8],["#d9c49b",1.5],["#a2482b",3],["#d9c49b",1.5],["#2c4a3e",8],["#f1e6cf",4]],
    threads: ["Bottle green","Jute","Rust","Unbleached cream"],
    desc: "Bottle green and cream with one rust band. Lehar means wave: when the cloth moves, the cream gaps ripple. Quiet enough for a weekday, the kind of sussi you end up wearing twice a week.",
    fabric: "Cotton warp, mercerised cotton weft", length: "Shirt 2.5m · Shalwar 2.5m",
    origin: "Nasarpur, near Tando Allahyar", weight: "Light · ~125 gsm", width: "36\"", loom: "≈ 2½ days",
    pair: "Cream cotton dupatta, brown leather chappals."
  },
  {
    id: "sehwan-mitti", name: "Sehwan Mitti", sub: "Unstitched 3-piece", cat: "unstitched", view: "folded",
    weave: [["#8a5a3b",7],["#e9d7b7",2],["#5e3a26",3],["#d2a46b",2],["#8a5a3b",7],["#2f4b55",1.5]],
    threads: ["Clay","Sand","Walnut","Camel","Slate blue"],
    desc: "Five earth tones and one slate-blue line that only shows from a metre away. The darkest stripe is walnut-dyed, so it softens toward brown over the first few washes rather than going grey.",
    fabric: "Cotton warp, mercerised silk-sheen weft", length: "Shirt 2.5m · Shalwar 2.5m · Dupatta 2.5m",
    origin: "Hala, Matiari", weight: "Medium · ~150 gsm", width: "38\"", loom: "≈ 4 days",
    pair: "Rust or olive plain dupatta if you want to swap ours out."
  },
  {
    id: "kalhora-neela", name: "Kalhora Neela", sub: "Unstitched 3-piece", cat: "unstitched", badge: "New", view: "drape",
    weave: [["#23407a",6],["#f4efe4",1],["#23407a",2],["#f4efe4",1],["#23407a",6],["#c5482f",1],["#f4efe4",3],["#c5482f",1]],
    threads: ["Cobalt","Chalk white","Brick red"],
    desc: "Cobalt broken by narrow chalk-white tramlines, with a brick-red pair every 21 threads. Named after the blue tilework on the Kalhora tombs outside Hyderabad. The only one in the range with three colours and nothing else.",
    fabric: "Cotton warp, mercerised cotton weft", length: "Shirt 2.5m · Shalwar 2.5m · Dupatta 2.5m",
    origin: "Nasarpur", weight: "Medium · ~140 gsm", width: "36\"", loom: "≈ 3½ days",
    pair: "White sneakers or silver kolhapuris. Keep jewellery silver."
  },
  {
    id: "bahawal-baagh", name: "Bahawal Baagh", sub: "Sussi shalwar length", cat: "unstitched", view: "flat",
    weave: [["#2f5d50",4],["#e9c46a",1],["#9c2f2f",4],["#e9c46a",1],["#264653",4],["#f1e3c8",1.5]],
    threads: ["Garden green","Mustard","Pomegranate","Deep teal","Cream"],
    desc: "Sussi the way it was first worn: as the shalwar, with a plain kurta on top. A single 2.75m length, enough for a full gathered shalwar with a generous pajama-cut leg.",
    fabric: "Cotton warp, silk-sheen weft", length: "2.75m single length",
    origin: "Bahawalpur", weight: "Medium · ~145 gsm", width: "36\"", loom: "≈ 1 day",
    pair: "Any plain white, black or mustard kurta you already own."
  },

  /* ---------- READY TO WEAR (WOMEN) ---------- */
  {
    id: "thar-dhoop", name: "Thar Dhoop", sub: "Straight kurta", cat: "ready", view: "kurta", sizes: ["XS","S","M","L","XL"],
    weave: [["#d58a2a",6],["#f4e2b8",2],["#b2401f",3],["#f4e2b8",2],["#d58a2a",6],["#4a2a18",1.5]],
    threads: ["Saffron","Pale sand","Terracotta","Dark umber"],
    desc: "Saffron and terracotta cut into a straight, relaxed kurta. Band collar, three cloth-covered buttons, 8\" side slits finished by hand so they don't fray or pucker.",
    fabric: "Cotton warp, silk-sheen weft", length: "42\" long in M · ¾ sleeves",
    origin: "Bahawalpur", weight: "Light · ~130 gsm", width: "", loom: "≈ 1½ days of cloth per kurta",
    pair: "White cigarette pants or straight indigo jeans."
  },
  {
    id: "kachi-moti", name: "Kachi Moti", sub: "Straight kurta", cat: "ready", badge: "New", view: "kurta", sizes: ["XS","S","M","L","XL"],
    weave: [["#efe4d2",8],["#b99a76",1],["#efe4d2",3],["#8e6a4a",1],["#efe4d2",8],["#c7a07a",2]],
    threads: ["Pearl","Oat","Hazel","Biscuit"],
    desc: "The softest thing we make. Unbleached cotton with tonal stripes you only notice within arm's reach. Round neck with a 6\" placket and shell-style buttons.",
    fabric: "Unbleached cotton warp, silk-sheen weft", length: "40\" long in M · full sleeves",
    origin: "Nasarpur", weight: "Light · ~120 gsm", width: "", loom: "≈ 1½ days",
    pair: "Wear it with the Indus Neel dupatta for colour."
  },
  {
    id: "shikarpur-pista", name: "Shikarpur Pista", sub: "Kurta & shalwar", cat: "ready", view: "kurta", sizes: ["S","M","L","XL"],
    weave: [["#a9b98a",7],["#f2ead6",2],["#6d7d4f",2],["#f2ead6",2],["#a9b98a",7],["#c87f5a",1.5]],
    threads: ["Pistachio","Ivory","Olive","Coral"],
    desc: "Pistachio with a single coral line, made as a matching kurta and shalwar. The shalwar has a drawstring and a hidden elastic back, so it sits right without the bulk.",
    fabric: "Cotton warp, mercerised cotton weft", length: "Kurta 40\" in M · Shalwar standard",
    origin: "Hala", weight: "Light · ~125 gsm", width: "", loom: "≈ 3 days",
    pair: "Coral or ivory chiffon dupatta. Gold studs."
  },
  {
    id: "makli-kaftan", name: "Makli Kaftan", sub: "Relaxed kaftan", cat: "ready", badge: "New", view: "kurta", sizes: ["S/M","L/XL"],
    weave: [["#b5653d",5],["#ead9bd",3],["#b5653d",1],["#ead9bd",3],["#b5653d",5],["#3b2f2a",1]],
    threads: ["Burnt sienna","Sandstone","Charcoal"],
    desc: "A loose, wide-sleeved kaftan in sienna and sandstone, the colours of the Makli necropolis at 5pm. Cut from one uninterrupted length so the stripes run unbroken from shoulder to hem.",
    fabric: "Cotton warp, cotton weft (no silk, easier to wash)", length: "48\" long · two sizes",
    origin: "Hala", weight: "Light · ~120 gsm", width: "", loom: "≈ 2 days",
    pair: "Barefoot at home, or with a belt and flat sandals out."
  },

  /* ---------- MEN ---------- */
  {
    id: "sukkur-saeen", name: "Sukkur Saeen", sub: "Men's kurta", cat: "men", view: "kurta", sizes: ["S","M","L","XL","XXL"],
    weave: [["#5d6b78",4],["#e8e2d4",0.8],["#5d6b78",4],["#e8e2d4",0.8],["#5d6b78",4],["#2c2f33",1.5]],
    threads: ["Slate","Off-white","Graphite"],
    desc: "Slate grey with a fine off-white pinstripe. Sussi for someone who usually wears plain. Sherwani-style collar, side pockets, and enough body to wear over a shalwar without tugging.",
    fabric: "Cotton warp, mercerised cotton weft", length: "41\" long in M · full sleeves",
    origin: "Nasarpur", weight: "Medium · ~140 gsm", width: "", loom: "≈ 2 days",
    pair: "White shalwar, black Peshawari chappals."
  },
  {
    id: "kotri-waistcoat", name: "Kotri Waistcoat", sub: "Men's waistcoat", cat: "men", view: "kurta", sizes: ["S","M","L","XL","XXL"],
    weave: [["#2a1c16",5],["#a3452a",1.2],["#2a1c16",2],["#d6b06a",0.8],["#2a1c16",5],["#a3452a",1.2]],
    threads: ["Coal","Rust","Old gold"],
    desc: "Near-black sussi with rust and old-gold threads, made up as a five-button waistcoat. Fully lined in plain cotton so it hangs flat over a starched kurta. Weddings, mostly.",
    fabric: "Heavier double-weft sussi · cotton lining", length: "26\" long in M",
    origin: "Multan", weight: "Heavy · ~210 gsm", width: "", loom: "≈ 1 day of cloth",
    pair: "White or ivory kurta-shalwar. Nothing else patterned."
  },
  {
    id: "thatta-tehband", name: "Thatta Tehband", sub: "Men's lungi / tehband", cat: "men", view: "flat",
    weave: [["#1f4f6b",3],["#f0e6d0",1],["#b03a2e",3],["#f0e6d0",1],["#1f4f6b",3],["#e0a83a",1],["#1f4f6b",3],["#2b2622",1]],
    threads: ["River blue","Cream","Red","Marigold","Soot"],
    desc: "A proper sussi lungi, the original men's use of the cloth across lower Sindh. 2.25m with a woven border at both ends. Wrap, fold, roll at the waist.",
    fabric: "Cotton warp, cotton weft", length: "2.25m × 1.15m, woven borders",
    origin: "Hala", weight: "Medium · ~150 gsm", width: "45\"", loom: "≈ 1 day",
    pair: "A plain kurta or a white vest at home."
  },
  {
    id: "dadu-khaki", name: "Dadu Khaki", sub: "Men's unstitched suit", cat: "men", view: "folded",
    weave: [["#b9a684",3],["#8a7756",0.6],["#b9a684",3],["#6b5a40",0.6],["#b9a684",3]],
    threads: ["Khaki","Tobacco","Bark"],
    desc: "Micro-stripes in khaki and tobacco that read as a solid from across a room. 4.5m, enough for kameez and shalwar for most builds up to XL.",
    fabric: "Cotton warp, mercerised cotton weft", length: "4.5m single length",
    origin: "Nasarpur", weight: "Medium · ~140 gsm", width: "38\"", loom: "≈ 2 days",
    pair: "Have it stitched with a band collar and sleeve cuffs."
  },

  /* ---------- DUPATTAS & SHAWLS ---------- */
  {
    id: "indus-neel", name: "Indus Neel", sub: "Dupatta", cat: "dupatta", view: "flat",
    weave: [["#1d3557",8],["#e8dcc4",1.5],["#3c6e91",4],["#e8dcc4",1.5],["#1d3557",8],["#b5452c",1.2]],
    threads: ["River indigo","Bone","Lighter indigo","Red selvedge"],
    desc: "Two indigos from the same vat (the second dip is lighter) with a thin red line at the selvedge. Put it on a plain white kurta and people ask where it's from.",
    fabric: "Fine-count cotton warp, silk-sheen weft", length: "2.5m × 1.1m · hand-knotted tassels",
    origin: "Hala", weight: "Light · ~95 gsm", width: "44\"", loom: "≈ 1 day",
    pair: "White or ivory anything."
  },
  {
    id: "gulab-gali", name: "Gulab Gali", sub: "Dupatta", cat: "dupatta", view: "flat",
    weave: [["#c98a8a",6],["#f3e3d6",2],["#8c3b4a",2],["#f3e3d6",2],["#c98a8a",6],["#d3a660",1]],
    threads: ["Dusty rose","Blush","Wine","Turmeric"],
    desc: "Dusty rose and wine with a turmeric pin-stripe. At 95 gsm it's light enough to keep on through a whole dholki without noticing it.",
    fabric: "Fine-count cotton warp, silk-sheen weft", length: "2.5m × 1.1m · tassels",
    origin: "Multan", weight: "Light · ~95 gsm", width: "44\"", loom: "≈ 1 day",
    pair: "Wine, ivory or bottle-green kurtas."
  },
  {
    id: "kirthar-shawl", name: "Kirthar Shawl", sub: "Winter shawl", cat: "dupatta", badge: "Winter", view: "folded",
    weave: [["#34302d",7],["#c79a3b",1.5],["#34302d",2],["#8b8378",1],["#34302d",7],["#c79a3b",1.5]],
    threads: ["Charcoal","Mustard","Stone"],
    desc: "Woven with a doubled weft so it's twice the weight of our dupattas: warm enough for a Karachi December, not quite a Lahore one. Charcoal with a mustard line near each edge.",
    fabric: "Double-weft cotton sussi", length: "2.4m × 1.25m · twisted fringe",
    origin: "Multan", weight: "Heavy · ~260 gsm", width: "50\"", loom: "≈ 2 days",
    pair: "Over a coat, or doubled as a throw."
  },
  {
    id: "haleji-stole", name: "Haleji Stole", sub: "Narrow stole", cat: "dupatta", view: "flat",
    weave: [["#2f6f6a",5],["#efe7d6",1],["#7fb2a4",2],["#efe7d6",1],["#2f6f6a",5],["#d4874a",0.8]],
    threads: ["Lake teal","Rice white","Sea-glass","Apricot"],
    desc: "A 70cm-wide stole in the teals of Haleji lake. Narrow enough to wear with Western clothes. Knot it, loop it, or let it hang.",
    fabric: "Fine-count cotton warp, silk-sheen weft", length: "2m × 0.7m · short fringe",
    origin: "Nasarpur", weight: "Light · ~90 gsm", width: "28\"", loom: "½ day",
    pair: "Denim jacket, black turtleneck, white shirt."
  },

  /* ---------- FESTIVE ---------- */
  {
    id: "multani-mehfil", name: "Multani Mehfil", sub: "Festive 3-piece", cat: "festive", badge: "Limited", view: "drape",
    weave: [["#5a1832",9],["#d4a64a",1.5],["#5a1832",3],["#d4a64a",1.5],["#2e1022",6],["#e9c977",3],["#2e1022",2]],
    threads: ["Plum","Antique zari","Aubergine","Pale zari"],
    desc: "Plum and aubergine with zari pin-stripes. Woven tighter than our everyday sussi, about 60 picks to the inch, so it has body and catches light. Only a small number of lengths per season.",
    fabric: "Higher-silk weft, zari pin-stripe", length: "Shirt 3m · Shalwar 2.5m · Dupatta 2.5m",
    origin: "Multan", weight: "Medium-heavy · ~180 gsm", width: "38\"", loom: "≈ 6 days",
    pair: "Gold jhumkas, plain chiffon dupatta if you skip ours."
  },
  {
    id: "rohi-raat", name: "Rohi Raat", sub: "Festive 3-piece", cat: "festive", view: "drape",
    weave: [["#1a1714",9],["#c9a14e",1.2],["#1a1714",3],["#7d1f24",2],["#1a1714",9],["#c9a14e",1.2]],
    threads: ["Night black","Gold","Garnet"],
    desc: "Black with gold and garnet, named for Cholistan (Rohi) after dark. Dramatic from a distance, but still a cotton-warp cloth: you can sit cross-legged in it until 2am.",
    fabric: "Higher-silk weft, zari line", length: "Shirt 3m · Shalwar 2.5m · Dupatta 2.5m",
    origin: "Bahawalpur", weight: "Medium-heavy · ~175 gsm", width: "38\"", loom: "≈ 5 days",
    pair: "Kundan or antique-gold jewellery."
  },
  {
    id: "noor-mahal", name: "Noor Mahal", sub: "Festive kurta", cat: "festive", badge: "New", view: "kurta", sizes: ["XS","S","M","L","XL"],
    weave: [["#e6d3b0",6],["#b8893f",1.5],["#e6d3b0",2],["#7e5a2f",1],["#e6d3b0",6],["#b8893f",1.5]],
    threads: ["Ivory","Antique gold","Tobacco"],
    desc: "Ivory and antique gold, cut long with a gentle flare from the waist. Hand-done tilla edging at the neckline and cuffs, about three hours of embroidery per kurta.",
    fabric: "Silk-rich weft, zari stripe", length: "46\" long in M · full sleeves",
    origin: "Bahawalpur", weight: "Medium · ~160 gsm", width: "", loom: "≈ 2 days + tilla",
    pair: "Gold khussas and a plain gold-edged dupatta."
  },
  {
    id: "tando-ghagra", name: "Tando Ghagra", sub: "Ghagra / lehenga length", cat: "festive", badge: "Limited", view: "close",
    weave: [["#a3122a",4],["#e8b847",1],["#1d5a3a",2],["#e8b847",1],["#a3122a",4],["#f2d7a0",0.8],["#4b1830",2],["#f2d7a0",0.8]],
    threads: ["Sindoor red","Marigold zari","Parrot green","Pale gold","Mulberry"],
    desc: "Six metres of dense, multi-stripe festive sussi for a full ghagra, the way brides in Tando Muhammad Khan wore it before lehengas came from Lahore. Red, parrot green and mulberry with zari between.",
    fabric: "Higher-silk weft, zari pin-stripes", length: "6m single length",
    origin: "Hala", weight: "Medium-heavy · ~180 gsm", width: "38\"", loom: "≈ 8 days",
    pair: "A plain silk choli and a net dupatta."
  },

  /* ---------- HOME ---------- */
  {
    id: "manchar-cushion", name: "Manchar Cushions", sub: "Cushion covers · set of 2", cat: "home", view: "cushion", check: true,
    weave: [["#1f3a52",5],["#e7c88e",1],["#9a2f2a",2],["#e7c88e",1],["#1f3a52",5],["#efe6d5",2]],
    threads: ["Indigo","Gold","Madder","Cream"],
    desc: "Chaarkhana, the same stripe order woven in both directions, so it squares into a check. Indigo and madder, the two oldest dyes in the valley. Hidden zip, piped edge.",
    fabric: "Cotton warp & weft, chaarkhana weave", length: "18\" × 18\" · set of 2 · inserts not included",
    origin: "Hala", weight: "Heavy · ~220 gsm", width: "", loom: "≈ ½ day",
    pair: "Plain linen sofa, or two on a charpai."
  },
  {
    id: "keenjhar-runner", name: "Keenjhar Runner", sub: "Table runner", cat: "home", view: "flat",
    weave: [["#e6dcc6",5],["#2f6f6a",1],["#e6dcc6",1],["#c97b3c",1],["#e6dcc6",5],["#2f6f6a",1]],
    threads: ["Oat","Lake teal","Copper"],
    desc: "Oat with teal and copper lines, finished with knotted fringe at both ends. Cotton only, so a dal stain comes out on a cold soak.",
    fabric: "Cotton warp & weft", length: "14\" × 72\" plus fringe",
    origin: "Nasarpur", weight: "Heavy · ~220 gsm", width: "14\"", loom: "½ day",
    pair: "A six-seat table, or doubled down a console."
  },
  {
    id: "ranikot-khes", name: "Ranikot Khes", sub: "Throw / khes", cat: "home", badge: "New", view: "folded", check: true,
    weave: [["#7d3a26",6],["#efe3cb",1.5],["#2d3a40",2],["#efe3cb",1.5],["#7d3a26",6],["#c7963f",1]],
    threads: ["Brick","Cream","Ink","Ochre"],
    desc: "A heavy chaarkhana khes in the brick and ochre of Ranikot's walls. Throw it over a sofa in winter, lay it on the floor for a picnic in March.",
    fabric: "Double-weft cotton, chaarkhana", length: "50\" × 80\"",
    origin: "Hala", weight: "Heavy · ~300 gsm", width: "50\"", loom: "≈ 2 days",
    pair: "Bed-end, sofa arm, back seat of the car."
  }
];

window.SL_CATS = {
  unstitched: "Unstitched",
  ready: "Ready to Wear",
  men: "Men",
  dupatta: "Dupattas & Shawls",
  festive: "Festive",
  home: "Home"
};
