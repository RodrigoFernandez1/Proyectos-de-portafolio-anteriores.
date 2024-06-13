function toggleSidebar() {
    var sidebar = document.querySelector('.dropdown');
    sidebar.style.left = (sidebar.style.left === '0px' || sidebar.style.left === '') ? '-250px' : '0px';
}

