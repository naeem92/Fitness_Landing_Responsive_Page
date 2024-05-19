// // Select DOM elements
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const firstLinks = document.querySelector(".first-links");
const lastLinks = document.querySelector(".last-links");
const form = document.getElementById("form");

/**
 * Toggle visibility between two elements.
 * @param {HTMLElement} showElement - The element to show.
 * @param {HTMLElement} hideElement - The element to hide.
 */
function toggleVisibility(showElement, hideElement) {
  showElement.classList.add("show");
  showElement.classList.remove("hidden");
  hideElement.classList.add("hidden");
  hideElement.classList.remove("show");
}

/**
 * Toggle visibility of the link elements.
 * @param {boolean} show - Determines whether to show or hide the links.
 */
function toggleLinksVisibility(show) {
  const action = show ? 'add' : 'remove';
  const reverseAction = show ? 'remove' : 'add';
  
  firstLinks.classList[action]("show");
  lastLinks.classList[action]("show");
  firstLinks.classList[reverseAction]("hidden");
  lastLinks.classList[reverseAction]("hidden");
}

// Event listener for the hamburger icon click event
hamburger.addEventListener("click", () => {
  toggleVisibility(closeIcon, hamburger); // Show close icon, hide hamburger icon
  toggleLinksVisibility(true); // Show links
});

// Event listener for the close icon click event
closeIcon.addEventListener("click", () => {
  toggleVisibility(hamburger, closeIcon); // Show hamburger icon, hide close icon
  toggleLinksVisibility(false); // Hide links
});

// Prevent form submission to handle it with JavaScript
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
