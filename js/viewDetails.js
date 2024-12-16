let selectedHouse = null; // Variable to track the selected house

// Fetch and display properties after successful loading
const fetchProperties = async () => {
  try {
    const response = await fetch("/js/data/viewProperties.json");
    console.log('data',response)

    if (!response.ok) {
      throw new Error('Failed to fetch properties data');
    }

    const properties = await response.json();

    console.log(properties);  // Debug: check the properties data

    // Hide all properties on initial load
    displayProperties(properties, false); // Initially set display to false (hidden)
    populateFilters(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
  }
};

// Display properties with the option to show or hide them
const displayProperties = (properties, show = true) => {
  const container = document.querySelector('.property-container');

  if (!container) {
    console.error('Property container not found!');
    return;
  }

  container.innerHTML = ""; // Clear existing properties

  if (properties.length === 0) {
    alert('No properties available.');
    return;
  }

  properties.forEach((property) => {
    const propertyBox = document.createElement("div");
    propertyBox.classList.add("property-box");
    propertyBox.dataset.propertyId = property.id; // Store the property id for later use

    propertyBox.innerHTML = `
      <div class="image-wrapper">
          <img src="${property.image}" alt="${property.name}" />
          <div class="listing-info">
              <h3>For ${property.status}</h3>
          </div>
      </div>
      <div class="property-content">
          <div class="price">
              <h3>${property.price}</h3>
          </div>
          <div class="location">
              <h3>${property.name}</h3>
              <p>${property.location}</p>
          </div>
          <div class="description">
              <p>${property.description}</p>
          </div>
          <div class="size">
              <h4>Size: ${property.size}</h4>
          </div>
          <div class="details">
              <h3><i class="fas fa-bed"></i> ${property.bedrooms}</h3>
              <h3><i class="fas fa-bath"></i> ${property.bathrooms}</h3>
          </div>
      </div>
    `;

    if (show) {
      container.appendChild(propertyBox); // Show all properties after choosing one
    } else {
      // Initially hide the properties
      propertyBox.style.display = 'none';
    }

    // Add click event listener to each property box to select it
    propertyBox.addEventListener('click', () => handlePropertySelection(property, propertyBox));
  });
};

// Function to handle property selection
const handlePropertySelection = (property, propertyBox) => {
  if (selectedHouse !== null) {
    alert('You have already chosen a house!');
  } else {
    selectedHouse = propertyBox; // Set the selected house
    propertyBox.classList.add('selected'); // Optionally add a visual indicator
    alert('You have chosen a house!'); // Show the alert

    // Show the selected house after confirmation
    selectedHouse.style.display = 'block'; // Display the chosen house
  }
};

// Function to filter properties based on search criteria
const filterProperties = (properties) => {
  const nameFilter = document.getElementById('name-filter').value.toLowerCase();
  const locationFilter = document.getElementById('location-filter').value.toLowerCase();
  const priceFilter = document.getElementById('price-filter').value.toLowerCase();
  const statusFilter = document.getElementById('status-filter').value.toLowerCase();

  const filteredProperties = properties.filter(property => {
    const matchesName = nameFilter === "" || property.name.toLowerCase().includes(nameFilter);
    const matchesLocation = locationFilter === "" || property.location.toLowerCase().includes(locationFilter);
    const matchesPrice = priceFilter === "" || property.price.toLowerCase().includes(priceFilter);
    const matchesStatus = statusFilter === "" || property.status.toLowerCase().includes(statusFilter);

    return matchesName && matchesLocation && matchesPrice && matchesStatus;
  });

  // If no properties match the filter, display an alert
  if (filteredProperties.length === 0) {
    alert(`No properties match the selected filters.`);
  }

  displayProperties(filteredProperties);
};

// Adding event listeners to the search inputs
const addSearchEventListeners = (properties) => {
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('change', () => filterProperties(properties));

  // Listen for changes on the filter dropdowns and validate the selected option
  const nameFilter = document.getElementById('name-filter');
  const locationFilter = document.getElementById('location-filter');
  const priceFilter = document.getElementById('price-filter');
  const statusFilter = document.getElementById('status-filter');

  nameFilter.addEventListener('change', () => {
    validateFilterOption(nameFilter, 'property name');
  });

  locationFilter.addEventListener('change', () => {
    validateFilterOption(locationFilter, 'location');
  });

  priceFilter.addEventListener('change', () => {
    validateFilterOption(priceFilter, 'price');
  });

  statusFilter.addEventListener('change', () => {
    validateFilterOption(statusFilter, 'status');
  });
};

// Function to validate selected filter options
const validateFilterOption = (filterElement, filterName) => {
  const selectedOption = filterElement.value.trim().toLowerCase();
  const options = Array.from(filterElement.options).map(option => option.value.toLowerCase());

  // Check if the selected option is valid
  if (selectedOption && !options.includes(selectedOption)) {
    alert(`The selected ${filterName} "${selectedOption}" does not exist.`);
  } else {
    alert(`You selected the ${filterName}: "${selectedOption}".`);
  }
};

// Populate filter dropdowns with options from the properties data
const populateFilters = (properties) => {
  const nameFilter = document.getElementById('name-filter');
  const locationFilter = document.getElementById('location-filter');
  const priceFilter = document.getElementById('price-filter');

  const names = new Set();
  const locations = new Set();
  const prices = new Set();

  properties.forEach(property => {
    names.add(property.name);
    locations.add(property.location);
    prices.add(property.price);
  });

  names.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    nameFilter.appendChild(option);
  });

  locations.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    locationFilter.appendChild(option);
  });

  prices.forEach(price => {
    const option = document.createElement('option');
    option.value = price;
    option.textContent = price;
    priceFilter.appendChild(option);
  });
};

// Call the fetch function on page load
window.onload = async () => {
  const response = await fetch("/js/data/viewProperties.json");
  const properties = await response.json();
  addSearchEventListeners(properties);
  displayProperties(properties, false); // Initially hide all properties
  populateFilters(properties); // Populate filters after properties are fetched
};
