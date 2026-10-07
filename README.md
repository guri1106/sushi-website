# 🍣 Sakura Sushi - College Web Development Project

> **Project Name:** Sakura Sushi  
> **Tagline:** Fresh Sushi. Authentic Taste.  
> **Level:** First-Year College Web Development Practical Project  
> **Core Technologies:** HTML5, CSS3, Vanilla JavaScript (ES6+), Web Storage API (LocalStorage)

---

## 📖 Project Overview

**Sakura Sushi** is a complete, modern, responsive, and fully functional website for a fictional Japanese sushi restaurant. It is designed specifically for a **first-year college semester project and viva voce examination**. 

The code is strictly written in clean, semantic HTML5, pure CSS3 (Grid & Flexbox with custom CSS variables), and vanilla JavaScript without any external frontend frameworks (no React/Angular/Vue) or backend servers. Everything executes 100% locally in any modern web browser.

---

## 📂 Project File Structure

```text
sakura-sushi/
│
├── index.html           # Home page with hero, highlights, popular picks, why us & CTA
├── menu.html            # Complete interactive menu with live categories, search & diet filter
├── about.html           # Brand story, philosophy, college project disclosure & viva guide
├── contact.html         # Location details, opening hours & validated contact form
├── cart.html            # Interactive shopping cart with quantity controls & bill calculator
├── checkout.html        # Order delivery form with validation & payment method selection
├── order-success.html   # Order confirmation invoice with generated Order ID & print option
│
├── css/
│   └── style.css        # Japanese aesthetic styling (Cream, Charcoal, Burgundy, Gold)
│
├── js/
│   └── script.js        # Data array, category filtering, cart management, LocalStorage, modals
│
└── images/              # High-resolution food & ambiance photography (local offline assets)
    ├── hero-sushi.jpg
    ├── about-restaurant.jpg
    ├── california-roll.jpg
    ├── salmon-roll.jpg
    ├── spicy-tuna-roll.jpg
    ├── dragon-roll.jpg
    ├── vegetable-roll.jpg
    ├── salmon-nigiri.jpg
    ├── tuna-nigiri.jpg
    ├── prawn-nigiri.jpg
    ├── salmon-sashimi.jpg
    ├── tuna-sashimi.jpg
    ├── chicken-ramen.jpg
    ├── vegetable-ramen.jpg
    ├── spicy-miso-ramen.jpg
    ├── edamame.jpg
    ├── vegetable-gyoza.jpg
    ├── chicken-gyoza.jpg
    ├── matcha-latte.jpg
    ├── japanese-iced-tea.jpg
    ├── lemon-soda.jpg
    ├── mochi-ice-cream.jpg
    ├── matcha-cheesecake.jpg
    └── chicken-teriyaki.jpg
```

---

## 🚀 How to Run the Website

### Method 1: Direct Browser Launch (Simplest for Viva)
1. Navigate to the `sakura-sushi` folder on your computer.
2. Double-click **`index.html`** to open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.
3. Everything (menu filtering, cart calculations, checkout, order success) runs seamlessly without any installation!

### Method 2: VS Code Live Server
1. Open the `sakura-sushi` folder in Visual Studio Code.
2. Right-click on `index.html` and select **"Open with Live Server"**.

---

## 🎯 Key Features & Functionality

1. **Responsive Japanese-Inspired Aesthetic:**
   - Palette: Cream/Off-white (`#fcfbf7`), Dark Charcoal (`#1f1d1b`), Deep Burgundy Red (`#9e2a2b`), and Muted Gold (`#c29b38`).
   - Clean Japanese Hanko red stamp logo mark (桜).
   - Generous whitespace, refined borders, and typography using Google Fonts *Cinzel* and *Plus Jakarta Sans*.

2. **Interactive Food Menu:**
   - 22 authentic items across 7 categories: *Sushi Rolls, Nigiri, Sashimi, Ramen, Appetizers, Drinks, Desserts*.
   - Live category tabs filter items without reloading.
   - Real-time search bar filters dishes by title and ingredients.
   - Dietary selector for Vegetarian (●) and Non-Vegetarian (▲).

3. **Food Details Modal (Pop-up):**
   - Click any card or "Details" button to open the food details modal.
   - Displays large image, portion size, tags, description, and interactive quantity counter (`-` / `+`).
   - Add to Cart directly from modal with selected quantity.

4. **Dynamic Cart & Pricing Logic:**
   - Cart badge in the navbar updates in real time across all pages.
   - Increment (`+`), decrement (`-`), or remove (`🗑`) cart items with instant subtotal and grand total recalculation.
   - **Delivery Fee Rule:**
     - Standard Delivery: `₹40`
     - Orders above `₹799`: **FREE Delivery** (`₹0`)
     - Animated progress bar indicating how much more to add for free delivery.
   - Empty cart state with "Explore Menu" call to action.

5. **Validated Multi-Step Checkout:**
   - Customer information: Full Name, Indian Phone Number (10 digits starting with 6–9), Email Address.
   - Delivery Address: Street address, City, Pincode (6 digits).
   - Payment method toggle: Cash on Delivery or Demo Online Payment.
   - Inline error feedback highlighting invalid fields.
   - Generates demo Order ID (e.g. `SS10245`), saves order data to `LocalStorage`, and redirects to `order-success.html`.

6. **Order Confirmation & Print Receipt:**
   - Displays congratulations message, order ID, estimated preparation time (25–35 min), delivery address, and itemized receipt table.
   - Built-in "Print Receipt" button using `window.print()` formatted with CSS print media queries.
   - Automatically clears the cart upon successful order placement.

7. **Contact Page:**
   - Displays restaurant address in Ludhiana, Punjab, working phone, email, and opening hours.
   - Contact form with client-side validation that shows a localized success confirmation without external dependencies.

---

## 🎓 First-Year College Viva Voce Questions & Answers Guide

Use these answers to impress your external examiner during practical defense:

### Q1: What is the tech stack of this project, and why didn't you use React or a backend?
> **Answer:** "This project is built using pure **HTML5, CSS3, and Vanilla JavaScript (ES6+)**. For a first-year web technologies curriculum, using vanilla standards demonstrates a solid grasp of core fundamentals like the DOM (Document Object Model), event propagation, CSS Grid/Flexbox, and client-side data persistence. Using vanilla code also allows the project to run in any browser immediately without server overhead, compilation steps, or npm dependencies."

### Q2: How did you implement data storage without a database like MySQL or MongoDB?
> **Answer:** "We used the browser's built-in **Web Storage API (LocalStorage)**. Cart items and placed orders are serialized to JSON strings using `JSON.stringify()` and stored under keys like `sakura_sushi_cart` and `sakura_sushi_last_order`. When a page loads, we parse the JSON data using `JSON.parse()`. This keeps user cart items persistent even when navigating across different HTML pages or refreshing the browser."

### Q3: How does the category filter work on the Menu page?
> **Answer:** "All 22 menu items are stored in a JavaScript array of objects called `MENU_ITEMS`. Each object has a `category` property (such as `sushi-rolls`, `ramen`, `nigiri`). When a category button is clicked, our event listener captures `dataset.category`, filters the array using JavaScript's native `Array.prototype.filter()` method, and dynamically injects the matching cards into the DOM using template literals and `innerHTML`."

### Q4: How is the delivery fee and free delivery threshold calculated?
> **Answer:** "In the `calculateTotals()` function in `script.js`, we use `Array.prototype.reduce()` to calculate the subtotal:  
> `subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)`.  
> We then apply a conditional rule: if `subtotal > 799`, `deliveryFee = 0`, otherwise `deliveryFee = 40`. The grand total is `subtotal + deliveryFee`."

### Q5: How is form validation handled in checkout?
> **Answer:** "Form validation is handled client-side using JavaScript regular expressions and length checks before allowing submission. For the phone number, we use the regex `/^[6-9]\d{9}$/` to verify a 10-digit Indian mobile number. For the postal pincode, we check `/^\d{6}$/`. If any field is invalid, we prevent form submission (`e.preventDefault()`), highlight the invalid input with `.input-error`, and display a clear inline message."

### Q6: How is responsiveness achieved across mobile, tablet, and desktop?
> **Answer:** "We utilized CSS3 **Flexbox** for one-dimensional layouts (navbars, button groups) and **CSS Grid** with `grid-template-columns: repeat(auto-fill, minmax(270px, 1fr))` for responsive multi-column food cards. Media queries at `992px`, `768px`, and `480px` adjust column counts and toggle an accessible hamburger navigation menu on smaller screens without any horizontal overflow."

---

## 📜 Academic Integrity Note
*Sakura Sushi is an academic demonstration project created for educational purposes. All food images are licensed under the Unsplash open photography license.*
