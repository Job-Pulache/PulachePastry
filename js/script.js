
/* ============================================================
   DATOS — Productos y Categorías
   ============================================================ */
const CATEGORIES = [
  { id: 'fechas', name: 'Para fechas especiales', icon: 'gift', img: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=500&auto=format&fit=crop', color: 'bg-rose-200' },
  { id: 'cuchareo', name: 'Para cucharear', icon: 'utensils', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=500&auto=format&fit=crop', color: 'bg-gold-300' },
  { id: 'kekes', name: 'Kekes y Galletas', icon: 'cookie', img: 'https://images.unsplash.com/photo-1499636136210-6f1ce7060e6c?q=80&w=500&auto=format&fit=crop', color: 'bg-sage-400' },
  { id: 'tortas', name: 'Tortas de Cumpleaños', icon: 'cake', img: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=500&auto=format&fit=crop', color: 'bg-rose-300' },
  { id: 'porciones', name: 'Porciones', icon: 'chart-pie', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500&auto=format&fit=crop', color: 'bg-gold-400' },
  { id: 'catering', name: 'Catering', icon: 'chef-hat', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=500&auto=format&fit=crop', color: 'bg-cocoa-400' },
];

const PRODUCTS = [
  { id: 1, name: 'Torta Red Velvet Clásica', price: 95, category: 'tortas', tag: 'Más vendida', img: 'https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=700&auto=format&fit=crop', desc: 'Bizcocho aterciopelado con frosting de queso crema.' },
  { id: 2, name: 'Tarta de Chocolate Intenso', price: 110, category: 'tortas', tag: 'Chocolate', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=700&auto=format&fit=crop', desc: 'Cacao de origen, ganache y un corazón fundente.' },
  { id: 3, name: 'Cheesecake de Maracuyá', price: 88, category: 'tortas', tag: 'Favorito', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=700&auto=format&fit=crop', desc: 'Base de galleta y un toque tropical irresistible.' },
  { id: 4, name: 'Vaso de Tres Leches', price: 18, category: 'cuchareo', tag: 'Para cucharear', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=700&auto=format&fit=crop', desc: 'Capas de bizcocho calado, crema y canela.' },
  { id: 5, name: 'Mousse de Chocolate en Vaso', price: 16, category: 'cuchareo', tag: 'Chocolate', img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=700&auto=format&fit=crop', desc: 'Espuma intensa de chocolate al 70%.' },
  { id: 6, name: 'Tiramisú Individual', price: 19, category: 'cuchareo', tag: '', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=700&auto=format&fit=crop', desc: 'Café, mascarpone y cacao en cada cuchara.' },
  { id: 7, name: 'Keke de Naranja', price: 35, category: 'kekes', tag: '', img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=700&auto=format&fit=crop', desc: 'Húmedo y aromático, con almíbar de naranja.' },
  { id: 8, name: 'Galletas de Mantequilla x12', price: 28, category: 'kekes', tag: 'Para regalar', img: 'https://images.unsplash.com/photo-1499636136210-6f1ce7060e6c?q=80&w=700&auto=format&fit=crop', desc: 'Crocantes por fuera, suaves por dentro.' },
  { id: 9, name: 'Brownies de Chocolate x6', price: 24, category: 'kekes', tag: 'Chocolate', img: 'https://images.unsplash.com/photo-1606313564315-72cd97633a37?q=80&w=700&auto=format&fit=crop', desc: 'Densos, húmedos, con nueces opcionales.' },
  { id: 10, name: 'Porción Selva Negra', price: 14, category: 'porciones', tag: '', img: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=700&auto=format&fit=crop', desc: 'Chocolate, cerezas y crema chantilly.' },
  { id: 11, name: 'Porción Red Velvet', price: 14, category: 'porciones', tag: 'Más vendida', img: 'https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=700&auto=format&fit=crop', desc: 'La porción perfecta para un antojo.' },
  { id: 12, name: 'Torta para Regalo Especial', price: 120, category: 'fechas', tag: 'Edición especial', img: 'https://images.unsplash.com/photo-1622896378866-3acfc8e1c3a0?q=80&w=700&auto=format&fit=crop', desc: 'Diseño personalizado para fechas que importan.' },
  { id: 13, name: 'Caja San Valentín', price: 65, category: 'fechas', tag: 'Edición especial', img: 'https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=700&auto=format&fit=crop', desc: 'Cupcakes y trufas en caja de regalo.' },
  { id: 14, name: 'Mesa de Postres (20 pax)', price: 380, category: 'catering', tag: 'Eventos', img: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=700&auto=format&fit=crop', desc: 'Surtido dulce para tu evento, armado en sitio.' },
  { id: 15, name: 'Catering Corporativo (30 pax)', price: 540, category: 'catering', tag: 'Eventos', img: 'https://images.unsplash.com/photo-1556905200-2c042b1d8c2c?q=80&w=700&auto=format&fit=crop', desc: 'Porciones individuales para tu oficina o evento.' },
  { id: 16, name: 'Cupcakes Decorados x6', price: 32, category: 'fechas', tag: 'Para regalar', img: 'https://images.unsplash.com/photo-1426869981800-95ebf51ce990?q=80&w=700&auto=format&fit=crop', desc: 'Decoración personalizada según la ocasión.' },
];

const RECIPES = [
  {
    title: 'Keke de naranja húmedo, sin secretos',
    img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=700&auto=format&fit=crop',
    ingredients: ['3 huevos', '1 taza de azúcar', 'Ralladura de 2 naranjas', '1/2 taza de jugo de naranja', '2 tazas de harina', '1 cda de polvo de hornear', '1/2 taza de aceite'],
    steps: ['Bate los huevos con el azúcar hasta blanquear.', 'Agrega el aceite, jugo y ralladura de naranja.', 'Incorpora la harina cernida con el polvo de hornear.', 'Hornea a 180°C por 35-40 minutos.', 'Baña tibio con almíbar de naranja recién hecho.']
  },
  {
    title: 'Galletas de mantequilla que no se desarman',
    img: 'https://images.unsplash.com/photo-1499636136210-6f1ce7060e6c?q=80&w=700&auto=format&fit=crop',
    ingredients: ['200g mantequilla fría', '1 taza de azúcar glass', '1 huevo', '2 1/2 tazas de harina', '1 cdta de esencia de vainilla', 'Pizca de sal'],
    steps: ['Bate la mantequilla fría con el azúcar hasta cremar.', 'Agrega el huevo y la vainilla.', 'Incorpora la harina y la sal, sin amasar de más.', 'Refrigera la masa 30 minutos.', 'Hornea a 170°C por 12-14 minutos.']
  },
  {
    title: 'Mousse de chocolate en 3 pasos',
    img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=700&auto=format&fit=crop',
    ingredients: ['200g chocolate al 70%', '3 claras de huevo', '200ml crema de leche fría', '2 cdas de azúcar'],
    steps: ['Derrite el chocolate a baño maría y deja enfriar un poco.', 'Bate las claras a punto de nieve con el azúcar.', 'Bate la crema a medio punto e integra todo con movimientos envolventes.', 'Refrigera mínimo 2 horas antes de servir.']
  }
];

/* ============================================================
   ESTADO GLOBAL
   ============================================================ */
let cart = [];            // { id, qty }
let favorites = [];       // [id, id, ...]
let activeFilter = 'all';
const WHATSAPP_NUMBER = '51987654321';

function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
function formatPrice(n) { return 'S/ ' + n.toFixed(2); }



/* ============================================================
   PRELOADER
   ============================================================ */
function hidePreloader() {
  const pre = document.getElementById('preloader');
  if (pre.classList.contains('fade-out')) return;
  pre.classList.add('fade-out');
  document.body.style.overflow = 'auto';
}
document.body.style.overflow = 'hidden';
setTimeout(hidePreloader, 3000);

/* ============================================================
   NAVBAR — scroll background + active link
   ============================================================ */
const navbar = document.getElementById('navbar');
function handleNavScroll() {
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(255,251,246,0.92)';
    navbar.style.backdropFilter = 'blur(12px)';
    navbar.style.boxShadow = '0 4px 30px rgba(82,54,39,0.08)';
  } else {
    navbar.style.background = 'rgba(255,251,246,0.0)';
    navbar.style.backdropFilter = 'none';
    navbar.style.boxShadow = 'none';
  }
}
window.addEventListener('scroll', handleNavScroll);
handleNavScroll();

// Active nav link on scroll
const sections = ['inicio','categorias','productos','recetas','nosotros'];
function updateActiveLink() {
  let current = 'inicio';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 140) current = id;
  }
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateActiveLink);

/* ============================================================
   SEARCH (desktop expand + live results)
   ============================================================ */
function toggleSearch() {
  const input = document.getElementById('searchInput');
  input.classList.toggle('w-0');
  input.classList.toggle('w-56');
  input.classList.toggle('opacity-0');
  input.classList.toggle('opacity-100');
  if (!input.classList.contains('w-0')) input.focus();
  else document.getElementById('searchResults').classList.add('hidden');
}
function toggleMobileSearch() {
  document.getElementById('mobileSearchBar').classList.toggle('hidden');
}

function liveSearch(query) {
  const box = document.getElementById('searchResults');
  const inner = box.querySelector('div');
  query = query.trim().toLowerCase();

  if (!query) { box.classList.add('hidden'); return; }

  const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query));

  if (matches.length === 0) {
    inner.innerHTML = `<p class="text-sm text-cocoa-400 text-center py-6">No encontramos "${query}" 🍰 prueba con otra palabra.</p>`;
  } else {
    inner.innerHTML = matches.slice(0, 6).map(p => `
      <a href="#productos" onclick="closeSearchAndScroll(${p.id})" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-rose-50 transition-colors cursor-pointer">
        <img src="${p.img}" class="w-12 h-12 rounded-lg object-cover" alt="${p.name}">
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-cocoa-700 truncate">${p.name}</p>
          <p class="text-xs text-rose-500">${formatPrice(p.price)}</p>
        </div>
      </a>
    `).join('');
  }
  box.classList.remove('hidden');
}

function closeSearchAndScroll(productId) {
  document.getElementById('searchResults').classList.add('hidden');
  document.getElementById('searchInput').value = '';
  setTimeout(() => {
    const card = document.querySelector(`[data-product-id="${productId}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('ring-4', 'ring-rose-300');
      setTimeout(() => card.classList.remove('ring-4', 'ring-rose-300'), 1500);
    }
  }, 400);
}

// Close search dropdown on outside click
document.addEventListener('click', (e) => {
  const box = document.getElementById('searchResults');
  if (!box.contains(e.target) && e.target.id !== 'searchInput') {
    box.classList.add('hidden');
  }
});

/* ============================================================
   MOBILE MENU
   ============================================================ */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');
  const isOpen = !menu.classList.contains('translate-x-full');
  if (isOpen) {
    menu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  } else {
    menu.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
  }
}


/* ============================================================
   HERO CAROUSEL
   ============================================================ */
let currentSlide = 0;
const totalSlides = 3;
let heroInterval;

function renderSlide() {
  document.querySelectorAll('.hero-slide').forEach((slide, i) => {
    if (i === currentSlide) {
      slide.style.opacity = '1';
      slide.style.transform = 'translateX(0)';
      slide.style.pointerEvents = 'auto';
    } else {
      slide.style.opacity = '0';
      slide.style.pointerEvents = 'none';
    }
  });
  document.querySelectorAll('.hero-dot').forEach((dot, i) => {
    if (i === currentSlide) {
      dot.classList.add('w-8', 'bg-cocoa-700');
      dot.classList.remove('w-2.5', 'bg-cocoa-700/30');
    } else {
      dot.classList.remove('w-8', 'bg-cocoa-700');
      dot.classList.add('w-2.5', 'bg-cocoa-700/30');
    }
  });
}

function changeSlide(dir) {
  currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
  renderSlide();
  restartHeroAutoplay();
}
function goToSlide(i) {
  currentSlide = i;
  renderSlide();
  restartHeroAutoplay();
}
function restartHeroAutoplay() {
  clearInterval(heroInterval);
  heroInterval = setInterval(() => { changeSlideAuto(); }, 5500);
}
function changeSlideAuto() {
  currentSlide = (currentSlide + 1) % totalSlides;
  renderSlide();
}
renderSlide();
restartHeroAutoplay();


/* ============================================================
   CATEGORÍAS — render + loop infinito (duplicar set)
   ============================================================ */
function renderCategories() {
  const track = document.getElementById('categoryTrack');
  const cardHTML = (cat) => `
    <button onclick="filterByCategory('${cat.id}')" class="cat-card shrink-0 w-44 md:w-52 rounded-3xl overflow-hidden relative shadow-lg shadow-cocoa-700/10 group">
      <img src="${cat.img}" alt="${cat.name}" class="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-t from-cocoa-700/80 via-cocoa-700/10 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 text-left">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full ${cat.color} mb-2">
          <i data-lucide="${cat.icon}" class="w-4 h-4 text-cocoa-700"></i>
        </span>
        <p class="font-display text-lg text-cream-50 leading-tight text-balance">${cat.name}</p>
      </div>
    </button>
  `;
  // Duplicate set for seamless marquee loop
  track.innerHTML = CATEGORIES.map(cardHTML).join('') + CATEGORIES.map(cardHTML).join('');
}

function filterByCategory(catId) {
  activeFilter = catId;
  renderFilterPills();
  renderProducts();
  document.getElementById('productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================================
   PRODUCTOS — filtros, render de cards
   ============================================================ */
function renderFilterPills() {
  const container = document.getElementById('filterPills');
  const filters = [{ id: 'all', name: 'Todos' }, ...CATEGORIES.map(c => ({ id: c.id, name: c.name }))];
  container.innerHTML = filters.map(f => `
    <button onclick="filterByCategory('${f.id}')"
      class="px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${activeFilter === f.id ? 'bg-cocoa-700 text-cream-50 border-cocoa-700' : 'bg-transparent text-cocoa-600 border-rose-200 hover:border-rose-400 hover:bg-rose-50'}">
      ${f.name}
    </button>
  `).join('');
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');
  let list = activeFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeFilter);

  if (list.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  grid.innerHTML = list.map((p, idx) => {
    const isFav = favorites.includes(p.id);
    return `
    <div class="product-card bg-cream-50 rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-xl hover:shadow-cocoa-700/10" data-product-id="${p.id}" style="animation-delay:${idx * 0.04}s">
      <div class="relative product-img-wrap aspect-square mb-3">
        <img src="${p.img}" alt="${p.name}" class="product-img w-full h-full object-cover">
        ${p.tag ? `<span class="absolute top-2.5 left-2.5 bg-cream-50/95 text-cocoa-700 text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-full">${p.tag}</span>` : ''}
        <button onclick="toggleFavorite(${p.id}, event)" class="heart-btn ${isFav ? 'active' : ''} absolute top-2.5 right-2.5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-cream-50/95 flex items-center justify-center hover:scale-110 transition-transform">
          <i data-lucide="heart" class="w-4 h-4 text-cocoa-600"></i>
        </button>
      </div>
      <h3 class="font-display text-sm md:text-base text-cocoa-700 leading-snug mb-1 line-clamp-2">${p.name}</h3>
      <p class="text-rose-500 font-semibold text-sm md:text-base mb-3">${formatPrice(p.price)}</p>
      <button onclick="addToCart(${p.id}, event)" class="w-full py-2.5 rounded-full bg-cocoa-700 text-cream-50 text-xs md:text-sm font-medium hover:bg-rose-500 transition-all duration-300 flex items-center justify-center gap-1.5">
        <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i> Agregar
      </button>
    </div>
  `}).join('');

  lucide.createIcons();
}
/* ============================================================
   FAVORITOS
   ============================================================ */
function toggleFavorite(productId, e) {
  if (e) e.stopPropagation();
  const idx = favorites.indexOf(productId);
  const btn = e ? e.currentTarget : document.querySelector(`[data-product-id="${productId}"] .heart-btn`);

  if (idx === -1) {
    favorites.push(productId);
    showToast('Agregado a favoritos ♥', 'heart');
  } else {
    favorites.splice(idx, 1);
    showToast('Eliminado de favoritos', 'heart-off');
  }

  if (btn) {
    btn.classList.toggle('active');
    btn.classList.add('pop');
    setTimeout(() => btn.classList.remove('pop'), 450);
  }

  updateFavCount();
  renderFavoritesPanel();
}

function updateFavCount() {
  const badge = document.getElementById('favCount');
  badge.textContent = favorites.length;
  if (favorites.length > 0) {
    badge.style.transform = 'scale(1)';
  } else {
    badge.style.transform = 'scale(0)';
  }
}

function renderFavoritesPanel() {
  const container = document.getElementById('favItemsContainer');
  const empty = document.getElementById('favEmptyState');

  if (favorites.length === 0) {
    container.classList.add('hidden');
    empty.classList.remove('hidden');
    return;
  }
  container.classList.remove('hidden');
  empty.classList.add('hidden');

  container.innerHTML = favorites.map(id => {
    const p = getProduct(id);
    if (!p) return '';
    return `
    <div class="flex items-center gap-3 bg-cream-100 rounded-2xl p-3">
      <img src="${p.img}" class="w-16 h-16 rounded-xl object-cover" alt="${p.name}">
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-cocoa-700 truncate">${p.name}</p>
        <p class="text-rose-500 text-sm font-semibold">${formatPrice(p.price)}</p>
      </div>
      <button onclick="addToCart(${p.id})" class="w-9 h-9 rounded-full bg-cocoa-700 text-cream-50 flex items-center justify-center hover:bg-rose-500 transition-colors shrink-0">
        <i data-lucide="shopping-bag" class="w-4 h-4"></i>
      </button>
      <button onclick="toggleFavorite(${p.id})" class="w-9 h-9 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center hover:bg-rose-200 transition-colors shrink-0">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
    </div>
  `}).join('');

  lucide.createIcons();
}

function openFavoritesPanel() {
  document.getElementById('favSidebar').classList.remove('translate-x-full');
  const overlay = document.getElementById('favOverlay');
  overlay.classList.remove('hidden');
  setTimeout(() => overlay.classList.remove('opacity-0'), 10);
  document.body.style.overflow = 'hidden';
}
function closeFavoritesPanel() {
  document.getElementById('favSidebar').classList.add('translate-x-full');
  const overlay = document.getElementById('favOverlay');
  overlay.classList.add('opacity-0');
  setTimeout(() => overlay.classList.add('hidden'), 400);
  document.body.style.overflow = 'auto';
}

/* ============================================================
   CARRITO DE COMPRAS
   ============================================================ */
function addToCart(productId, e) {
  if (e) e.stopPropagation();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  updateCartCount();
  renderCartPanel();
  showToast('Agregado al carrito 🛍️', 'shopping-bag');

  // bump animation on cart icon
  const cartBtn = document.getElementById('cartIconBtn');
  cartBtn.classList.add('bump');
  setTimeout(() => cartBtn.classList.remove('bump'), 500);
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  updateCartCount();
  renderCartPanel();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartCount();
  renderCartPanel();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = getProduct(item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function updateCartCount() {
  const badge = document.getElementById('cartCount');
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  badge.textContent = totalItems;
  badge.style.transform = totalItems > 0 ? 'scale(1)' : 'scale(0)';
}

function renderCartPanel() {
  const container = document.getElementById('cartItemsContainer');
  const empty = document.getElementById('cartEmptyState');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (cart.length === 0) {
    container.classList.add('hidden');
    empty.classList.remove('hidden');
    checkoutBtn.disabled = true;
  } else {
    container.classList.remove('hidden');
    empty.classList.add('hidden');
    checkoutBtn.disabled = false;

    container.innerHTML = cart.map(item => {
      const p = getProduct(item.id);
      if (!p) return '';
      return `
      <div class="flex items-center gap-3 bg-cream-100 rounded-2xl p-3">
        <img src="${p.img}" class="w-16 h-16 rounded-xl object-cover shrink-0" alt="${p.name}">
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-cocoa-700 truncate">${p.name}</p>
          <p class="text-rose-500 text-sm font-semibold">${formatPrice(p.price)}</p>
          <div class="flex items-center gap-2 mt-1.5">
            <button onclick="changeQty(${p.id}, -1)" class="w-6 h-6 rounded-full bg-rose-100 hover:bg-rose-200 flex items-center justify-center text-cocoa-700 transition-colors">
              <i data-lucide="minus" class="w-3 h-3"></i>
            </button>
            <span class="text-sm font-medium w-5 text-center">${item.qty}</span>
            <button onclick="changeQty(${p.id}, 1)" class="w-6 h-6 rounded-full bg-rose-100 hover:bg-rose-200 flex items-center justify-center text-cocoa-700 transition-colors">
              <i data-lucide="plus" class="w-3 h-3"></i>
            </button>
          </div>
        </div>
        <button onclick="removeFromCart(${p.id})" class="w-8 h-8 rounded-full hover:bg-rose-100 flex items-center justify-center text-cocoa-400 hover:text-rose-500 transition-colors shrink-0 self-start">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `}).join('');
  }

  const total = getCartTotal();
  document.getElementById('cartSubtotal').textContent = formatPrice(total);
  document.getElementById('cartTotal').textContent = formatPrice(total);
  lucide.createIcons();
}

function openCart() {
  document.getElementById('cartSidebar').classList.remove('translate-x-full');
  const overlay = document.getElementById('cartOverlay');
  overlay.classList.remove('hidden');
  setTimeout(() => overlay.classList.remove('opacity-0'), 10);
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartSidebar').classList.add('translate-x-full');
  const overlay = document.getElementById('cartOverlay');
  overlay.classList.add('opacity-0');
  setTimeout(() => overlay.classList.add('hidden'), 400);
  document.body.style.overflow = 'auto';
}

/* ============================================================
   CHECKOUT — WhatsApp con mensaje pre-redactado
   ============================================================ */
function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function checkoutWhatsApp() {
  if (cart.length === 0) return;

  const lines = cart.map(item => {
    const p = getProduct(item.id);
    return `• ${p.name} x${item.qty} (${formatPrice(p.price * item.qty)})`;
  }).join('\n');

  const total = getCartTotal();
  const message = `¡Hola MayPasteleria! Quiero realizar el siguiente pedido:\n${lines}\nTotal: ${formatPrice(total)}`;
  const encodedMessage = encodeURIComponent(message);

  const url = isMobileDevice()
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

  window.open(url, '_blank');
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
let toastTimeout;
function showToast(msg, icon = 'circle-check') {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  document.getElementById('toastIconWrap').innerHTML = `<i data-lucide="${icon}" class="w-4 h-4 text-rose-300"></i>`;
  lucide.createIcons();

  clearTimeout(toastTimeout);
  toast.style.transform = 'translate(-50%, 0)';
  toast.style.opacity = '1';
  toastTimeout = setTimeout(() => {
    toast.style.transform = 'translate(-50%, 6rem)';
    toast.style.opacity = '0';
  }, 2400);
}

/* ============================================================
   RECETAS — modal
   ============================================================ */
function openRecipeModal(idx) {
  const r = RECIPES[idx];
  const content = document.getElementById('recipeModalContent');
  content.innerHTML = `
    <img src="${r.img}" alt="${r.title}" class="w-full h-48 object-cover rounded-2xl mb-5">
    <h3 class="font-display text-2xl md:text-3xl text-cocoa-700 mb-4">${r.title}</h3>
    <h4 class="text-rose-500 font-semibold text-sm uppercase tracking-wide mb-2">Ingredientes</h4>
    <ul class="mb-5 space-y-1.5">
      ${r.ingredients.map(i => `<li class="text-sm text-cocoa-600 flex items-start gap-2"><span class="text-rose-400 mt-1">•</span>${i}</li>`).join('')}
    </ul>
    <h4 class="text-rose-500 font-semibold text-sm uppercase tracking-wide mb-2">Preparación</h4>
    <ol class="space-y-2.5">
      ${r.steps.map((s, i) => `<li class="text-sm text-cocoa-600 flex items-start gap-3"><span class="shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-500 font-semibold text-xs flex items-center justify-center">${i+1}</span>${s}</li>`).join('')}
    </ol>
  `;
  const overlay = document.getElementById('recipeModalOverlay');
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');
  document.body.style.overflow = 'hidden';
}
function closeRecipeModal(e) {
  // Si el clic viene de dentro del modal (propagación detenida en el contenido),
  // este handler solo se dispara al clickear el overlay o el botón X — ambos casos deben cerrar.
  const overlay = document.getElementById('recipeModalOverlay');
  overlay.classList.add('hidden');
  overlay.classList.remove('flex');
  document.body.style.overflow = 'auto';
}

/* ============================================================
   E-BOOK (descarga ficticia)
   ============================================================ */
function downloadEbook() {
  showToast('¡Revisa tu correo! 📩 (demo)', 'mail-check');
}

/* ============================================================
   SCROLL REVEAL ANIMATIONS
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function initRevealObserver() {
  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
}

/* ============================================================
   CHATBOT — "Migas" asistente de recomendaciones
   ============================================================ */
let chatOpen = false;
let chatHasOpenedOnce = false;

const CHAT_FLOWS = {
  start: {
    bot: "¡Hola! Soy Migas 🍪, tu asistente dulce. ¿En qué te puedo ayudar hoy?",
    options: [
      { label: '🎁 Algo para regalar', next: 'regalo' },
      { label: '🍫 Algo de chocolate', next: 'chocolate' },
      { label: '🎂 Necesito una torta', next: 'torta' },
      { label: '💬 Hablar con Maryury', next: 'humano' },
    ]
  },
  regalo: {
    bot: "¡Qué lindo detalle! Para regalar, nuestras favoritas son las cajas especiales y las galletas decoradas. Aquí va mi recomendación:",
    product: 13,
    options: [
      { label: 'Ver más opciones de regalo', next: 'regalo2' },
      { label: '⬅ Volver al inicio', next: 'start' },
    ]
  },
  regalo2: {
    bot: "También puedes sorprender con cupcakes personalizados, perfectos para cualquier ocasión:",
    product: 16,
    options: [
      { label: '⬅ Volver al inicio', next: 'start' },
    ]
  },
  chocolate: {
    bot: "¡Excelente elección! El chocolate es nuestra especialidad. Te recomiendo esto:",
    product: 2,
    options: [
      { label: 'Quiero algo más pequeño', next: 'chocolate2' },
      { label: '⬅ Volver al inicio', next: 'start' },
    ]
  },
  chocolate2: {
    bot: "Perfecto, una porción individual o un mousse en vaso son ideales para un antojo rápido:",
    product: 5,
    options: [
      { label: '⬅ Volver al inicio', next: 'start' },
    ]
  },
  torta: {
    bot: "¡Las tortas son mi parte favorita! Cuéntame, ¿es para una ocasión especial o un antojo del día?",
    options: [
      { label: '🎉 Ocasión especial', next: 'tortaEspecial' },
      { label: '🍰 Antojo del día', next: 'tortaAntojo' },
      { label: '⬅ Volver al inicio', next: 'start' },
    ]
  },
  tortaEspecial: {
    bot: "Para fechas especiales te encantará esta opción, totalmente personalizable:",
    product: 12,
    options: [
      { label: '⬅ Volver al inicio', next: 'start' },
    ]
  },
  tortaAntojo: {
    bot: "Nuestra Red Velvet clásica nunca falla. ¡Es la más pedida!",
    product: 1,
    options: [
      { label: '⬅ Volver al inicio', next: 'start' },
    ]
  },
  humano: {
    bot: "Con gusto te conecto directo con Maryury por WhatsApp para una atención más personal 💛",
    options: [
      { label: '📲 Abrir WhatsApp', action: 'whatsapp' },
      { label: '⬅ Volver al inicio', next: 'start' },
    ]
  }
};

function toggleChat() {
  chatOpen = !chatOpen;
  const win = document.getElementById('chatWindow');
  const iconOpen = document.getElementById('chatIconOpen');
  const iconClose = document.getElementById('chatIconClose');
  const ping = document.getElementById('chatPing');

  if (chatOpen) {
    win.classList.remove('hidden');
    setTimeout(() => { win.classList.remove('opacity-0', 'scale-90'); }, 10);
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
    ping.classList.add('hidden');
    if (!chatHasOpenedOnce) {
      chatHasOpenedOnce = true;
      renderChatStep('start');
    }
  } else {
    win.classList.add('opacity-0', 'scale-90');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    setTimeout(() => { win.classList.add('hidden'); }, 350);
  }
}

function chatAppendBubble(html, fromUser = false) {
  const container = document.getElementById('chatMessages');
  const wrap = document.createElement('div');
  wrap.className = fromUser ? 'flex justify-end' : 'flex justify-start';
  wrap.innerHTML = html;
  container.appendChild(wrap);
  container.scrollTop = container.scrollHeight;
}

function chatShowTyping(callback) {
  const container = document.getElementById('chatMessages');
  const typing = document.createElement('div');
  typing.className = 'flex justify-start';
  typing.id = 'typingIndicator';
  typing.innerHTML = `<div class="chat-bubble-bot px-4 py-3 flex gap-1.5"><span class="w-1.5 h-1.5 bg-cocoa-400 rounded-full typing-dot"></span><span class="w-1.5 h-1.5 bg-cocoa-400 rounded-full typing-dot"></span><span class="w-1.5 h-1.5 bg-cocoa-400 rounded-full typing-dot"></span></div>`;
  container.appendChild(typing);
  container.scrollTop = container.scrollHeight;
  setTimeout(() => {
    const el = document.getElementById('typingIndicator');
    if (el) el.remove();
    callback();
  }, 700);
}

function renderChatStep(stepKey, userLabel = null) {
  if (userLabel) {
    chatAppendBubble(`<div class="chat-bubble-user px-4 py-2.5 max-w-[80%] text-sm">${userLabel}</div>`, true);
  }

  const optionsContainer = document.getElementById('chatOptionsContainer');
  optionsContainer.innerHTML = '';

  chatShowTyping(() => {
    const step = CHAT_FLOWS[stepKey];

    chatAppendBubble(`<div class="chat-bubble-bot px-4 py-2.5 max-w-[85%] text-sm text-cocoa-700">${step.bot}</div>`);

    if (step.product) {
      const p = getProduct(step.product);
      setTimeout(() => {
        chatAppendBubble(`
          <div class="chat-bubble-bot p-3 max-w-[85%]">
            <img src="${p.img}" alt="${p.name}" class="w-full h-32 object-cover rounded-xl mb-2">
            <p class="text-sm font-medium text-cocoa-700">${p.name}</p>
            <p class="text-rose-500 text-sm font-semibold mb-2">${formatPrice(p.price)}</p>
            <button onclick="addToCart(${p.id}); " class="w-full py-2 rounded-full bg-cocoa-700 text-cream-50 text-xs font-medium hover:bg-rose-500 transition-colors">Agregar al carrito</button>
          </div>
        `);
      }, 350);
    }

    // Render option buttons after a short delay so they appear after bot message
    setTimeout(() => {
      optionsContainer.innerHTML = step.options.map(opt => `
        <button class="chat-option-btn text-xs px-3.5 py-2 rounded-full border border-rose-300 text-cocoa-600 bg-cream-50"
          onclick='handleChatOption(${JSON.stringify(opt).replace(/'/g, "&#39;")})'>
          ${opt.label}
        </button>
      `).join('');
      lucide.createIcons();
    }, step.product ? 500 : 100);
  });
}

function handleChatOption(opt) {
  if (opt.action === 'whatsapp') {
    chatAppendBubble(`<div class="chat-bubble-user px-4 py-2.5 max-w-[80%] text-sm">${opt.label}</div>`, true);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Maryury, vengo del chat de la web y quisiera más información 😊')}`, '_blank');
    document.getElementById('chatOptionsContainer').innerHTML = `
      <button class="chat-option-btn text-xs px-3.5 py-2 rounded-full border border-rose-300 text-cocoa-600 bg-cream-50" onclick="renderChatStep('start')">⬅ Volver al inicio</button>
    `;
    return;
  }
  renderChatStep(opt.next, opt.label);
}



/* ============================================================
   INIT — se ejecuta al cargar el DOM
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  renderCategories();
  renderFilterPills();
  renderProducts();
  updateCartCount();
  updateFavCount();
  renderCartPanel();
  renderFavoritesPanel();
  initRevealObserver();
  lucide.createIcons();

  // small delayed ping pulse for chat button to draw attention
  setTimeout(() => {
    const ping = document.getElementById('chatPing');
    if (ping && !chatOpen) ping.classList.add('animate-pulse');
  }, 4000);
});

// Re-run lucide icons after late content swaps just in case
window.addEventListener('load', () => lucide.createIcons());
