document.addEventListener("DOMContentLoaded", async function () {
  // Fetch the data from local JSON
  const fetchData = async () => {
    try {
      const response = await fetch("../data/data.json"); // Adjust path as needed
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return null;
    }
  };

  const data = await fetchData();

  if (data) {
    // Create home section
    const homeSection = document.createElement("section");
    homeSection.className = "home";
    homeSection.id = "home";

    // Building the form structure with empty select elements
    homeSection.innerHTML = `
      <form id="propertyForm">
        <h3>Find Your Perfect Home</h3>
        <div class="inputBox">
          <select id="neighborhoods"><option disabled hidden selected>Neighborhood</option></select>
          <select id="cities"><option disabled hidden selected>City</option></select>
          <select id="minPrice"><option disabled hidden selected>Minimum Price</option></select>
          <select id="maxPrice"><option disabled hidden selected>Maximum Price</option></select>
          <select id="statuses"><option disabled hidden selected>Property Status</option></select>
          <select id="propertyTypes"><option disabled hidden selected>Property Type</option></select>
          <select id="bedrooms"><option disabled hidden selected>Bedrooms</option></select>
          <select id="bathrooms"><option disabled hidden selected>Bathrooms</option></select>
        </div>
        <input type="submit" value="Search Property" class="btn">
      </form>
    `;
    document.body.appendChild(homeSection);

    // Function to populate select dropdowns based on JSON data
    const populateSelect = (id, options) => {
      const select = document.getElementById(id);

      // Clear existing options, keep only the default placeholder
      select.options.length = 1;

      // Populate the select with options
      options.forEach((option) => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
      });
    };

    // Populate select elements with data from JSON
    populateSelect("neighborhoods", data.neighborhoods);
    populateSelect("cities", data.cities);
    populateSelect("minPrice", data.prices.min);
    populateSelect("maxPrice", data.prices.max);
    populateSelect("statuses", data.statuses);
    populateSelect("propertyTypes", data.propertyTypes);
    populateSelect("bedrooms", data.bedrooms);
    populateSelect("bathrooms", data.bathrooms);

    // Handle form submission
    const form = document.getElementById("propertyForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the default form submission

      // Gather selected values
      const selectedData = {
        neighborhood: document.getElementById("neighborhoods").value,
        city: document.getElementById("cities").value,
        minPrice: document.getElementById("minPrice").value,
        maxPrice: document.getElementById("maxPrice").value,
        status: document.getElementById("statuses").value,
        propertyType: document.getElementById("propertyTypes").value,
        bedrooms: document.getElementById("bedrooms").value,
        bathrooms: document.getElementById("bathrooms").value,
      };

      // Check if all options are selected
      const allSelected = Object.values(selectedData).every(
        (value) =>
          value !== "" &&
          value !== "Neighborhood" &&
          value !== "City" &&
          value !== "Minimum Price" &&
          value !== "Maximum Price" &&
          value !== "Property Status" &&
          value !== "Property Type" &&
          value !== "Bedrooms" &&
          value !== "Bathrooms"
      );

      if (!allSelected) {
        // Alert if any field is not selected
        alert("Please select an option for all fields before submitting.");
      } else {
        // Store selected data in local storage
        localStorage.setItem("propertySearch", JSON.stringify(selectedData));

        // Redirect to result.html
        window.location.href = "../html/result.html"; // Adjust path as needed
      }
    });
  }
});
