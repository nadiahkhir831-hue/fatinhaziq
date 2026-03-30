window.addEventListener("load", function() {
    // Get the container for the thumbnails
    var thumbs = document.getElementById("thumbnails");

    // Use event delegation: handle clicks on thumbnails via parent container
    thumbs.addEventListener("click", function(e) {
        // Check if the clicked element is an image
        if (e.target.nodeName.toLowerCase() === 'img') {
            // Get the image source of the clicked thumbnail
            var clickedImageSource = e.target.src;

            // Replace "small" with "medium" in the image path
            var newSrc = clickedImageSource.replace("small", "medium");

            // Update the featured image
            var featuredImage = document.querySelector("#featured img");
            featuredImage.src = newSrc;
            featuredImage.title = e.target.title;
        }
    });

    // Get the featured image container
    var featured = document.getElementById("featured");

    // Show caption on mouseover
    featured.addEventListener("mouseover", function() {
        var caption = document.querySelector("#featured figcaption");
        caption.style.transition = "opacity 1.5s";
        caption.style.opacity = 0.8;
        caption.innerHTML = document.querySelector("#featured img").title;
    });

    // Hide caption on mouseout
    featured.addEventListener("mouseout", function() {
        var caption = document.querySelector("#featured figcaption");
        caption.style.transition = "opacity 1.5s";
        caption.style.opacity = 0;
    });
});
