// navBrand.js

// PARAMETERS

let classes =   'navbar-brand text-dark',
    href =      '#',
    siteName =  '7zipmac.fr',
    sNClasses = 'h4',
    iClasses =  'mr-2',
    iSrc =      'components/navBrand/logo-7zip-macOS.svg'

// FUNCTION ALTER

function navBrandAlter () {

  let navBrand = document.getElementById("navBrand"),
      text = navBrand.querySelector("span"),
      img = navBrand.querySelector("img")
  navBrand.className += "" + classes;
  navBrand.href = href;
  text.textContent = siteName;
  text.className += "" + sNClasses;
  img.className += "" + iClasses;
  img.src = iSrc;

}
navBrandAlter ();