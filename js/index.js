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
    "h1": "DOM"+"<br>"+ "Is" +"<br>"+ "Awesome",
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
    "address" : "123 Way 456 Street" + "<br>" + "Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav

let nav1 = document.querySelector('nav a')
nav1.textContent = siteContent["nav"]["nav-item-1"]

let nav2 = document.querySelector('nav a:nth-child(2)')
nav2.textContent = siteContent["nav"]["nav-item-2"]

let nav3 = document.querySelector('nav a:nth-child(3)')
nav3.textContent = siteContent["nav"]["nav-item-3"]

let nav4 = document.querySelector('nav a:nth-child(4)')
nav4.textContent = siteContent["nav"]["nav-item-4"]

let nav5 = document.querySelector('nav a:nth-child(5)')
nav5.textContent = siteContent["nav"]["nav-item-5"]

let nav6 = document.querySelector('nav a:nth-child(6)')
nav6.textContent = siteContent["nav"]["nav-item-6"]

//cta

let header = document.querySelector('h1')
header.innerHTML = siteContent['cta']['h1']


let button = document.querySelector('button')
button.textContent = siteContent['cta']['button']

let bigImg = document.querySelector('#cta-img')
bigImg.setAttribute('src', siteContent['cta']['img-src'])

//main-content

let mainHeader1 = document.querySelector('h4')
mainHeader1.textContent = siteContent['main-content']['features-h4']

let mainContent1 = document.querySelector('.text-content p')
mainContent1.textContent = siteContent['main-content']['features-content']

let mainHeader2 = document.querySelector('.text-content:nth-child(2) h4')
mainHeader2.textContent = siteContent['main-content']['about-h4']

let mainContent2 = document.querySelector('.text-content:nth-child(2) p')
mainContent2.textContent = siteContent['main-content']['about-content']

let midImg = document.querySelector('.middle-img')
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let mainHeader3 = document.querySelector('.bottom-content .text-content h4')
mainHeader3.textContent = siteContent['main-content']['services-h4']

let mainContent3 = document.querySelector('.bottom-content .text-content p')
mainContent3.textContent = siteContent['main-content']['services-content']

let mainHeader4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4')
mainHeader4.textContent = siteContent['main-content']['product-h4']

let mainContent4 = document.querySelector('.bottom-content .text-content:nth-child(2) p')
mainContent4.textContent = siteContent['main-content']['product-content']

let mainHeader5 = document.querySelector('.bottom-content .text-content:nth-child(3) h4')
mainHeader5.textContent = siteContent['main-content']['vision-h4']

let mainContent5 = document.querySelector('.bottom-content .text-content:nth-child(3) p')
mainContent5.textContent = siteContent['main-content']['vision-content']

//contact

let contactHeader = document.querySelector('.contact h4')
contactHeader.textContent = siteContent['contact']['contact-h4']

let address = document.querySelector('.contact p')
address.innerHTML = siteContent['contact']['address']

let phone = document.querySelector('.contact p:nth-child(3)')
phone.textContent = siteContent['contact']['phone']

let  email = document.querySelector('.contact p:nth-child(4)')
email.textContent = siteContent['contact']['email'] 

//footer

let footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']

//part 2
let newnav = document.querySelector('nav')

let server = document.createElement('a')
server.textContent = 'Server'
newnav.appendChild(server)

let ideas = document.createElement('a')
ideas.textContent = 'Ideas'
newnav.appendChild(ideas)

let navStyle = document.querySelectorAll('a')
navStyle.forEach(element => element.style.color = 'green')


