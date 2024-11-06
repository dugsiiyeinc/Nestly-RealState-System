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


});