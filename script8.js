document.getElementById("artForm").addEventListener("submit", function(e){

    let valid = true;

    function checkField(inputId){
        let input = document.getElementById(inputId);
        let group = input.parentElement;
        let icon = group.querySelector(".error-icon");

        // condition error
        if(input.value.trim() === "" || (inputId === "year" && isNaN(input.value))){
            group.classList.add("input-error");
            icon.style.display = "block";
            valid = false;
        } 
        else{
            group.classList.remove("input-error");
            icon.style.display = "none";
        }
    }

    checkField("title");
    checkField("description");
    checkField("year");

    if(!valid){
        e.preventDefault(); // stop submit
    }
});


// 🔥 real-time validation (auto hilang error)
["title","description","year"].forEach(id => {

    let input = document.getElementById(id);

    input.addEventListener("input", () => {

        let group = input.parentElement;
        let icon = group.querySelector(".error-icon");

        if(input.value.trim() !== "" && !(id === "year" && isNaN(input.value))){
            group.classList.remove("input-error");
            icon.style.display = "none";
        }
    });
});
