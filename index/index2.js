document.addEventListener("DOMContentLoaded", () => {
    // Cart object
    const cart = {
        "Nissan GT-R Nismo": { price: 35, quantity: 0 },
        "Alfa Romeo 4C": { price: 50, quantity: 1 },
        "Aston Martin Valkyrie": { price: 75, quantity: 0 },
        "Mazda RX-7 Spirit R": { price: 40, quantity: 0 },
        "Lamborghini Veneno": { price: 100, quantity: 0 }
    };

    const totalEl = document.querySelector(".jumlah strong");
    const cartContainer = document.querySelector(".kandungan-kedua");

    function updateTotal() {
        let total = 0;
        for (let car in cart) {
            total += cart[car].price * cart[car].quantity;
        }
        totalEl.textContent = `Jumlah: RM${total}`;
    }

    function addCartItem(name) {
        let existing = cartContainer.querySelector(`div[data-car="${name}"]`);
        if (existing) {
            existing.querySelector(".qty").textContent = `(${cart[name].quantity}x)`;
        } else {
            const div = document.createElement("div");
            div.dataset.car = name;
            div.innerHTML = `
                ${name} <span class="qty">(${cart[name].quantity}x)</span>
                <button class="buang"><i class="fa-solid fa-trash"></i> Buang</button>
            `;
            cartContainer.appendChild(div);

            div.querySelector(".buang").addEventListener("click", () => {
                cart[name].quantity = 0;
                div.remove();
                updateTotal();
            });
        }
        updateTotal();
    }

    // Beli buttons
    document.querySelectorAll(".beli").forEach(btn => {
        btn.addEventListener("click", () => {
            const row = btn.closest("tr");
            const carName = row.cells[0].innerText;
            cart[carName].quantity = (cart[carName].quantity || 0) + 1;
            addCartItem(carName);
        });
    });

    // Existing Buang buttons
    document.querySelectorAll(".buang").forEach(btn => {
        btn.addEventListener("click", () => {
            const parent = btn.closest("div");
            const carName = parent.dataset.car || "Alfa Romeo 4C";
            cart[carName].quantity = 0;
            parent.remove();
            updateTotal();
        });
    });

    // Kosongkan button
    document.querySelector("#kosongkan").addEventListener("click", () => {
        for (let car in cart) {
            cart[car].quantity = 0;
        }
        cartContainer.innerHTML = ""; // remove all items
        updateTotal();
    });

    updateTotal();
});