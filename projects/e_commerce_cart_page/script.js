document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];

  let cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  // Load cart from localStorage if exists
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }

  // Render product cards
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });

  // Add product to cart
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const productToAdd = products.find((p) => p.id === productId);
      if (productToAdd) {
        cart.push(productToAdd);
        updateCart();
      }
    }
  });

  // Update cart display and save to localStorage
  function updateCart() {
    cartItems.innerHTML = "";
    if (cart.length === 0) {
      emptyCartMessage.style.display = "block";
      cartTotalMessage.style.display = "none";
      totalPriceDisplay.textContent = "$0.00";
    } else {
      emptyCartMessage.style.display = "none";
      cartTotalMessage.style.display = "block";
      let totalPrice = 0;

      cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
          <p>${item.name} - $${item.price.toFixed(2)}</p>
          <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(div);
        totalPrice += item.price;
      });

      totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;

      // Add click listeners to remove buttons
      const removeButtons = document.querySelectorAll(".remove-btn");
      removeButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const index = parseInt(e.target.getAttribute("data-index"));
          cart.splice(index, 1); // Remove item from cart
          updateCart(); // Re-render
        });
      });
    }

    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Checkout logic
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert(
        `Thank you for your purchase!\nTotal: ${totalPriceDisplay.textContent}`
      );
      cart = []; // Clear cart
      updateCart(); // Refresh
      localStorage.removeItem("cart"); // Remove from localStorage
    }
  });

  // Initial render
  updateCart();
});
