
document.addEventListener('DOMContentLoaded', () => {
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuIcon = document.getElementById('menuIcon');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerItems = document.querySelectorAll('.drawer-item');
const navbar = document.getElementById('navbar');

// Toggle Mobile Drawer Function
function toggleDrawer() {
    const isOpen = mobileDrawer.classList.contains('open');
    if (isOpen) {
        mobileDrawer.classList.remove('open');
        drawerOverlay.classList.remove('active');
        menuIcon.setAttribute('name', 'menu-outline');
    } else {
        mobileDrawer.classList.add('open');
        drawerOverlay.classList.add('active');
        menuIcon.setAttribute('name', 'close-outline');
    }
}

// Event Listeners for Hamburger Menu
hamburgerBtn.addEventListener('click', toggleDrawer);
drawerOverlay.addEventListener('click', toggleDrawer);

// Close Drawer when a link is clicked
drawerItems.forEach(item => {
    item.addEventListener('click', () => {
        if (mobileDrawer.classList.contains('open')) {
            toggleDrawer();
        }
    });
});

// Navbar Subtle Blur / Shadow on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
});



/*

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Mobile Menu
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const menuIcon = document.getElementById('menuIcon');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerItems = document.querySelectorAll('.drawer-item');

    function toggleDrawer() {
        const isOpen = mobileDrawer.classList.contains('open');
        if (isOpen) {
            mobileDrawer.classList.remove('open');
            drawerOverlay.classList.remove('active');
            menuIcon.setAttribute('name', 'menu-outline');
        } else {
            mobileDrawer.classList.add('open');
            drawerOverlay.classList.add('active');
            menuIcon.setAttribute('name', 'close-outline');
        }
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleDrawer);
        drawerOverlay.addEventListener('click', toggleDrawer);
        drawerItems.forEach(item => item.addEventListener('click', () => {
            if (mobileDrawer.classList.contains('open')) toggleDrawer();
        }));
    }
});

*/

// Category Filtering Function
function filterCategory(category, button) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    button.classList.add('active');

    const groups = document.querySelectorAll('.category-group');
    groups.forEach(group => {
        if (category === 'all' || group.getAttribute('data-category') === category) {
            group.style.display = 'block';
        } else {
            group.style.display = 'none';
        }
    });
}

// Modal Functionality
function openBookingModal(serviceTitle) {
    const modal = document.getElementById('bookingModal');
    const serviceInput = document.getElementById('serviceName');
    if (serviceInput) serviceInput.value = serviceTitle;
    if (modal) modal.classList.add('active');
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) modal.classList.remove('active');
}

function handleFormSubmit(event) {
    event.preventDefault();
    const service = document.getElementById('serviceName').value;
    const client = document.getElementById('clientName').value;
    const contact = document.getElementById('clientContact').value;
    
    // Redirect to WhatsApp with pre-filled message
    const message = `Hello J-CORE LABS, my name is ${client}. I am interested in booking: *${service}*. Contact: ${contact}`;
    const whatsappUrl = `https://wa.me/256758477051?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    closeBookingModal();
}
