function initHeaderFeatures() {
  // Grab elements
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menu-toggle");
  const closeSidebar = document.querySelector(".close-btn");
  const sidebarItems = document.querySelectorAll(".sidebar-item");

  const searchIcon = document.getElementById('search-icon');
  const searchBar = document.getElementById('search-bar-container');
  const closeSearch = document.getElementById('close-search');
  const searchInput = document.getElementById('site-search');

  /*Add sidebar functionality
  menuToggle?.addEventListener("click", () => sidebar?.classList.add("show"));
  closeSidebar?.addEventListener("click", () => sidebar?.classList.remove("show"));
  sidebarItems.forEach(item => item.addEventListener("click", () => item.classList.toggle("active")));*/

  /* Toggle search bar
  searchIcon?.addEventListener('click', () => {
    searchBar?.classList.add('active');
    searchInput?.focus();
  });
  closeSearch?.addEventListener('click', () => searchBar?.classList.remove('active'));*/

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

  //Search logic
  searchInput?.addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();

    // Sidebar filtering
    document.querySelectorAll('.sidebar .submenu li').forEach(item => {
      const text = item.innerText.toLowerCase();
      item.style.display = text.includes(query) ? 'block' : 'none';
    });

    // Main section cards
    document.querySelectorAll('.section-con .section').forEach(section => {
      const text = section.innerText.toLowerCase();
      section.style.display = text.includes(query) ? 'block' : 'none';
    });

    // "Why LB Decorators" images
    document.querySelectorAll('.container img').forEach(img => {
      const altText = img.alt?.toLowerCase() || '';
      img.style.display = altText.includes(query) ? 'block' : 'none';
    });

    // Carousel images
    document.querySelectorAll('.carousel img').forEach(img => {
      const altText = img.alt?.toLowerCase() || '';
      img.style.display = altText.includes(query) ? 'inline-block' : 'none';
    });
  // product_card
     
      document.querySelectorAll('.product_card ').forEach(section => {
        const text = section.innerText.toLowerCase();
        section.style.display = text.includes(query) ? 'block' : 'none';
      });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  console.log("✅ header.js fully initialized");
}



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



// Run only when this script is loaded dynamically
initHeaderFeatures();