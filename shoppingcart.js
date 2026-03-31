function updateCart() {
    const rows = document.querySelectorAll("#cart-body tr");
    let subtotal = 0;

    rows.forEach(row => {
        const qty = parseInt(row.querySelector(".qty").value);
        const price = parseFloat(row.querySelector(".price").textContent);
        const amountCell = row.querySelector(".amount");
        const amount = qty * price;
        amountCell.textContent = amount.toFixed(2);
        subtotal += amount;
    });

    const tax = subtotal * 0.06;
    const shipping = 40.00;
    const grandtotal = subtotal + tax + shipping;

    document.getElementById("subtotal").textContent = "RM " + subtotal.toFixed(2);
    document.getElementById("tax").textContent = "RM " + tax.toFixed(2);
    document.getElementById("grandtotal").textContent = "RM " + grandtotal.toFixed(2);
}

// Run once at start
updateCart();

// Update when qty changes
document.querySelectorAll(".qty").forEach(input => {
    input.addEventListener("input", updateCart);
});