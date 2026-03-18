let allProducts = [];
let filteredProducts = [];
let cart = [];

const productsDiv=document.getElementById('products');
const loader=document.getElementById('loader');
const searchInput=document.getElementById('search');
const categorySelect=document.getElementById('category');
const cartItems=document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const totalSpan = document.getElementById('total');

fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data => {
    allProducts = data;
    filteredProducts = data;
    loader.style.display = 'none';
    displayProducts(data);
})
.catch(() => {
    loader.innerText = 'Error loading data';
});

function displayProducts(products) {
    productsDiv.innerHTML = '';

    if (products.length === 0) {
        productsDiv.innerHTML = "<h3>No products found</h3>";
        return;
    }

    products.forEach(p => {
        let card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="imgBox">
                <img src="${p.image}" alt="${p.title}">
            </div>

            <div class="content">
                <h4 title="${p.title}">
                    ${p.title.length > 40 ? p.title.substring(0,40) + '...' : p.title}
                </h4>

                <p class="category">${p.category}</p>

                <div class="priceRow">
                    <span class="price">₹${p.price}</span>
                    <span class="rating"> ${p.rating.rate}</span>
                </div>

                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;

        productsDiv.appendChild(card);
    });
}

function applyFilters() {
    let searchVal = searchInput.value.toLowerCase();
    let categoryVal = categorySelect.value;

    filteredProducts = allProducts.filter(p => {
        let matchSearch =
            p.title.toLowerCase().includes(searchVal) ||
            p.category.toLowerCase().includes(searchVal);

        let matchCategory = categoryVal ? p.category === categoryVal : true;

        return matchSearch && matchCategory;
    });

    displayProducts(filteredProducts);
}

searchInput.addEventListener('input', applyFilters);
categorySelect.addEventListener('change', applyFilters);

document.getElementById('lowHigh').onclick = () => {
    let sorted = [...filteredProducts].sort((a,b)=>a.price-b.price);
    displayProducts(sorted);
};

document.getElementById('highLow').onclick = () => {
    let sorted = [...filteredProducts].sort((a,b)=>b.price-a.price);
    displayProducts(sorted);
};

function addToCart(id) {
    let item = cart.find(i => i.id === id);

    if(item) item.qty++;
    else {
        let product = allProducts.find(p => p.id === id);
        cart.push({...product, qty:1});
    }

    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';

    let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    totalSpan.innerText = total.toFixed(2);

    let count = 0;

    cart.forEach(item => {
        count += item.qty;

        let li = document.createElement('li');
        li.innerHTML = `
            ${item.title.substring(0,20)} (x${item.qty}) - ₹${item.price}
            <button onclick="removeItem(${item.id})">❌</button>
        `;
        cartItems.appendChild(li);
    });

    cartCount.innerText = count;
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    updateCart();


}