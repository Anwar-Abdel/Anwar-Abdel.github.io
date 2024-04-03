/*==================== toggle icon navbar ====================*/
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

/*==================== scroll reveal ====================*/
/*==================== typed js ====================*/
/*
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

const sectionData = [
    {
      id: 'home',
      class: 'home',
      content: `
        <div class="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Jamie Bond</h1>
          <h3>And I'm a <span>Frontend Engineer</span></h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis itaque voluptatem harum libero odit magni
            cumque beatae sed sint incidunt! Ipsam quibusdam, dolorum vitae atque obcaecati impedit cumque eligendi sequi?
          </p>
          <div class="social-media">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-twitter'></i></a>
            <a href="#"><i class='bx bxl-instagram' ></i></a>
            <a href="#"><i class='bx bxl-linkedin'></i></a>
          </div>
          <a href="#" class="btn">Download CV</a>
        </div>
        <div class="home-img">
          <img src="./images/personal-portfolio-pic.png" alt="">
        </div>
      `
    },
    {
      id: 'about',
      class: 'about',
      content: `
        <div class="about-content">
          <!-- Add your about content here -->
        </div>
      `
    },
    {
      id: 'services',
      class: 'services',
      content: `
        <div class="services-content">
          <!-- Add your services content here -->
        </div>
      `
    },
    {
      id: 'portfolio',
      class: 'portfolio',
      content: `
        <div class="portfolio-content">
          <!-- Add your portfolio content here -->
        </div>
      `
    },
    {
      id: 'contact',
      class: 'contact',
      content: `
        <div class="contact-content">
          <!-- Add your contact content here -->
        </div>
      `
    }
  ];
  
  // Function to create section elements and append them to the body
  function createSections() {
    const body = document.body;
  
    sectionData.forEach(section => {
      const sectionElement = document.createElement('section');
      sectionElement.setAttribute('id', section.id);
      sectionElement.classList.add(section.class);
      sectionElement.innerHTML = section.content;
      body.appendChild(sectionElement);
    });
  }
  
  // Call createSections function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', createSections);
  */