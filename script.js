document.addEventListener('DOMContentLoaded', function() {
    const menuData = {
        starters: [
            { name: "Caesar Salad", price: 8, image: "https://food400.com/wp-content/uploads/2024/01/Caesar-Salad-1-1024x768.jpg" },
            { name: "Onion Soup", price: 7, image: "https://www.cookaholicwife.com/wp-content/uploads/2022/10/french-onion-soup-final1-1024x768.jpg" },
            { name: "Spring Rolls", price: 7, image: "https://onestophalal.com/cdn/shop/articles/air_fryer_spring_rolls-1699233865904_1200x.jpg?v=1699233916" },
            { name: "Bacon Ring", price: 8, image: "https://www.burntpelletbbq.com/wp-content/uploads/2023/06/IMG_7296-1-1024x768.jpeg" },
            { name: "Onion Rings", price: 6, image: "https://gradfood.com/wp-content/uploads/2020/04/Air-Fryer-Turkey-Onion-Rings-1024x768.jpg" }
        ],
        mainCourses: [
            { name: "Margherita Pizza", price: 18, image: "https://findingtimeforcooking.com/wp-content/uploads/2020/07/Grilled-Margherita-Pizza-done-basil-2-1024x768.jpg" },
            { name: "Marinara Pizza", price: 15, image: "https://www.pizzastunde.com/wp-content/uploads/2024/02/marinara_pizza_gebacken-1024x768.jpeg.webp" },
            { name: "Salmon Pizza", price: 22, image: "https://seachangeseafoods.ca/cdn/shop/articles/smoked-salmon--pizza_1200x.jpg?v=1527655811" },
            { name: "Shrimp Pizza", price: 21, image: "https://d29hmqxeker05q.cloudfront.net/eyJidWNrZXQiOiJpbWFnZXMuY2tiay5jb20iLCJrZXkiOiJpbWFnZXMvcGl6ejgxNjg3YzAzczAwMXIwMDNnMDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZSwid2lkdGgiOjEwMjQsImhlaWdodCI6NzY4LCJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiZW50cm9weSJ9LCJqcGVnIjp7InF1YWxpdHkiOjkwLCJwcm9ncmVzc2l2ZSI6dHJ1ZX19fQ==" },
            { name: "Pepperoni Pizza", price: 20, image: "https://amici.ph/cdn/shop/products/PEPPERONIANDTHREECHEESE_1024x1024.jpg?v=1660807364" }
        ],
        desserts: [
            { name: "Apple Pie", price: 6, image: "https://flourandfiligree.com/wp-content/uploads/2023/10/IMG_5262-Edited-1024x768.jpg" },
            { name: "Creme Brulee", price: 7, image: "https://i0.wp.com/ninabakestheinternet.com/wp-content/uploads/2019/10/UbpVU6MgRnCJTkoDcdUyxQ_thumb_25da.jpg?fit=1024%2C768&ssl=1" },
            { name: "Chocolate Cupcake", price: 6, image: "https://i0.wp.com/www.sisterwithamixer.com/wp-content/uploads/2022/06/Chocolate-Cupcake-Recipe-no-buttermilk-IMG_1137-1024x768.jpg?resize=960%2C720&ssl=1" },
            { name: "Blackberry Cheesecake", price: 8, image: "https://thecoppertable.com/wp-content/uploads/2021/03/blackberry-cheesecake-with-napkin-1-1024x768.jpg" },
            { name: "Lemon Cake", price: 6, image: "https://i0.wp.com/bakeatmidnite.com/wp-content/uploads/2015/01/lemon-pudding-cake-43-o-1024x768.jpg" }
        ]
    };

    const cartItems = [];
    let mytotalPrice = 0;

    function renderMenu(category, data) {
        const container = document.getElementById(category);
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
            `;
            const button = document.createElement('button');
            button.textContent = 'Add to Cart';
            button.addEventListener('click', () => addToCart(item));
            itemElement.appendChild(button);
            container.appendChild(itemElement);
        });
    }

    function addToCart(item) {
        cartItems.push(item);
        mytotalPrice += item.price;
        updateCartDisplay();
    }

    function removeFromCart(index) {
        const removedItem = cartItems.splice(index, 1)[0];
        mytotalPrice -= removedItem.price;
        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';
        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `<span>${item.name} - $${item.price}</span>`;
            const myremoveButton = document.createElement('button');
            myremoveButton.textContent = 'Remove';
            myremoveButton.addEventListener('click', () => removeFromCart(index));
            itemElement.appendChild(myremoveButton);
            cartItemsContainer.appendChild(itemElement);
        });
        document.getElementById('cart-total').textContent = `Total: $${mytotalPrice}`;
    }

    renderMenu('starters', menuData.starters);
    renderMenu('mainCourses', menuData.mainCourses);
    renderMenu('desserts', menuData.desserts);
});
