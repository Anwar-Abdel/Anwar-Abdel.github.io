/*==================== toggle icon navbar ====================*/
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

/*==================== scroll reveal ====================*/
/*==================== typed js ====================*/

// Header data
const headerData = {
    logoText: 'Portfolio',
    navLinks: [
        { text: 'Home', href: '#home', isActive: true },
        { text: 'About', href: '#about', isActive: false },
        { text: 'Services', href: '#services', isActive: false },
        { text: 'Portfolio', href: '#portfolio', isActive: false },
        { text: 'Contact', href: '#contact', isActive: false }
    ]
};

// Function to create header and append it to the body
function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    // Logo
    const logoLink = document.createElement('a');
    logoLink.href = '#';
    logoLink.classList.add('logo');
    logoLink.textContent = headerData.logoText;

    // Menu icons
    const menuIcon = document.createElement('i');
    menuIcon.classList.add('bx', 'bx-menu');
    menuIcon.id = 'menu-icon';

    // Navigation bar
    const navBar = document.createElement('nav');
    navBar.classList.add('navbar');

    // Navigation links
    headerData.navLinks.forEach(linkData => {
        const link = document.createElement('a');
        link.href = linkData.href;
        link.textContent = linkData.text;
        if (linkData.isActive) {
            link.classList.add('active');
        }
        navBar.appendChild(link);
    });

    // Append elements to header
    header.appendChild(logoLink);
    header.appendChild(menuIcon);
    header.appendChild(navBar);

    // Append header to body
    document.body.appendChild(header);

    // Add event listener for menu icon
    menuIcon.addEventListener('click', function() {
        navBar.classList.toggle('active');
    });
}

// Call createHeader function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', createHeader);

