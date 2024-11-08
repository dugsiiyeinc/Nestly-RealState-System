// Wait until the entire DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Lightbox element setup for image display in a modal
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  Object.assign(lightbox.style, {
    display: "none",
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

  // Image element inside the lightbox for displaying clicked images
  const lightboxImage = document.createElement("img");
  Object.assign(lightboxImage.style, {
    maxWidth: "90%",
    maxHeight: "90%",
  });
  lightbox.appendChild(lightboxImage);

  // Opens lightbox with selected image
  const openLightbox = (src) => {
    lightboxImage.src = src;
    lightbox.style.display = "flex";
  };

  // Closes the lightbox when clicked
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Add click event to property images to open lightbox
  const propertyImages = document.querySelectorAll(".property-box .image-wrapper img");
  propertyImages.forEach((img) => {
    img.addEventListener("click", () => openLightbox(img.src));
  });

  // Handle actions for "Request Info" and "View Details" buttons
  const viewButtons = document.querySelectorAll(".property-content .myBtn");

  viewButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      
      // Retrieve property ID and redirect to View Details page
      const propertyId = button.closest(".property-box").dataset.propertyId;
      setTimeout(() => {
        window.location.href = `../html/viewDetails.html?propertyId=${propertyId}`;
      }, 1000); // Delay for redirection
    });
  });
});
