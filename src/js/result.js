// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  Object.assign(lightbox.style, {
    display: "none", // Hidden by default
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: "1000",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  });
  document.body.appendChild(lightbox);
  const lightboxImage = document.createElement("img");
  Object.assign(lightboxImage.style, {
    maxWidth: "90%",
    maxHeight: "90%",
  });
  lightbox.appendChild(lightboxImage);
  // Function to open the lightbox with the selected image
  const openLightbox = (src) => {
    lightboxImage.src = src;
    lightbox.style.display = "flex"; // Show lightbox
  };

  // Close the lightbox when it is clicked
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none"; // Hide lightbox
  });

  // Add click event to all property images to open lightbox
  const propertyImages = document.querySelectorAll(
    ".property-box .image-wrapper img"
  );
  propertyImages.forEach((img) => {
    img.addEventListener("click", () => openLightbox(img.src));
  });

  // Handle "Request Info" and "View Details" button actions
  const requestButtons = document.querySelectorAll(
    ".property-content .myBtn:nth-child(1)"
  );
  const viewButtons = document.querySelectorAll(
    ".property-content .myBtn:nth-child(2)"
  );

  requestButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      alert("Request for information submitted!");
    });
  });

  viewButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      alert("Viewing details...");
    });
  });

});