/* ============================================
   CampusHub — app.js
   ============================================ */

// ---- App State ----
const state = {
  currentPage: 'landing',
  isLoggedIn: false,
  user: null,
  cart: [],
  wishlist: new Set(),
  currentFilter: 'all',
  currentPostFilter: 'all',
  chatTarget: 'Priya S.',
};

// ---- Sample Data ----
const products = [
  { id: 1, title: 'iPhone 13 128GB', price: 42000, originalPrice: 79900, category: 'electronics', condition: 'good', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&h=300&fit=crop', seller: 'Rahul S.', college: 'NIT Trichy', desc: 'Excellent condition. Comes with original box, cable, and charger. Minor scratches on back. Battery health 91%.' },
  { id: 2, title: 'Engineering Mathematics Vol.2', price: 180, originalPrice: 450, category: 'books', condition: 'fair', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop', seller: 'Anjali K.', college: 'NIT Trichy', desc: 'Some pencil marks inside. All content readable. Perfect for 2nd year exams.' },
  { id: 3, title: 'Study Desk & Chair Set', price: 2200, originalPrice: 5000, category: 'furniture', condition: 'good', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop', seller: 'Deepak M.', college: 'NIT Trichy', desc: 'Solid wood desk with chair. Minor dent on one side. Leaving campus so selling urgently.' },
  { id: 4, title: 'Hero Cycle (Mountain)', price: 2800, originalPrice: 8000, category: 'vehicles', condition: 'good', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', seller: 'Sneha R.', college: 'NIT Trichy', desc: 'All gears working. Recently serviced brakes and chain. Perfect for campus commuting.' },
  { id: 5, title: 'Dell XPS 13 Laptop', price: 58000, originalPrice: 120000, category: 'electronics', condition: 'new', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop', seller: 'Priya S.', college: 'NIT Trichy', desc: 'Bought 6 months ago. i7 11th gen, 16GB RAM, 512GB SSD. Comes with original bag and charger.' },
  { id: 6, title: 'Acoustic Guitar', price: 3500, originalPrice: 8000, category: 'misc', condition: 'good', img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop', seller: 'Arjun T.', college: 'NIT Trichy', desc: 'Yamaha F280 acoustic guitar. Great sound. Comes with a bag and capo.' },
  { id: 7, title: 'Data Structures Book (Cormen)', price: 320, originalPrice: 1200, category: 'books', condition: 'good', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop', seller: 'Meera V.', college: 'NIT Trichy', desc: 'Introduction to Algorithms 3rd Ed. A few highlighted sections. Otherwise pristine.' },
  { id: 8, title: 'JBL Bluetooth Speaker', price: 1800, originalPrice: 4000, category: 'electronics', condition: 'good', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop', seller: 'Karan B.', college: 'NIT Trichy', desc: 'JBL Go 3. Waterproof. Works perfectly. Selling because upgrading.' },
  { id: 9, title: 'Mini Fridge (120L)', price: 4500, originalPrice: 11000, category: 'furniture', condition: 'fair', img: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&h=300&fit=crop', seller: 'Ritu P.', college: 'NIT Trichy', desc: 'Good working condition. Cools well. Plastic cover on inside door missing.' },
  { id: 10, title: 'Samsung Galaxy Watch', price: 6500, originalPrice: 18000, category: 'electronics', condition: 'good', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop', seller: 'Vikas D.', college: 'NIT Trichy', desc: 'Galaxy Watch 4. 44mm. 2 straps included. Battery life great.' },
  { id: 11, title: 'Dumbbell Set (10kg pair)', price: 900, originalPrice: 2000, category: 'misc', condition: 'good', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop', seller: 'Akash N.', college: 'NIT Trichy', desc: 'Iron dumbbells 10kg each. Great condition, no rust.' },
  { id: 12, title: 'Chemistry NCERT + Reference', price: 150, originalPrice: 600, category: 'books', condition: 'fair', img: 'https://images.unsplash.com/photo-1532094349884-543559059a6e?w=400&h=300&fit=crop', seller: 'Divya K.', college: 'NIT Trichy', desc: 'Class 12 chemistry set. Notes inside. Very helpful for competitive exams.' },
];

const communityPosts = [
  { id: 1, author: 'Tech Club', avatar: 'TC', color: '#6c47ff', tag: 'event', tagLabel: '🎉 Event', title: 'TechFest 2025 — Registration Open!', content: 'Annual tech fest is here! Register for hackathons, robotics, coding contests and more. Last date: May 14. Prizes worth ₹5 lakhs!', likes: 84, comments: 23, time: '2h ago' },
  { id: 2, author: 'Priya Singh', avatar: 'PS', color: '#00d4aa', tag: 'internship', tagLabel: '💼 Internship', title: 'Google Summer Intern — Applications Open', content: 'Google is hiring SWE interns for Summer 2025. ₹80K/month stipend. Deadline: May 20. Apply via careers.google.com. 3rd year+ preferred.', likes: 212, comments: 47, time: '4h ago' },
  { id: 3, author: 'Music Club', avatar: 'MC', color: '#ff6b35', tag: 'ticket', tagLabel: '🎫 Ticket', title: 'Campus Music Night Tickets Available', content: 'Get your tickets for the annual Campus Music Night on May 20! Live bands, open mic, and DJ night. ₹50 per ticket. DM for details.', likes: 56, comments: 12, time: '6h ago' },
  { id: 4, author: 'Placement Cell', avatar: 'PC', color: '#ffb547', tag: 'announce', tagLabel: '📢 Announcement', title: 'Amazon Off-Campus Drive — May 25', content: 'Amazon will conduct an off-campus recruitment drive for 2025 graduates. Eligible branches: CS, IT, ECE. Register at placement office by May 15.', likes: 340, comments: 91, time: '1d ago' },
  { id: 5, author: 'Rahul Sharma', avatar: 'RS', color: '#6c47ff', tag: 'opportunity', tagLabel: '🚀 Opportunity', title: 'Research Assistant Position — Prof. Kumar Lab', content: 'Prof. Sanjay Kumar\'s ML Lab is looking for research assistants for a computer vision project. Stipend: ₹5K/month. Mail your CV to: kumar@nit.ac.in', likes: 48, comments: 16, time: '2d ago' },
];

const restaurants = [
  { id: 1, name: 'Campus Café', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=250&fit=crop', type: 'Indian & Snacks', distance: 'On-Campus', time: '15 min', rating: 4.5, open: true, tags: ['Veg', 'Snacks', 'Tea'], menu: [
    { name: 'Masala Dosa', price: 60, img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=80&h=80&fit=crop' },
    { name: 'Veg Biryani', price: 110, img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=80&h=80&fit=crop' },
    { name: 'Cold Coffee', price: 50, img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=80&h=80&fit=crop' },
    { name: 'Samosa (2pcs)', price: 20, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=80&h=80&fit=crop' },
  ]},
  { id: 2, name: 'Pizza Point', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=250&fit=crop', type: 'Fast Food', distance: '0.8km', time: '25 min', rating: 4.2, open: true, tags: ['Pizza', 'Pasta', 'Burgers'], menu: [
    { name: 'Margherita Pizza', price: 180, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=80&h=80&fit=crop' },
    { name: 'Chicken Burger', price: 130, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop' },
    { name: 'French Fries', price: 70, img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=80&h=80&fit=crop' },
    { name: 'Cold Drink', price: 40, img: 'https://images.unsplash.com/photo-1596803244897-e73a548dfd6a?w=80&h=80&fit=crop' },
  ]},
  { id: 3, name: 'Darshini South', img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=500&h=250&fit=crop', type: 'South Indian', distance: '1.2km', time: '30 min', rating: 4.7, open: true, tags: ['Idli', 'Vada', 'Biryani'], menu: [
    { name: 'Idli (3pcs)', price: 45, img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=80&h=80&fit=crop' },
    { name: 'Medu Vada (2pcs)', price: 40, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80&h=80&fit=crop' },
    { name: 'Chicken Biryani', price: 150, img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=80&h=80&fit=crop' },
    { name: 'Filter Coffee', price: 30, img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=80&h=80&fit=crop' },
  ]},
  { id: 4, name: 'Chai Stop', img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&h=250&fit=crop', type: 'Beverages & Snacks', distance: 'On-Campus', time: '10 min', rating: 4.3, open: true, tags: ['Tea', 'Snacks', 'Healthy'], menu: [
    { name: 'Masala Chai', price: 15, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=80&h=80&fit=crop' },
    { name: 'Sandwich', price: 50, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=80&h=80&fit=crop' },
    { name: 'Maggi', price: 40, img: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=80&h=80&fit=crop' },
    { name: 'Boiled Eggs (2)', price: 25, img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=80&h=80&fit=crop' },
  ]},
  { id: 5, name: 'Midnight Bites', img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=250&fit=crop', type: 'Fast Food & Wraps', distance: '1.8km', time: '35 min', rating: 4.0, open: false, tags: ['Wraps', 'Rolls', 'Night'], menu: [
    { name: 'Paneer Roll', price: 90, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=80&h=80&fit=crop' },
    { name: 'Chicken Kathi Roll', price: 110, img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=80&h=80&fit=crop' },
    { name: 'Chocolate Shake', price: 80, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=80&h=80&fit=crop' },
    { name: 'Falafel Wrap', price: 100, img: 'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=80&h=80&fit=crop' },
  ]},
  { id: 6, name: 'The Salad Bar', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=250&fit=crop', type: 'Healthy & Organic', distance: '0.5km', time: '20 min', rating: 4.6, open: true, tags: ['Vegan', 'Healthy', 'Salads'], menu: [
    { name: 'Classic Caesar', price: 140, img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=80&h=80&fit=crop' },
    { name: 'Quinoa Bowl', price: 160, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80&h=80&fit=crop' },
    { name: 'Green Smoothie', price: 90, img: 'https://images.unsplash.com/photo-1553530666-ba11a90a3abe?w=80&h=80&fit=crop' },
    { name: 'Fruit Bowl', price: 80, img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=80&h=80&fit=crop' },
  ]},
];

const rentals = [
  { id: 1, title: 'Hero Cycle', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=240&fit=crop', owner: 'Deepak S.', priceDay: 30, priceWeek: 150, priceMonth: 500, availability: 80, category: 'vehicles' },
  { id: 2, title: 'Casio Keyboard', img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=240&fit=crop', owner: 'Music Club', priceDay: 80, priceWeek: 400, priceMonth: 1200, availability: 60, category: 'instruments' },
  { id: 3, title: 'DSLR Canon 200D', img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=240&fit=crop', owner: 'Photo Club', priceDay: 200, priceWeek: 1000, priceMonth: 3500, availability: 40, category: 'electronics' },
  { id: 4, title: 'Thermodynamics (Cengel)', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=240&fit=crop', owner: 'Arjun T.', priceDay: 5, priceWeek: 25, priceMonth: 80, availability: 100, category: 'books' },
  { id: 5, title: 'Activa 6G Scooter', img: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&h=240&fit=crop', owner: 'Rahul S.', priceDay: 150, priceWeek: 700, priceMonth: 2500, availability: 70, category: 'vehicles' },
  { id: 6, title: 'Drone (DJI Mini 3)', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=240&fit=crop', owner: 'Robotics Club', priceDay: 350, priceWeek: 1800, priceMonth: 5000, availability: 30, category: 'electronics' },
];

const chats = [
  { id: 1, name: 'Priya S.', initial: 'P', color: '#6c47ff', lastMsg: 'Is the guitar still available?', time: '2h', unread: true, subject: '🎸 Guitar' },
  { id: 2, name: 'Deepak M.', initial: 'D', color: '#00d4aa', lastMsg: 'Can you reduce the price a bit?', time: '5h', unread: true, subject: '🪑 Desk & Chair' },
  { id: 3, name: 'Sneha R.', initial: 'S', color: '#ff6b35', lastMsg: 'Cycle is available tomorrow.', time: '1d', unread: false, subject: '🚲 Cycle' },
  { id: 4, name: 'Campus Café', initial: 'C', color: '#ffb547', lastMsg: 'Your order has been delivered!', time: '2d', unread: false, subject: '🍕 Order' },
];

const chatMessages = [
  { id: 1, from: 'them', text: 'Hey! Is the guitar still available?', time: '2:30 PM' },
  { id: 2, from: 'me', text: 'Yes it is! Are you interested?', time: '2:32 PM' },
  { id: 3, from: 'them', text: 'Yes! Can you do ₹3000? I\'m a bit short on budget 😅', time: '2:33 PM' },
  { id: 4, from: 'me', text: 'I can do ₹3,200. That\'s the best I can do honestly.', time: '2:35 PM' },
  { id: 5, from: 'them', text: 'Deal! When can I come see it?', time: '2:36 PM' },
  { id: 6, from: 'me', text: 'Tomorrow evening after 5pm works for me. Meet at the main gate?', time: '2:38 PM' },
];

// ============================================
// PAGE NAVIGATION
// ============================================
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) {
    page.classList.add('active');
    window.scrollTo(0, 0);
  }
  state.currentPage = pageId;
  updateNavActive(pageId);

  // Initialize sections
  if (pageId === 'marketplace') renderProducts(products);
  if (pageId === 'community') renderCommunity(communityPosts);
  if (pageId === 'food') renderRestaurants(restaurants);
  if (pageId === 'rentals') renderRentals(rentals);
  if (pageId === 'messages') renderMessages();
}

function updateNavActive(pageId) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const link = document.getElementById('nav-' + pageId);
  if (link) link.classList.add('active');
}

// ============================================
// THEME
// ============================================
function toggleTheme() {
  const html = document.documentElement;
  const isLight = html.getAttribute('data-theme') === 'light';
  html.setAttribute('data-theme', isLight ? 'dark' : 'light');
  document.getElementById('themeBtn').textContent = isLight ? '🌙' : '☀️';
}

// ============================================
// MOBILE NAV
// ============================================
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// ============================================
// AUTH
// ============================================
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const college = 'NIT Trichy';
  const name = email.split('@')[0];
  loginUser({ name, email, college });
}

function handleSignup(e) {
  e.preventDefault();
  const first = document.getElementById('signupFirst').value;
  const last = document.getElementById('signupLast').value;
  const email = document.getElementById('signupEmail').value;
  const college = document.getElementById('signupCollege').value;
  loginUser({ name: `${first} ${last}`, email, college });
}

function loginUser(user) {
  state.isLoggedIn = true;
  state.user = user;
  // Update navbar
  document.getElementById('navLoginBtn').style.display = 'none';
  document.getElementById('navSignupBtn').style.display = 'none';
  document.getElementById('navAvatar').style.display = 'flex';
  document.getElementById('navAvatar').textContent = user.name[0].toUpperCase();
  // Update dashboard
  document.getElementById('dashUsername').textContent = user.name.split(' ')[0];
  document.getElementById('dashCollege').textContent = `${user.college} · Verified Student`;
  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileEmail').textContent = `${user.email}`;
  document.getElementById('profileInitial').textContent = user.name[0].toUpperCase();
  document.getElementById('profileCollege').textContent = user.college;
  showToast(`Welcome, ${user.name.split(' ')[0]}! 🎓`, '✅');
  showPage('dashboard');
}

function handleLogout() {
  state.isLoggedIn = false;
  state.user = null;
  document.getElementById('navLoginBtn').style.display = '';
  document.getElementById('navSignupBtn').style.display = '';
  document.getElementById('navAvatar').style.display = 'none';
  showToast('Logged out. See you soon!', '👋');
  showPage('landing');
}

// ============================================
// MARKETPLACE
// ============================================
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><h3>No listings found</h3><p>Try adjusting your search or filters.</p></div>`;
    return;
  }
  grid.innerHTML = list.map(p => `
    <div class="product-card" onclick="openProductDetail(${p.id})">
      <div class="product-img" style="padding:0;background:#f0f0f0;">
        <img src="${p.img}" alt="${p.title}" style="width:100%;height:190px;object-fit:cover;display:block;" loading="lazy" onerror="this.style.display='none';this.parentElement.style.fontSize='3rem';this.parentElement.innerHTML+='📦'"/>
        <span class="product-condition ${conditionClass(p.condition)}">${p.condition}</span>
        <button class="wishlist-btn ${state.wishlist.has(p.id) ? 'saved' : ''}" onclick="toggleWishlist(event,${p.id})">${state.wishlist.has(p.id) ? '❤️' : '🤍'}</button>
      </div>
      <div class="product-info">
        <h3>${p.title}</h3>
        <div class="product-price">₹${p.price.toLocaleString()} <span class="original">₹${p.originalPrice.toLocaleString()}</span></div>
        <div class="product-meta">
          <span class="product-seller">👤 ${p.seller}</span>
          <span class="product-college">📍 ${p.college}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function conditionClass(c) {
  if (c === 'new') return 'condition-new';
  if (c === 'good') return 'condition-good';
  return 'condition-fair';
}

function filterProducts(q) {
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(q.toLowerCase()) ||
    p.category.toLowerCase().includes(q.toLowerCase()) ||
    p.seller.toLowerCase().includes(q.toLowerCase())
  );
  renderProducts(filtered);
}

function filterByCategory(el, cat) {
  document.querySelectorAll('#page-marketplace .cat-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  state.currentFilter = cat;
  const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
  renderProducts(filtered);
}

function sortProducts(val) {
  let sorted = [...products];
  if (state.currentFilter !== 'all') sorted = sorted.filter(p => p.category === state.currentFilter);
  if (val === 'Price: Low to High') sorted.sort((a,b) => a.price - b.price);
  else if (val === 'Price: High to Low') sorted.sort((a,b) => b.price - a.price);
  renderProducts(sorted);
}

function toggleWishlist(e, id) {
  e.stopPropagation();
  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
    showToast('Removed from wishlist', '🤍');
  } else {
    state.wishlist.add(id);
    showToast('Added to wishlist!', '❤️');
  }
  renderProducts(state.currentFilter === 'all' ? products : products.filter(p => p.category === state.currentFilter));
}

function openProductDetail(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('pdTitle').textContent = p.title;
  document.getElementById('pdBody').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
      <div style="border-radius:var(--radius);overflow:hidden;height:240px;background:#f0f0f0;">
        <img src="${p.img}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<div style=font-size:5rem;display:flex;align-items:center;justify-content:center;height:100%>📦</div>'"/>
      </div>
      <div>
        <div class="product-price" style="font-size:1.8rem;margin-bottom:8px;">₹${p.price.toLocaleString()}</div>
        <p style="color:var(--text3);font-size:0.85rem;text-decoration:line-through;margin-bottom:12px;">MRP ₹${p.originalPrice.toLocaleString()}</p>
        <span class="product-condition ${conditionClass(p.condition)}">${p.condition}</span>
        <div class="divider"></div>
        <p style="color:var(--text2);font-size:0.9rem;margin-bottom:16px;">${p.desc}</p>
        <div style="display:flex;gap:8px;margin-bottom:16px;">
          <span class="chip">📍 ${p.college}</span>
          <span class="chip">👤 ${p.seller}</span>
        </div>
        <div style="display:flex;gap:10px;">
          <button class="btn btn-primary" style="flex:1" onclick="closeModal('productDetailModal');showPage('messages');showToast('Chat opened with ${p.seller}','💬')">💬 Chat with Seller</button>
          <button class="btn btn-ghost btn-icon" onclick="toggleWishlist(event,${p.id})">${state.wishlist.has(p.id)?'❤️':'🤍'}</button>
        </div>
      </div>
    </div>
  `;
  openModal('productDetailModal');
}

// ============================================
// COMMUNITY
// ============================================
function renderCommunity(list) {
  const feed = document.getElementById('communityFeed');
  if (!feed) return;
  if (!list.length) {
    feed.innerHTML = `<div class="empty-state"><div class="empty-icon">📭</div><h3>No posts yet</h3><p>Be the first to post something!</p></div>`;
    return;
  }
  feed.innerHTML = list.map(p => `
    <div class="post-card" id="post-${p.id}">
      <div class="post-header">
        <div class="post-avatar" style="background:${p.color}20;color:${p.color}">${p.avatar}</div>
        <div class="post-meta">
          <strong>${p.author}</strong>
          <span>${p.time} · 📍 NIT Trichy</span>
        </div>
        <span class="post-tag tag-${p.tag}">${p.tagLabel}</span>
      </div>
      <div class="post-content">
        <h4>${p.title}</h4>
        <p>${p.content}</p>
      </div>
      <div class="post-actions">
        <div class="post-action-btn" onclick="likePost(${p.id},this)">
          <span>🤍</span> <span class="like-count">${p.likes}</span> Likes
        </div>
        <div class="post-action-btn" onclick="showToast('Comments coming soon!','💬')">
          💬 ${p.comments} Comments
        </div>
        <div class="post-action-btn" onclick="showToast('Shared!','📤')">📤 Share</div>
        <div class="post-action-btn" style="margin-left:auto;" onclick="showToast('Post bookmarked!','🔖')">🔖</div>
      </div>
    </div>
  `).join('');
}

function filterPosts(el, type) {
  document.querySelectorAll('#page-community .cat-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  state.currentPostFilter = type;
  const filtered = type === 'all' ? communityPosts : communityPosts.filter(p => p.tag === type);
  renderCommunity(filtered);
}

function likePost(id, btn) {
  const post = communityPosts.find(p => p.id === id);
  if (!post) return;
  const isLiked = btn.classList.contains('liked');
  if (isLiked) {
    post.likes--;
    btn.classList.remove('liked');
    btn.querySelector('span').textContent = '🤍';
  } else {
    post.likes++;
    btn.classList.add('liked');
    btn.querySelector('span').textContent = '❤️';
  }
  btn.querySelector('.like-count').textContent = post.likes;
}

// ============================================
// FOOD
// ============================================
function renderRestaurants(list) {
  const grid = document.getElementById('restaurantsGrid');
  if (!grid) return;
  grid.innerHTML = list.map(r => `
    <div class="restaurant-card" onclick="openRestaurant(${r.id})">
      <div class="restaurant-img" style="padding:0;background:#f0f0f0;">
        <img src="${r.img}" alt="${r.name}" style="width:100%;height:160px;object-fit:cover;display:block;" loading="lazy" onerror="this.style.display='none'"/>
        <span class="restaurant-badge ${r.open ? '' : 'closed'}">${r.open ? '🟢 Open' : '🔴 Closed'}</span>
      </div>
      <div class="restaurant-info">
        <h3>${r.name}</h3>
        <div class="restaurant-meta">
          <span>⭐ ${r.rating}</span>
          <span>📍 ${r.distance}</span>
          <span>⏱️ ${r.time}</span>
        </div>
        <div class="restaurant-tags">
          ${r.tags.map(t => `<span class="r-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function openRestaurant(id) {
  const r = restaurants.find(x => x.id === id);
  if (!r) return;
  document.getElementById('restName').textContent = `${r.emoji} ${r.name}`;
  document.getElementById('restMenuBody').innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--border2);">
      <span class="chip">⭐ ${r.rating}</span>
      <span class="chip">📍 ${r.distance}</span>
      <span class="chip">⏱️ ${r.time}</span>
      <span class="chip" style="margin-left:auto;">₹20 platform fee</span>
    </div>
    <h4 style="font-family:var(--font-display);font-weight:700;margin-bottom:16px;">Menu</h4>
    <div style="display:flex;flex-direction:column;gap:12px;">
      ${r.menu.map(item => `
        <div style="display:flex;align-items:center;gap:14px;background:var(--bg3);border-radius:var(--radius-sm);padding:12px 16px;">
          <img src="${item.img}" alt="${item.name}" style="width:60px;height:60px;border-radius:10px;object-fit:cover;flex-shrink:0;" loading="lazy" onerror="this.style.display='none'"/>
          <div style="flex:1">
            <strong style="font-size:0.95rem;">${item.name}</strong>
          </div>
          <div style="font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:var(--primary-light);margin-right:12px;">₹${item.price}</div>
          <button class="btn btn-primary btn-sm" onclick="addToCart('${item.name}',${item.price},'${r.name}')">+ Add</button>
        </div>
      `).join('')}
    </div>
  `;
  openModal('restaurantModal');
}

function addToCart(name, price, restaurant) {
  const existing = state.cart.find(i => i.name === name);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ name, price, restaurant, qty: 1 });
  }
  updateCart();
  showToast(`${name} added to cart!`, '🛒');
}

function updateCart() {
  const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0) + 20;
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartTotal').textContent = `₹${total}`;
  document.getElementById('cartCount').textContent = count;
  const cf = document.getElementById('cartFloat');
  if (count > 0) cf.classList.add('visible');
  else cf.classList.remove('visible');
}

function renderCart() {
  const body = document.getElementById('cartBody');
  if (!state.cart.length) {
    body.innerHTML = `<div class="empty-state"><div class="empty-icon">🛒</div><h3>Cart is empty</h3><p>Add items from a restaurant.</p></div>`;
    return;
  }
  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  body.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">
      ${state.cart.map((item, idx) => `
        <div style="display:flex;align-items:center;gap:12px;background:var(--bg3);border-radius:var(--radius-sm);padding:12px 14px;">
          <div style="flex:1"><strong style="font-size:0.9rem;">${item.name}</strong><br/><span class="text-sm text-muted">${item.restaurant}</span></div>
          <div style="display:flex;align-items:center;gap:8px;">
            <button class="btn btn-ghost btn-sm btn-icon" style="width:28px;height:28px;font-size:1rem;" onclick="changeQty(${idx},-1)">−</button>
            <span style="font-weight:700;min-width:20px;text-align:center;">${item.qty}</span>
            <button class="btn btn-ghost btn-sm btn-icon" style="width:28px;height:28px;font-size:1rem;" onclick="changeQty(${idx},1)">+</button>
          </div>
          <span style="font-family:var(--font-display);font-weight:700;color:var(--primary-light);min-width:60px;text-align:right;">₹${item.price * item.qty}</span>
        </div>
      `).join('')}
    </div>
    <div style="background:var(--bg3);border-radius:var(--radius-sm);padding:16px;margin-bottom:20px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:0.9rem;"><span>Subtotal</span><span>₹${subtotal}</span></div>
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:0.9rem;color:var(--text3)"><span>Platform Fee (delivery + packaging)</span><span>₹20</span></div>
      <div class="divider"></div>
      <div style="display:flex;justify-content:space-between;font-family:var(--font-display);font-size:1.1rem;font-weight:800;"><span>Total</span><span>₹${subtotal + 20}</span></div>
    </div>
    <button class="btn btn-primary btn-block btn-lg" onclick="placeOrder()">Place Order 🚀</button>
  `;
}

function changeQty(idx, delta) {
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
  updateCart();
  renderCart();
}

function placeOrder() {
  state.cart = [];
  updateCart();
  closeModal('cartModal');
  showToast('Order placed! Estimated delivery 20 min 🚀', '✅');
}

// ============================================
// RENTALS
// ============================================
function renderRentals(list) {
  const grid = document.getElementById('rentalsGrid');
  if (!grid) return;
  grid.innerHTML = list.map(r => `
    <div class="rental-card">
      <div class="rental-img" style="padding:0;background:#f0f0f0;">
        <img src="${r.img}" alt="${r.title}" style="width:100%;height:180px;object-fit:cover;display:block;" loading="lazy" onerror="this.style.display='none'"/>
      </div>
      <div class="rental-info">
        <h3>${r.title}</h3>
        <p class="text-sm text-muted" style="margin-bottom:8px;">By ${r.owner}</p>
        <div class="rental-price"><span class="amount">₹${r.priceDay}</span><span class="per">/day</span></div>
        <div class="rental-options">
          <div class="rental-opt active">Daily</div>
          <div class="rental-opt" onclick="showToast('Weekly: ₹${r.priceWeek}','📅')">Weekly</div>
          <div class="rental-opt" onclick="showToast('Monthly: ₹${r.priceMonth}','📅')">Monthly</div>
        </div>
        <div class="avail-bar"><div class="avail-fill" style="width:${r.availability}%"></div></div>
        <p class="text-sm text-muted" style="margin-bottom:12px;">${r.availability}% availability</p>
        <div style="display:flex;gap:8px;">
          <button class="btn btn-outline btn-sm" style="flex:1" onclick="showToast('Booking request sent!','📅')">Book Now</button>
          <button class="btn btn-ghost btn-sm btn-icon" onclick="showPage('messages');showToast('Chat opened','💬')">💬</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================
// MESSAGES
// ============================================
function renderMessages() {
  renderChatList();
  renderChatMessages();
}

function renderChatList() {
  const list = document.getElementById('chatList');
  if (!list) return;
  list.innerHTML = chats.map(c => `
    <div class="chat-item ${c.id === 1 ? 'active' : ''}" onclick="selectChat(${c.id},this)">
      <div class="chat-avatar" style="background:${c.color}20;color:${c.color};font-weight:700;">${c.initial}</div>
      <div class="chat-item-info">
        <strong>${c.name}</strong>
        <span>${c.lastMsg}</span>
        <span style="font-size:0.73rem;color:var(--text3);">${c.subject}</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
        <span class="chat-item-time">${c.time}</span>
        ${c.unread ? '<div class="unread-dot"></div>' : ''}
      </div>
    </div>
  `).join('');
}

function renderChatMessages() {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  msgs.innerHTML = chatMessages.map(m => `
    <div class="message ${m.from === 'me' ? 'sent' : 'received'}">
      <div class="msg-bubble">${m.text}</div>
      <span class="msg-time">${m.time}</span>
    </div>
  `).join('');
  msgs.scrollTop = msgs.scrollHeight;
}

function selectChat(id, el) {
  document.querySelectorAll('.chat-item').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const chat = chats.find(c => c.id === id);
  if (chat) showToast(`Viewing chat with ${chat.name}`, '💬');
}

function sendMessage() {
  const input = document.getElementById('msgInput');
  const text = input.value.trim();
  if (!text) return;
  chatMessages.push({ id: chatMessages.length + 1, from: 'me', text, time: new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) });
  input.value = '';
  input.style.height = 'auto';
  renderChatMessages();
}

function handleMsgEnter(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

// ============================================
// DASHBOARD TABS
// ============================================
function switchDashTab(tab) {
  ['overview','profile','listings','orders','saved','rentals'].forEach(t => {
    const el = document.getElementById('dash-' + t);
    if (el) el.classList.add('hidden');
  });
  const active = document.getElementById('dash-' + tab);
  if (active) active.classList.remove('hidden');
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  event.currentTarget && event.currentTarget.classList.add('active');
}

// ============================================
// ADMIN TABS
// ============================================
function switchAdminTab(tab) {
  ['users','listings','reports','restaurants','transactions'].forEach(t => {
    const el = document.getElementById('admin-' + t);
    if (el) el.classList.add('hidden');
  });
  const active = document.getElementById('admin-' + tab);
  if (active) active.classList.remove('hidden');
  document.querySelectorAll('#page-admin .sidebar-link').forEach(l => l.classList.remove('active'));
  event.currentTarget && event.currentTarget.classList.add('active');
}

// ============================================
// MODALS
// ============================================
function openModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (id === 'cartModal') renderCart();
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on backdrop click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ============================================
// FORM SUBMISSIONS
// ============================================
function submitListing(e) {
  e.preventDefault();
  closeModal('postListingModal');
  showToast('Listing posted successfully! 🚀', '✅');
}

function submitPost(e) {
  e.preventDefault();
  closeModal('createPostModal');
  showToast('Post published to campus feed!', '📢');
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(msg, icon = 'ℹ️') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav.classList.contains('open')) mobileNav.classList.remove('open');
  }
});

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  showPage('landing');

  // Demo: show admin link in navbar if desired
  // Uncomment below to add admin access in navbar:
  // const adminLink = document.createElement('a');
  // adminLink.href = '#'; adminLink.textContent = '⚙️ Admin';
  // adminLink.onclick = () => showPage('admin');
  // document.getElementById('navLinks').appendChild(adminLink);
});