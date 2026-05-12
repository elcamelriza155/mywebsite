// Small JS only: mobile menu toggle + Mom Life tab toggle

function setupMobileMenu() {
  var button = document.getElementById("menuToggle");
  var links = document.getElementById("navLinks");

  if (!button || !links) return;

  button.addEventListener("click", function () {
    links.classList.toggle("open");
    var isOpen = links.classList.contains("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupMomLifeTabs() {
  var balanceBtn = document.getElementById("btnBalance");
  var budgetBtn = document.getElementById("btnBudget");
  var balanceContent = document.getElementById("balanceContent");
  var budgetContent = document.getElementById("budgetContent");

  // Only run on momlife.html (elements will exist there)
  if (!balanceBtn || !budgetBtn || !balanceContent || !budgetContent) return;

  function showTab(tabName) {
    var isBalance = tabName === "balance";

    balanceBtn.classList.toggle("active", isBalance);
    budgetBtn.classList.toggle("active", !isBalance);

    balanceContent.classList.toggle("active", isBalance);
    budgetContent.classList.toggle("active", !isBalance);
  }

  balanceBtn.addEventListener("click", function () {
    showTab("balance");
  });

  budgetBtn.addEventListener("click", function () {
    showTab("budget");
  });

  // Default view
  showTab("balance");
}

document.addEventListener("DOMContentLoaded", function () {
  setupMobileMenu();
  setupMomLifeTabs();
});
