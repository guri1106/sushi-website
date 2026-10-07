const PRODUCTS=[
{id:1,name:"California Roll",cat:"Sushi Rolls",price:249,desc:"Crab, avocado and cucumber rolled with seasoned rice."},
{id:2,name:"Salmon Roll",cat:"Sushi Rolls",price:299,desc:"Fresh salmon with seasoned rice and cucumber."},
{id:3,name:"Spicy Tuna Roll",cat:"Sushi Rolls",price:329,desc:"Tuna with spicy mayo, cucumber and sesame."},
{id:4,name:"Dragon Roll",cat:"Sushi Rolls",price:379,desc:"Crispy chicken, avocado and cucumber with special sauce."},
{id:5,name:"Vegetable Sushi Roll",cat:"Sushi Rolls",price:229,desc:"Fresh cucumber, avocado, carrot and sesame."},
{id:6,name:"Salmon Nigiri",cat:"Nigiri",price:299,desc:"Hand-pressed rice topped with fresh salmon."},
{id:7,name:"Tuna Nigiri",cat:"Nigiri",price:329,desc:"Seasoned rice topped with delicate tuna."},
{id:8,name:"Prawn Nigiri",cat:"Nigiri",price:319,desc:"Tender prawn over seasoned sushi rice."},
{id:9,name:"Salmon Sashimi",cat:"Sashimi",price:399,desc:"Fresh salmon slices served simply and beautifully."},
{id:10,name:"Tuna Sashimi",cat:"Sashimi",price:429,desc:"Premium tuna slices with a clean, delicate finish."},
{id:11,name:"Chicken Ramen",cat:"Ramen",price:349,desc:"Comforting ramen with chicken, vegetables and broth."},
{id:12,name:"Vegetable Ramen",cat:"Ramen",price:299,desc:"A warm bowl of noodles, vegetables and rich broth."},
{id:13,name:"Spicy Miso Ramen",cat:"Ramen",price:379,desc:"Miso broth with noodles, vegetables and gentle heat."},
{id:14,name:"Edamame",cat:"Appetizers",price:149,desc:"Steamed young soybeans with a light seasoning."},
{id:15,name:"Vegetable Gyoza",cat:"Appetizers",price:199,desc:"Pan-seared dumplings filled with fresh vegetables."},
{id:16,name:"Chicken Gyoza",cat:"Appetizers",price:229,desc:"Golden dumplings with a savory chicken filling."},
{id:17,name:"Matcha Latte",cat:"Drinks",price:179,desc:"Creamy milk with earthy Japanese matcha."},
{id:18,name:"Japanese Iced Tea",cat:"Drinks",price:129,desc:"Refreshing chilled tea with a clean finish."},
{id:19,name:"Fresh Lemon Soda",cat:"Drinks",price:99,desc:"Bright lemon, sparkling soda and plenty of ice."},
{id:20,name:"Mochi Ice Cream",cat:"Desserts",price:199,desc:"Soft rice cake with a cool, creamy center."},
{id:21,name:"Matcha Cheesecake",cat:"Desserts",price:229,desc:"Creamy cheesecake with a subtle matcha flavor."}
];

const money=n=>"₹"+n.toLocaleString("en-IN");
function getCart(){try{return JSON.parse(localStorage.getItem("sakuraCart")||"[]")}catch{return[]}}
function saveCart(c){localStorage.setItem("sakuraCart",JSON.stringify(c));updateCartCount()}
function updateCartCount(){const n=getCart().reduce((s,x)=>s+x.qty,0);document.querySelectorAll("#cartCount").forEach(e=>e.textContent=n)}
function foodVisual(p){return `<div class="food-img"><div class="food-shape"></div><span>${p.cat}</span></div>`}
function card(p){return `<article class="product-card">${foodVisual(p)}<div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p><div class="price-row"><span class="price">${money(p.price)}</span><button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button></div></div></article>`}
function renderProducts(list,target){const el=document.getElementById(target);if(el)el.innerHTML=list.map(card).join("")}
function addToCart(id){const p=PRODUCTS.find(x=>x.id===id),c=getCart(),item=c.find(x=>x.id===id);item?item.qty++:c.push({...p,qty:1});saveCart(c);toast(`${p.name} added to cart`)}
function toast(msg){const old=document.querySelector(".toast");if(old)old.remove();const t=document.createElement("div");t.className="toast";t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2200)}
function setupMenu(){const filters=document.getElementById("filters");if(!filters)return;const cats=["All",...new Set(PRODUCTS.map(p=>p.cat))];filters.innerHTML=cats.map((c,i)=>`<button class="filter ${i===0?"active":""}" data-cat="${c}">${c}</button>`).join("");renderProducts(PRODUCTS,"menuProducts");filters.addEventListener("click",e=>{if(!e.target.matches(".filter"))return;filters.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));e.target.classList.add("active");const cat=e.target.dataset.cat;renderProducts(cat==="All"?PRODUCTS:PRODUCTS.filter(p=>p.cat===cat),"menuProducts")})}
function cartTotals(c){const subtotal=c.reduce((s,x)=>s+x.price*x.qty,0),delivery=subtotal===0?0:subtotal>799?0:40;return{subtotal,delivery,total:subtotal+delivery}}
function renderCart(){const box=document.getElementById("cartItems"),sum=document.getElementById("cartSummary");if(!box)return;const c=getCart();if(!c.length){box.innerHTML='<div class="empty"><h2>Your cart is empty.</h2><p>Add something delicious from the menu.</p><a class="btn primary" href="menu.html">Explore Menu</a></div>';sum.innerHTML="";return}box.innerHTML=c.map(x=>`<div class="cart-item">${foodVisual(x)}<div><h3>${x.name}</h3><p>${money(x.price)} each</p><button class="remove" onclick="removeItem(${x.id})">Remove</button></div><div><div class="qty"><button onclick="changeQty(${x.id},-1)">−</button><strong>${x.qty}</strong><button onclick="changeQty(${x.id},1)">+</button></div><div class="price">${money(x.price*x.qty)}</div></div></div>`).join("");const t=cartTotals(c);sum.innerHTML=`<h2>Order summary</h2><div class="summary-row"><span>Subtotal</span><strong>${money(t.subtotal)}</strong></div><div class="summary-row"><span>Delivery</span><strong>${t.delivery?money(t.delivery):"FREE"}</strong></div><div class="summary-row total"><span>Total</span><strong>${money(t.total)}</strong></div><a class="btn primary full" href="checkout.html">Proceed to Checkout</a><p style="font-size:.72rem;color:#716c67">Free delivery on orders above ₹799.</p>`}
function changeQty(id,d){const c=getCart(),x=c.find(i=>i.id===id);if(!x)return;x.qty+=d;if(x.qty<1)c.splice(c.indexOf(x),1);saveCart(c);renderCart()}
function removeItem(id){saveCart(getCart().filter(x=>x.id!==id));renderCart();toast("Item removed")}
function renderCheckout(){const el=document.getElementById("checkoutSummary");if(!el)return;const c=getCart();if(!c.length){el.innerHTML='<h2>No items yet</h2><p>Add food to your cart before checkout.</p><a class="btn primary" href="menu.html">Go to Menu</a>';return}const t=cartTotals(c);el.innerHTML=`<h2>Your order</h2>${c.map(x=>`<div class="summary-row"><span>${x.name} × ${x.qty}</span><strong>${money(x.price*x.qty)}</strong></div>`).join("")}<div class="summary-row"><span>Delivery</span><strong>${t.delivery?money(t.delivery):"FREE"}</strong></div><div class="summary-row total"><span>Total</span><strong>${money(t.total)}</strong></div>`}
function setupCheckout(){const f=document.getElementById("checkoutForm");if(!f)return;f.addEventListener("submit",e=>{e.preventDefault();const c=getCart();if(!c.length){document.getElementById("checkoutMessage").textContent="Your cart is empty.";return}if(!f.checkValidity()){f.reportValidity();return}const d=new FormData(f),order={id:"SS"+Math.floor(10000+Math.random()*90000),name:d.get("name"),phone:d.get("phone"),email:d.get("email"),address:d.get("address"),city:d.get("city"),pincode:d.get("pincode"),payment:d.get("payment"),items:c,total:cartTotals(c).total,date:new Date().toISOString()};localStorage.setItem("sakuraLastOrder",JSON.stringify(order));localStorage.removeItem("sakuraCart");location.href="order-success.html"})}
function setupContact(){const f=document.getElementById("contactForm");if(!f)return;f.addEventListener("submit",e=>{e.preventDefault();if(!f.checkValidity()){f.reportValidity();return}f.reset();document.getElementById("formMessage").textContent="Thanks! Your message has been received for this demo.";toast("Message sent")})}
function setupSuccess(){const o=JSON.parse(localStorage.getItem("sakuraLastOrder")||"null");if(!o)return;document.getElementById("customerName").textContent=o.name.split(" ")[0];document.getElementById("orderId").textContent=o.id}
document.querySelector(".menu-toggle")?.addEventListener("click",()=>document.querySelector(".nav")?.classList.toggle("open"));
document.addEventListener("DOMContentLoaded",()=>{updateCartCount();renderProducts(PRODUCTS.slice(0,4),"featuredProducts");setupMenu();renderCart();renderCheckout();setupCheckout();setupContact();setupSuccess()});
