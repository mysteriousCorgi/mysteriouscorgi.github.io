document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item span');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });
});