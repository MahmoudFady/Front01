const navbarToggler = document.querySelector(".navbar .navbar-toggler");
const navbarCollapse = document.querySelector(".navbar .navbar-collapse");
navbarToggler.onclick = function () {
  const icon = this.children[0];
  const isActive = icon.classList.contains("fa-times");
  if (isActive) {
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
    //navbarCollapse.style.display = "none";
  } else {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
    //navbarCollapse.style.display = "block";
  }
  navbarCollapse.classList.toggle("navbarCollapseIsActive");
};
// search box
let searchBtn = document.getElementById("search-btn");
let searchBox = "";
searchBtn.onclick = () => {
  searchBox = document.getElementById("search-box");
  searchBox.style.top = "0%";
  searchBox.style.opacity = "100%";
};
let closeSearchBox = document.getElementById("closeSearhBoxBtn");
closeSearchBox.onclick = () => {
  searchBox.style.top = "-100%";
  searchBox.style.opacity = "0%";
};
