/* We are using javasript to open and close a menu */

function openMenu() {
    document.body.classList += " menu--open"
  }
  
  function closeMenu() {
    document.body.classList.remove('menu--open')
  }