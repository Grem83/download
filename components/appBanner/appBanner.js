// navBrand.js
console.log('navBrand');
// PARAMETERS

let classes =   'jumbotron',
    appName =   'The Unarchiver',
    aTClasses = 'd-inline-flex flex-wrap align-items-top',
    aNClasses = 'm-0'

  // iSrc =      'components/navBrand/logo-7zip-macOS.svg'

// FUNCTION ALTER

function appBannerAlter () {

  let appBanner = document.getElementById("appBanner"),
      title = appBanner.querySelector("h3"),
      article = appBanner.querySelector("article")
  appBanner.className += "" + classes;
  title.textContent = appName;
  title.className += "" + aNClasses;
  article.className += "" + aTClasses;



}
appBannerAlter ();