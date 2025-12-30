let cart = [];

const cartModal = document.getElementById("cartModal");
const openCartBtn = document.getElementById("openCart");
const closeCartBtn = document.getElementById("closeCart");
const cartItems = document.querySelector(".cart-items");
const totalSpan = document.getElementById("total");
const cartCount = document.getElementById("cartCount");





const deliveryFee = 40;
const serviceFeePercent = 5;

function calculateServiceFee(subtotal) {
    return Math.round(subtotal * (serviceFeePercent / 100));
}

// فتح / غلق السلة
openCartBtn.addEventListener("click", () => {
    cartModal.classList.add("active");
    renderCart();
});
closeCartBtn.addEventListener("click", () => cartModal.classList.remove("active"));
cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) cartModal.classList.remove("active");
});

// إضافة منتج
document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        const card = this.closest(".card");
        const name = card.querySelector("h4").innerText;
        const price = parseInt(card.querySelector(".price").dataset.price);
        const qty = parseInt(card.querySelector(".qty").value);

        const existingItem = cart.find(item => item.name === name);
        if (existingItem) existingItem.qty += qty;
        else cart.push({ name, price, qty });

        cartCount.innerText = cart.length;

        openCartBtn.classList.add("bump");
        setTimeout(() => openCartBtn.classList.remove("bump"), 300);

        renderCart();
        showToast(`تمت إضافة ${name} إلى السلة ✅`);
    });
});

// رسم السلة + تفاصيل الفاتورة
function renderCart() {
    cartItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <input type="number" min="1" value="${item.qty}" onchange="updateQty(${index}, this.value)">
            </div>
            <div>
                ${itemTotal} جنيه
                <button onclick="removeItem(${index})">✖</button>
            </div>
        `;
        cartItems.appendChild(div);
    });

    const serviceFee = calculateServiceFee(subtotal);
    const total = subtotal + deliveryFee + serviceFee;

    // تفاصيل الفاتورة
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "cart-details";
    detailsDiv.innerHTML = `
        <hr>
        <p>قيمة المنتجات: ${subtotal} جنيه</p>
        <p>رسوم الخدمة (5%): ${serviceFee} جنيه</p>
        <p>رسوم التوصيل: ${deliveryFee} جنيه</p>
        <hr>
        <p><strong>الإجمالي: ${total} جنيه</strong></p>
    `;
    cartItems.appendChild(detailsDiv);

    totalSpan.innerText = total;
}

// تعديل الكمية
function updateQty(index, value) {
    const qty = parseInt(value);
    if (qty <= 0) removeItem(index);
    else {
        cart[index].qty = qty;
        renderCart();
    }
}

// حذف منتج
function removeItem(index) {
    const item = cartItems.children[index];
    item.style.opacity = "0";
    item.style.transform = "translateX(30px)";
    setTimeout(() => {
        cart.splice(index, 1);
        cartCount.innerText = cart.length;
        renderCart();
    }, 200);
}

// Toast
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}


/* كود الرسالة الترحيبية */



