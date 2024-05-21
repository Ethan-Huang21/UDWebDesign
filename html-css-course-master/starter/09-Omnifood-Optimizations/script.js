console.log("Hello World!");

const myName = 'Jonas Schmedtmann';
const h1 = document.querySelector('.heading-primary');

console.log(myName);
console.log(h1);

// h1.addEventListener('click', function() {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// })

///////////////////////////////////////////////////////////
/* Get Year and Set it */
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Make Mobile Navigation Work
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function() {
  // toggle -- remove if it exists, add if it doesnt
  headerEl.classList.toggle("nav-open");
})
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Smooth Scrolling Animation
const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);

allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    console.log(e);
    /* To skip the default .html stuff we did */
    e.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);

    // scroll back to top
    // this doesn't always work in safari either
    // We copy the pkg link below in a <script src="link"></script> in our HTML file
    // This should fix it
    if (href === "#") window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });


    // scroll to other links
    if (href !== "#" && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior: "smooth"});
    }

    // Close mobile navigation if it's open
    if (link.classList.contains('main-nav-link')) {
      // toggle -- remove if it exists, add if it doesnt
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
// Sticky Navigation Bar (add when hero is gone)

const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  console.log(ent);

  if (!ent.isIntersecting) {
    document.body.classList.add('sticky');
  }

  if (ent.isIntersecting) {
    document.body.classList.remove("sticky");
  }
}, 
{
  // In the viewport
  root: null,
  // We will have an event as soon as 0% is inside the viewport
  // 0 -- as soon as it leaves, essentially.
  threshold: 0,
  // Essentially, a margin so we can set it earlier
  rootMargin:"-80px"
});
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  /* If it's not supported, add the below to the add the gap back with margins */
  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js


/* For our project, copy this into queries.css */
/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
