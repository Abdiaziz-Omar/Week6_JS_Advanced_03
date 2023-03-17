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
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])

  // Nav Bar
const navi = document.querySelectorAll("nav a")
navi.forEach((item, index) =>{
  item.textContent = siteContent["nav"][`nav-item-${index+1}`]
})
// console.log(navi)

// Title and Button
const title = document.querySelector(".cta-text h1")
title.textContent = siteContent["cta"]["h1"]
// console.log(title)


const butt = document.querySelector(".cta-text button")
butt.textContent = siteContent["cta"]["button"]
// console.log(butt)


// Image of a code snippet.
const code = document.querySelector("#cta-img")
code.setAttribute("src", siteContent["cta"]["img-src"])
console.log(code)


// main-content
// top-content-1
const text1 = document.querySelector(".text-content h4")
text1.textContent = siteContent["main-content"]["features-h4"]
// console.log(text1)


// top-content-2
const text2 = document.querySelector(".text-content p")
text2.textContent = siteContent["main-content"]["features-content"]
// console.log(text2)

// top-content-3
const text3 = document.querySelector(".text-content h4")
text3.textContent = siteContent["main-content"]["about-h4"]
// console.log(text3)

// top-content-4
const text4 = document.querySelector(".text-content p")
text4.textContent = siteContent["main-content"]["about-content"]
// console.log(text4)

// Middle-Img
const Middle = document.querySelector(".middle-img")
Middle.setAttribute("src",siteContent["main-content"]["middle-img-src"])
// console.log(Middle)

// bottom-content-1
const text5 = document.querySelector(".text-content h4")
text5.textContent = siteContent["main-content"]["services-h4"]
// console.log(text5)

// bottom-content-2
const text6 = document.querySelector(".text-content p")
text6.textContent = siteContent["main-content"]["services-content"]
// console.log(text6)

// bottom-content-3
const text7 = document.querySelector(".text-content h4")
text7.textContent = siteContent["main-content"]["product-h4"]
// console.log(text7)

// bottom-content-4
const text8 = document.querySelector(".text-content p")
text8.textContent = siteContent["main-content"]["product-content"]
// console.log(text8)

// bottom-content-5
const text9 = document.querySelector(".text-content h4")
text9.textContent = siteContent["main-content"]["vision-h4"]
// console.log(text9)

// bottom-content-6
const text10 = document.querySelector(".text-content p")
text10.textContent = siteContent["main-content"]["vision-content"]
// console.log(text10)

const tact = document.querySelector(".contact h4")
tact.textContent = siteContent["contact"]["contact-h4"]
// console.log(tact)

const p1 = document.querySelector(".contact p")
p1.textContent = siteContent["contact"]["address"]
// console.log(p1)

const p2 = document.querySelector(".contact p")
p2.textContent = siteContent["contact"]["phone"]
// console.log(p2)

const p3 = document.querySelector(".contact p")
p3.textContent = siteContent["contact"]["email"]
// console.log(p3)

const footer = document.querySelector("footer")
footer.textContent = siteContent["footer"]["copyright"]
// console.log(footer)