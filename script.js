document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");
    const closeSidebar = document.querySelector(".close-btn");
    const sidebarItems = document.querySelectorAll(".sidebar-item");

    // Toggle Sidebar
    menuToggle.addEventListener("click", function () {
        sidebar.classList.add("show");
    });

    closeSidebar.addEventListener("click", function () {
        sidebar.classList.remove("show");
    });

    // Toggle Submenu
    sidebarItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
   //circle section
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navCollapse.style.display = "flex";
        } else {
            navCollapse.style.display = "none";
        }
    });

    /*search_icon*/
    const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar-container');
const closeSearch = document.getElementById('close-search');

searchIcon.addEventListener('click', () => {
    searchBar.classList.add('active');
    searchBar.querySelector('input').focus();
});

closeSearch.addEventListener('click', () => {
    searchBar.classList.remove('active');
});



});