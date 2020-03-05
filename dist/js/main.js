"use strict";
// Add toggling mobile menu icon
// from https://developer.mozilla.org/en-US/docs/Web/API/Element/classList/
var mobileMenu = document.querySelector(".nav__btn-group--mobile");
var mobileMenuIcon = document.querySelector(".nav__mobile-icon");

function toggleMenu() {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("show");
    mobileMenu.setAttribute("aria-hidden", "true");
  } else {
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hidden");
    mobileMenu.setAttribute("aria-hidden", "false");
  }
}

// Add accessible toggle buttons
// from https://smashingmagazine.com/2017/09/building-inclusive-toggle-buttons/
var toggleBtnList = document.querySelectorAll("[aria-pressed]");

toggleBtnList.forEach(function(toggleButton) {
  toggleButton.addEventListener("click", function(e) {
    var pressed = e.target.getAttribute("aria-pressed") === "true";
    e.target.setAttribute("aria-pressed", String(!pressed));
  });
});

// Filter by data attribute
var serviceOptions = document.querySelectorAll(".nav__btn-filter-op");
var serviceList = document.querySelectorAll(".service-container");
var serviceFilter = "all"; // holds filter

// clicking on each service option adds it onto the service filters array if it doesnt already exist
// filterServices is run at the end of each click event to refresh the view
serviceOptions.forEach(function(option) {
  option.addEventListener("click", function(e) {
    serviceFilter = option.dataset.serviceType;
    changeFilter(serviceOptions);
    filterServices(serviceFilter, serviceList);
  });
});

function changeFilter(filters) {
  filters.forEach(function(filter) {
    if (filter.dataset.serviceType !== serviceFilter && 
      filter.classList.contains("nav__btn-filter-op--active")) {
      filter.classList.remove("nav__btn-filter-op--active");
    } else if (filter.dataset.serviceType === serviceFilter &&
      !filter.classList.contains("nav__btn-filter-op--active")) {
      filter.classList.add("nav__btn-filter-op--active");
    }
  });
}

function filterServices(filter, services) {
  if (filter !== "") {
    services.forEach(function(service) {
      var data = JSON.parse(service.dataset.serviceType);

      // only display the services that fit under this filter
      if (data.includes(filter)) {
        service.style.display = "block";
      } else {
        service.style.display = "none";
      }
    });
  }
}
