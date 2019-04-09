const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.querySelector('header #logo-img');
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navLinks = Array.from(document.querySelectorAll('header nav a'));

let homeLink = document.createElement('a');
homeLink.href = '#';
homeLink.textContent = 'Home';
homeLink.style.color = 'green';
document.querySelector('header nav').prepend(homeLink);

let careerLink = document.createElement('a');
careerLink.href = '#';
careerLink.textContent = 'Careers';
careerLink.style.color = 'green';
document.querySelector('header nav').appendChild(careerLink);

function addLinks() {
  for(i = 0; i < navLinks.length; i++){
    navLinks[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
    navLinks[i].style.color = 'green';
  }
};
addLinks();


let ctaHeader = document.querySelector('.cta h1');
ctaHeader.textContent = siteContent.cta['h1'];
let ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent.cta['img-src'];
let ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent.cta['button'];
ctaButton.addEventListener('click', function(){
  if(ctaHeader.textContent == 'DOM Is Awesome'){
    ctaHeader.textContent = 'DOM 2 is better';
  } else {
    ctaHeader.textContent = siteContent.cta['h1'];
  }
});


let textContentHeaders = Array.from(document.querySelectorAll('.text-content h4'));
textContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
textContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
textContentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
textContentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
textContentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

let textContentParagraphs = Array.from(document.querySelectorAll('.text-content p'));
textContentParagraphs[0].textContent = siteContent["main-content"]["features-content"];
textContentParagraphs[1].textContent = siteContent["main-content"]["about-content"];
textContentParagraphs[2].textContent = siteContent["main-content"]["services-content"];
textContentParagraphs[3].textContent = siteContent["main-content"]["product-content"];
textContentParagraphs[4].textContent = siteContent["main-content"]["vision-content"];

let mainContentImg = document.querySelector('#middle-img');
mainContentImg.src = siteContent["main-content"]["middle-img-src"];

let contact = Array.from(document.querySelector('.contact').children);
contact[0].textContent = siteContent["contact"]["contact-h4"];
contact[1].textContent = siteContent["contact"]["address"];
contact[2].textContent = siteContent["contact"]["phone"];
contact[3].textContent = siteContent["contact"]["email"];

let footer = document.querySelector('footer p').textContent = siteContent.footer.copyright;

let jumbo = document.querySelector('.cta');
jumbo.style.background = 'lightgray';
jumbo.style.borderRadius = '5px';
jumbo.style.padding = '10px';

