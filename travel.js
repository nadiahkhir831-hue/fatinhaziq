window.addEventListener("load", function () {

    var thumbs = document.getElementById("thumbnails");
    var featuredImg = document.querySelector("#featured img");
    var caption = document.querySelector("#featured figcaption");

    // Click thumbnail → change main image
    thumbs.addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
            featuredImg.src = e.target.src;
            featuredImg.title = e.target.title;
        }
    });

    // Show caption
    featuredImg.addEventListener("mouseover", function () {
        caption.style.opacity = 0.8;
        caption.innerHTML = featuredImg.title;
    });

    // Hide caption
    featuredImg.addEventListener("mouseout", function () {
        caption.style.opacity = 0;
    });

});
