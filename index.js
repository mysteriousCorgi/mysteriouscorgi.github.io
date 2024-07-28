document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item > span");

    menuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            const submenu = this.nextElementSibling;
            submenu.style.display = submenu.style.display === "none" || submenu.style.display === "" ? "block" : "none";
        });
    });
});
