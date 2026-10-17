
"use strict";

/* =========================================================
   PAW PARADISE - MAIN JAVASCRIPT
   All product, cart, search and checkout functionality
========================================================= */

const PRODUCTS = [
    {
        id: 1, name: "Premium Chicken Dog Food", category: "Dogs",
        price: 749, oldPrice: 899, tag: "Bestseller",
        image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
        description: "A tasty everyday meal for adult dogs, designed to make mealtime a little more exciting.",
        details: "A convenient everyday food option. Always choose a diet suitable for your dog's age, size and health."
    },
    {
        id: 2, name: "Rope Tug Chew Toy", category: "Dogs",
        price: 299, oldPrice: 399, tag: "Popular",
        image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80",
        description: "A playful rope toy for supervised games of tug and interactive play.",
        details: "Encourages interactive play and bonding. Inspect regularly and replace if damaged or frayed."
    },
    {
        id: 3, name: "Adjustable Dog Collar", category: "Dogs",
        price: 449, oldPrice: 599, tag: "New",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
        description: "A stylish everyday collar with an adjustable fit for your walking companion.",
        details: "Measure your pet's neck before choosing a collar. Check the fit regularly for comfort and safety."
    },
    {
        id: 4, name: "Soft Pet Sleeping Bed", category: "Dogs",
        price: 1299, oldPrice: 1599, tag: "Comfort pick",
        image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80",
        description: "A cosy resting spot for relaxing after a long day of playing.",
        details: "Choose a bed large enough for your pet to stretch out comfortably. Check the product label for cleaning instructions."
    },
    {
        id: 5, name: "Crunchy Cat Treats", category: "Cats",
        price: 249, oldPrice: 299, tag: "Bestseller",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80",
        description: "A little reward for curious cats and special bonding moments.",
        details: "Serve in moderation and check the ingredient list for your cat's dietary needs."
    },
    {
        id: 6, name: "Feather Wand Cat Toy", category: "Cats",
        price: 199, oldPrice: 279, tag: "Playtime",
        image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80",
        description: "An interactive wand toy for playful pounces and daily enrichment.",
        details: "Use under supervision and store safely after play. Replace if any parts become loose."
    },
    {
        id: 7, name: "Cat Scratching Post", category: "Cats",
        price: 999, oldPrice: 1299, tag: "Popular",
        image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80",
        description: "A dedicated scratching spot to help enrich your cat's indoor environment.",
        details: "Place on a stable surface. Supervise initial use and check stability regularly."
    },
    {
        id: 8, name: "Cozy Cat Cave", category: "Cats",
        price: 1199, oldPrice: 1499, tag: "Comfort pick",
        image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=800&q=80",
        description: "A snug hideaway for quiet naps and peaceful alone time.",
        details: "Choose a size suitable for your cat and follow the care instructions supplied with the bed."
    },
    {
        id: 9, name: "Parrot Seed Mix", category: "Birds",
        price: 349, oldPrice: 429, tag: "Everyday pick",
        image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
        description: "A seed-mix option for bird owners looking for a convenient feeding staple.",
        details: "Nutritional requirements differ between bird species. Check with an avian veterinarian that this food is appropriate."
    },
    {
        id: 10, name: "Wooden Bird Perch", category: "Birds",
        price: 299, oldPrice: 379, tag: "Natural look",
        image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
        description: "A simple perch accessory to add variety to a bird's environment.",
        details: "Choose bird-safe materials and an appropriate diameter. Ensure the perch is firmly secured."
    },
    {
        id: 11, name: "Colourful Bird Swing", category: "Birds",
        price: 399, oldPrice: 499, tag: "Playtime",
        image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80",
        description: "An enrichment accessory for movement, exploration and activity.",
        details: "Confirm the size and materials are suitable for your bird. Check hardware for wear."
    },
    {
        id: 12, name: "Bird Feeding Bowl", category: "Birds",
        price: 179, oldPrice: 229, tag: "Essential",
        image: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=800&q=80",
        description: "A practical feeding accessory for your bird's daily routine.",
        details: "Clean food and water dishes frequently and use a bowl suitable for the species and cage."
    },
    {
        id: 13, name: "Tropical Fish Flakes", category: "Fish",
        price: 229, oldPrice: 299, tag: "Popular",
        image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
        description: "A convenient flake-food option for suitable tropical aquarium fish.",
        details: "Confirm that the food suits your fish species and feed only the amount they can consume without leaving excess."
    },
    {
        id: 14, name: "Aquarium Rock Decor", category: "Fish",
        price: 499, oldPrice: 649, tag: "Aquarium style",
        image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
        description: "A decorative aquarium accent to create visual interest in your aquatic setup.",
        details: "Only use aquarium-safe decorations. Rinse as directed and avoid sharp edges or materials that alter water chemistry."
    },
    {
        id: 15, name: "Aquarium Water Filter", category: "Fish",
        price: 899, oldPrice: 1099, tag: "Essential",
        image: "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?auto=format&fit=crop&w=800&q=80",
        description: "A filtration option for keeping an aquarium's water care routine on track.",
        details: "Check tank capacity and compatibility before purchase. Follow maintenance instructions for the selected filter."
    },
    {
        id: 16, name: "Aquarium Green Plant", category: "Fish",
        price: 249, oldPrice: 329, tag: "Fresh look",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        description: "An aquarium-style plant accent for a fresh, natural-looking aquatic scene.",
        details: "Check whether the plant is live or artificial before use and confirm compatibility with your aquarium inhabitants."
    }
];

/* -------------------- GENERAL HELPERS -------------------- */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const money = amount => new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
}).format(amount);

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function getProduct(id) {
    return PRODUCTS.find(product => product.id === Number(id));
}

function currentPage() {
    return location.pathname.split("/").pop().toLowerCase() || "index.html";
}

function readCart() {
    try {
        const saved = JSON.parse(localStorage.getItem("pawParadiseCart") || "[]");
        if (!Array.isArray(saved)) return [];

        return saved.filter(item =>
            getProduct(item.id) &&
            Number.isInteger(Number(item.quantity)) &&
            Number(item.quantity) > 0
        ).map(item => ({
            id: Number(item.id),
            quantity: Math.min(99, Number(item.quantity))
        }));
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem("pawParadiseCart", JSON.stringify(cart));
    updateCartCount();
}

function cartCount() {
    return readCart().reduce((total, item) => total + item.quantity, 0);
}

function cartSubtotal() {
    return readCart().reduce((total, item) => {
        const product = getProduct(item.id);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);
}

function shippingCost(subtotal) {
    if (subtotal === 0 || subtotal >= 999) return 0;
    return 79;
}

function showToast(message) {
    const previous = $(".toast");
    if (previous) previous.remove();

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2800);
}

function imageMarkup(product, className = "") {
    return `<img class="${className}" src="${escapeHTML(product.image)}"
    alt="${escapeHTML(product.name)}"
    loading="lazy"
    onerror="this.onerror=null;this.src='https://placehold.co/800x600/f5f3ee/244d3b?text=Pet+Product';">`;
}

/* -------------------- HEADER AND FOOTER -------------------- */

function renderHeader() {
    const header = $("#site-header");
    if (!header) return;

    const page = currentPage();

    header.innerHTML = `
    <div class="announcement">A little more love, delivered to your door · Free shipping over ₹999</div>
    <nav class="site-nav">
      <div class="container nav-inner">
        <a class="logo" href="index.html"><span class="logo-mark">🐾</span>Paw <span>Paradise</span></a>

        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>

        <div class="nav-links" id="nav-links">
          <a class="${page === "index.html" ? "active" : ""}" href="index.html">Home</a>
          <a class="${page === "shop.html" ? "active" : ""}" href="shop.html">Shop All</a>
          <a class="${page === "dogs.html" ? "active" : ""}" href="dogs.html">Dogs</a>
          <a class="${page === "cats.html" ? "active" : ""}" href="cats.html">Cats</a>
          <a class="${page === "birds.html" ? "active" : ""}" href="birds.html">Birds</a>
          <a class="${page === "fish.html" ? "active" : ""}" href="fish.html">Fish</a>
        </div>

        <div class="nav-actions">
          <input class="nav-search" id="nav-search" type="search" placeholder="Search products" aria-label="Search products">
          <a class="cart-link" href="cart.html" aria-label="Shopping cart">🛒 <span class="cart-count" id="cart-count">0</span></a>
        </div>
      </div>
    </nav>
  `;

    $("#menu-toggle").addEventListener("click", () => {
        const links = $("#nav-links");
        const open = links.classList.toggle("open");
        $("#menu-toggle").setAttribute("aria-expanded", String(open));
        $("#menu-toggle").textContent = open ? "✕" : "☰";
    });

    $("#nav-search").addEventListener("keydown", event => {
        if (event.key === "Enter" && event.target.value.trim()) {
            location.href = `shop.html?q=${encodeURIComponent(event.target.value.trim())}`;
        }
    });

    updateCartCount();
}

function renderFooter() {
    const footer = $("#site-footer");
    if (!footer) return;

    footer.className = "site-footer";
    footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="logo" href="index.html">🐾 Paw Paradise</a>
          <p>Your pet's happy place for food, play, comfort and all the little things that make a difference.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <div class="footer-links">
            <a href="shop.html">All products</a>
            <a href="dogs.html">Dog collection</a>
            <a href="cats.html">Cat collection</a>
            <a href="birds.html">Bird collection</a>
            <a href="fish.html">Fish collection</a>
          </div>
        </div>
        <div>
          <h3>Your account</h3>
          <div class="footer-links">
            <a href="cart.html">Shopping cart</a>
            <a href="checkout.html">Checkout</a>
            <a href="index.html#categories">Shop by pet</a>
          </div>
        </div>
        <div>
          <h3>Our promise</h3>
          <p>Thoughtfully selected essentials, a simple shopping experience and more love for every companion.</p>
          <p style="margin-top:12px">Email: hello@pawparadise.example</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Paw Paradise. Demo pet shop website.</span>
        <span>Made with 🧡 for pet parents.</span>
      </div>
    </div>
  `;
}

function updateCartCount() {
    const badge = $("#cart-count");
    if (badge) badge.textContent = cartCount();
}

/* -------------------- PRODUCT CARDS -------------------- */

function productCard(product) {
    return `
    <article class="product-card">
      <a class="product-image" href="product.html?id=${product.id}" aria-label="View ${escapeHTML(product.name)}">
        ${imageMarkup(product)}
        <span class="product-tag">${escapeHTML(product.tag)}</span>
      </a>
      <div class="product-info">
        <span class="product-category">${escapeHTML(product.category)}</span>
        <h3 class="product-name"><a href="product.html?id=${product.id}">${escapeHTML(product.name)}</a></h3>
        <p class="product-description">${escapeHTML(product.description)}</p>
        <div class="product-bottom">
          <span class="product-price">${money(product.price)}</span>
          <button class="add-btn" data-add="${product.id}" aria-label="Add ${escapeHTML(product.name)} to cart" title="Add to cart">+</button>
        </div>
      </div>
    </article>
  `;
}

function renderProductList(container, products) {
    if (!container) return;

    if (!products.length) {
        container.innerHTML = `<div class="empty-results"><h3>No products found 🐾</h3><p>Try a different search or category.</p></div>`;
        return;
    }

    container.innerHTML = products.map(productCard).join("");
}

function addToCart(id, quantity = 1) {
    const product = getProduct(id);
    if (!product) return;

    const cart = readCart();
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity = Math.min(99, existing.quantity + quantity);
    } else {
        cart.push({ id: product.id, quantity: Math.min(99, quantity) });
    }

    saveCart(cart);
    showToast(`${product.name} added to your cart!`);
}

function renderHome() {
    renderProductList($("#featured-products"), PRODUCTS.slice(0, 4));
}

function renderShop() {
    const container = $("#all-products");
    if (!container) return;

    const searchInput = $("#product-search");
    const categorySelect = $("#category-filter");
    const sortSelect = $("#sort-products");
    const count = $("#product-count");

    const params = new URLSearchParams(location.search);
    if (searchInput) searchInput.value = params.get("q") || "";
    if (categorySelect && ["Dogs", "Cats", "Birds", "Fish"].includes(params.get("category"))) {
        categorySelect.value = params.get("category");
    }

    function update() {
        const term = searchInput.value.trim().toLowerCase();
        const category = categorySelect.value;
        let filtered = PRODUCTS.filter(product => {
            const matchesText = `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(term);
            const matchesCategory = category === "all" || product.category === category;
            return matchesText && matchesCategory;
        });

        switch (sortSelect.value) {
            case "low":
                filtered.sort((a, b) => a.price - b.price);
                break;
            case "high":
                filtered.sort((a, b) => b.price - a.price);
                break;
            case "name":
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        count.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`;
        renderProductList(container, filtered);
    }

    searchInput.addEventListener("input", update);
    categorySelect.addEventListener("change", update);
    sortSelect.addEventListener("change", update);
    update();
}

function renderCategory(category) {
    const container = $("#category-products");
    if (!container) return;
    renderProductList(container, PRODUCTS.filter(product => product.category === category));
}

/* -------------------- PRODUCT DETAILS -------------------- */

function renderProductDetail() {
    const container = $("#product-detail");
    if (!container) return;

    const params = new URLSearchParams(location.search);
    const product = getProduct(params.get("id")) || PRODUCTS[0];

    document.title = `${product.name} | Paw Paradise`;

    container.innerHTML = `
    <div>
        ${imageMarkup(product, "detail-image")}
    </div>
    <div class="detail-info">
        <span class="product-category">${escapeHTML(product.category)} / Pet essentials</span>
        <h1>${escapeHTML(product.name)}</h1>
        <p class="detail-price">${money(product.price)}
        ${product.oldPrice ? `<del style="font-size:1rem;color:#999;font-weight:400;margin-left:8px">${money(product.oldPrice)}</del>` : ""}
        </p>
        <p>${escapeHTML(product.description)}</p>
        <div class="detail-meta">
        <span>✓ ${escapeHTML(product.details)}</span>
        <span>✓ Category: ${escapeHTML(product.category)}</span>
        <span>✓ Demo stock: available</span>
        </div>
        <label for="detail-quantity"><strong>Quantity</strong></label>
        <div class="detail-actions">
        <div class="quantity-control">
            <button type="button" id="detail-minus" aria-label="Decrease quantity">−</button>
            <span id="detail-quantity">1</span>
            <button type="button" id="detail-plus" aria-label="Increase quantity">+</button>
        </div>
        <button class="btn btn-primary" id="detail-add">Add to cart · ${money(product.price)}</button>
        </div>
        <p style="font-size:.8rem;margin-top:18px">Shipping is free on orders of ₹999 or more. Final shipping is calculated in your cart.</p>
        </div>
    `;

    let quantity = 1;
    const quantityLabel = $("#detail-quantity");

    function refreshQuantity() {
        quantityLabel.textContent = quantity;
        $("#detail-add").textContent = `Add to cart · ${money(product.price * quantity)}`;
    }

    $("#detail-minus").addEventListener("click", () => {
        quantity = Math.max(1, quantity - 1);
        refreshQuantity();
    });

    $("#detail-plus").addEventListener("click", () => {
        quantity = Math.min(99, quantity + 1);
        refreshQuantity();
    });

    $("#detail-add").addEventListener("click", () => addToCart(product.id, quantity));

    const related = PRODUCTS.filter(item => item.category === product.category && item.id !== product.id).slice(0, 4);
    renderProductList($("#related-products"), related);
}

/* -------------------- CART PAGE -------------------- */

function renderSummary() {
    const subtotal = cartSubtotal();
    const shipping = shippingCost(subtotal);
    const total = subtotal + shipping;

    return `
    <div class="summary-card">
      <h2>Order summary</h2>
      <div class="summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
      <div class="summary-row"><span>Shipping</span><strong>${shipping === 0 ? "FREE" : money(shipping)}</strong></div>
      <div class="summary-row summary-total"><span>Total</span><strong>${money(total)}</strong></div>
      ${subtotal > 0 && subtotal < 999 ? `<p class="shipping-note">Add ${money(999 - subtotal)} more to qualify for free shipping.</p>` : ""}
      ${subtotal >= 999 ? `<p class="shipping-note">You've unlocked free shipping. Happy shopping!</p>` : ""}
      <a class="btn btn-primary btn-block" href="checkout.html">Proceed to checkout →</a>
      <a class="btn btn-light btn-block" href="shop.html" style="margin-top:10px">Continue shopping</a>
      <p style="font-size:.75rem;margin-top:15px">Demo checkout only. No real payment is collected.</p>
    </div>
  `;
}

function renderCart() {
    const container = $("#cart-content");
    if (!container) return;

    const cart = readCart();

    if (!cart.length) {
        container.innerHTML = `
      <div class="empty-cart" style="grid-column:1/-1">
        <div class="emoji">🛒</div>
        <h2>Your cart is taking a little nap.</h2>
        <p>It looks like you haven't added any goodies yet.</p>
        <a href="shop.html" class="btn btn-primary">Find something lovely</a>
      </div>
    `;
        return;
    }

    const itemsHTML = cart.map(item => {
        const product = getProduct(item.id);
        return `
      <article class="cart-item">
        <a href="product.html?id=${product.id}">${imageMarkup(product)}</a>
        <div>
          <h3><a href="product.html?id=${product.id}">${escapeHTML(product.name)}</a></h3>
          <p>${money(product.price)} each</p>
          <div class="cart-item-actions">
            <div class="quantity-control">
              <button type="button" data-qty="${product.id}" data-change="-1" aria-label="Decrease quantity">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-qty="${product.id}" data-change="1" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="remove-btn" data-remove="${product.id}">Remove</button>
          </div>
        </div>
        <div class="cart-line-total">${money(product.price * item.quantity)}</div>
      </article>
    `;
    }).join("");

    container.innerHTML = `
    <section class="cart-items">
      <h2 style="font-size:1.3rem;margin-bottom:20px">Your items (${cartCount()})</h2>
      ${itemsHTML}
    </section>
    ${renderSummary()}
  `;
}

function changeQuantity(id, delta) {
    const cart = readCart();
    const item = cart.find(row => row.id === Number(id));
    if (!item) return;

    item.quantity += delta;

    const updated = cart.filter(row => row.quantity > 0);
    if (item.quantity > 99) item.quantity = 99;

    saveCart(updated);
    renderCart();
}

/* -------------------- CHECKOUT -------------------- */

function renderCheckout() {
    const container = $("#checkout-content");
    if (!container) return;

    const cart = readCart();

    if (!cart.length) {
        container.innerHTML = `
      <div class="empty-cart" style="grid-column:1/-1">
        <div class="emoji">🐾</div>
        <h2>Your cart is empty</h2>
        <p>Add a few products before heading to checkout.</p>
        <a class="btn btn-primary" href="shop.html">Shop now</a>
      </div>
    `;
        return;
    }

    const subtotal = cartSubtotal();
    const shipping = shippingCost(subtotal);

    container.innerHTML = `
    <form id="checkout-form" class="checkout-form">
      <h2>Delivery information</h2>
      <div class="form-row">
        <div class="form-field"><label for="customer-name">Full name *</label><input id="customer-name" name="name" required autocomplete="name" maxlength="100"></div>
        <div class="form-field"><label for="customer-phone">Phone number *</label><input id="customer-phone" name="phone" type="tel" required autocomplete="tel" inputmode="tel" pattern="[0-9+() -]{10,20}" title="Enter a valid phone number"></div>
      </div>
      <div class="form-field"><label for="customer-email">Email address *</label><input id="customer-email" name="email" type="email" required autocomplete="email"></div>
      <div class="form-field"><label for="customer-address">Street address *</label><textarea id="customer-address" name="address" required autocomplete="street-address" maxlength="300"></textarea></div>
      <div class="form-row">
        <div class="form-field"><label for="customer-city">City *</label><input id="customer-city" name="city" required autocomplete="address-level2"></div>
        <div class="form-field"><label for="customer-pin">PIN code *</label><input id="customer-pin" name="pin" required inputmode="numeric" pattern="[0-9]{6}" maxlength="6" autocomplete="postal-code" title="Enter a 6-digit Indian PIN code"></div>
      </div>
      <h2 style="margin-top:10px;margin-bottom:0">Payment method</h2>
      <label class="payment-option"><input type="radio" name="payment" value="cod" checked> Cash on delivery (demo)</label>
      <label class="payment-option"><input type="radio" name="payment" value="online"> Online payment (demo only — no charge)</label>
      <p class="form-help">This demonstration does not collect payment details or transmit your personal information to a server.</p>
      <button class="btn btn-primary btn-block" type="submit">Place demo order · ${money(subtotal + shipping)}</button>
    </form>
    <aside class="summary-card">
      <h2>Your order</h2>
      ${cart.map(item => {
        const product = getProduct(item.id);
        return `<div class="summary-row"><span>${escapeHTML(product.name)} × ${item.quantity}</span><strong>${money(product.price * item.quantity)}</strong></div>`;
    }).join("")}
      <div class="summary-row" style="border-top:1px solid var(--border);padding-top:14px"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
      <div class="summary-row"><span>Shipping</span><strong>${shipping ? money(shipping) : "FREE"}</strong></div>
      <div class="summary-row summary-total"><span>Total</span><strong>${money(subtotal + shipping)}</strong></div>
      <a class="text-link" href="cart.html">← Edit cart</a>
    </aside>
  `;

    $("#checkout-form").addEventListener("submit", event => {
        event.preventDefault();

        const form = event.currentTarget;
        if (!form.reportValidity()) return;

        const orderNumber = "PP" + Date.now().toString().slice(-8);
        const formData = new FormData(form);
        const firstName = String(formData.get("name")).trim().split(/\s+/)[0];

        // This is a front-end demo; no order is sent to a server.
        saveCart([]);

        container.innerHTML = `
      <section class="order-success" style="grid-column:1/-1">
        <div class="success-icon">🎉🐾</div>
        <h2>Thank you, ${escapeHTML(firstName)}!</h2>
        <p>Your demo order has been placed successfully.</p>
        <p><strong>Demo order number:</strong> ${escapeHTML(orderNumber)}</p>
        <p><strong>Delivery address:</strong> ${escapeHTML(formData.get("city"))} · ${escapeHTML(formData.get("pin"))}</p>
        <p><strong>Payment choice:</strong> ${formData.get("payment") === "cod" ? "Cash on delivery (demo)" : "Online payment (demo; no charge)"}</p>
        <p>Your order is only simulated in this browser. No real delivery has been arranged.</p>
        <a class="btn btn-primary" href="shop.html">Continue shopping</a>
      </section>
    `;

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* -------------------- NEWSLETTER -------------------- */

function setupNewsletter() {
    const form = $("#newsletter-form");
    if (!form) return;

    form.addEventListener("submit", event => {
        event.preventDefault();
        const email = $("#newsletter-email").value.trim();

        if (!email) return;

        // Demo only: no email is sent or stored.
        form.reset();
        showToast("Thanks for your interest in Paw Paradise!");
    });
}

/* -------------------- GLOBAL CLICK HANDLER -------------------- */

document.addEventListener("click", event => {
    const addButton = event.target.closest("[data-add]");
    if (addButton) {
        addToCart(Number(addButton.dataset.add));
        return;
    }

    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) {
        const id = Number(removeButton.dataset.remove);
        saveCart(readCart().filter(item => item.id !== id));
        renderCart();
        showToast("Product removed from your cart.");
        return;
    }

    const quantityButton = event.target.closest("[data-qty]");
    if (quantityButton) {
        changeQuantity(Number(quantityButton.dataset.qty), Number(quantityButton.dataset.change));
    }
});

/* -------------------- START THE CORRECT PAGE -------------------- */

document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();

    switch (currentPage()) {
        case "index.html":
            renderHome();
            setupNewsletter();
            break;

        case "shop.html":
            renderShop();
            break;

        case "dogs.html":
            renderCategory("Dogs");
            break;

        case "cats.html":
            renderCategory("Cats");
            break;

        case "birds.html":
            renderCategory("Birds");
            break;

        case "fish.html":
            renderCategory("Fish");
            break;

        case "product.html":
            renderProductDetail();
            break;

        case "cart.html":
            renderCart();
            break;

        case "checkout.html":
            renderCheckout();
            break;
    }
});
