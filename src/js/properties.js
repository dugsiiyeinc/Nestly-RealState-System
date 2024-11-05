document.addEventListener("DOMContentLoaded", function () {
  const data = {
    neighborhoods: ["City Center", "Old Town", "Green Acres", "Lakeside"],
    cities: ["San Francisco", "Miami", "Austin", "Seattle"],
    prices: {
      min: ["$1,000", "$5,000", "$10,000", "$15,000", "$20,000"],
      max: ["$50,000", "$75,000", "$100,000", "$150,000", "$200,000"],
    },
    statuses: [
      "Newly Listed",
      "Renovated",
      "Fully Furnished",
      "Partially Furnished",
      "Unfurnished",
    ],
    propertyTypes: [
      "Condo",
      "Villa",
      "Retail Store",
      "Storage Unit",
      "Farm Land",
    ],
    bedrooms: [
      "Studio",
      "1 Bedroom",
      "2 Bedrooms",
      "3 Bedrooms",
      "4+ Bedrooms",
    ],
    bathrooms: ["1 Bath", "1.5 Baths", "2 Baths", "3 Baths", "4+ Baths"],
  };
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

  // Function to populate select dropdowns based on local JSON data
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
  // populate select elements with data from local API
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
  form.addEventListener("submit", (e)=>{
    e.preventDefault(); // Prevent the default form submission

    // Gather selected values
    const selectedData = {};
  });

});
