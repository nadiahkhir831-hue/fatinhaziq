document.getElementById("diecastForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    // Validate Model Name
    const modelName = document.getElementById("modelName");
    const modelError = modelName.nextElementSibling;
    if (modelName.value.trim() === "") {
        modelError.style.display = "inline";
        valid = false;
    } else {
        modelError.style.display = "none";
    }

    // Validate Description
    const description = document.getElementById("description");
    const descError = description.nextElementSibling;
    if (description.value.trim() === "") {
        descError.style.display = "inline";
        valid = false;
    } else {
        descError.style.display = "none";
    }

    // Validate Year
    const year = document.getElementById("year");
    const yearError = year.nextElementSibling;
    if (!/^\d{4}$/.test(year.value.trim())) {
        yearError.style.display = "inline";
        valid = false;
    } else {
        yearError.style.display = "none";
    }

    if (valid) {
        alert("Diecast model details submitted successfully!");
        // Here you could send data to a server or process it further
    }
});