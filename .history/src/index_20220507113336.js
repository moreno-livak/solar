

// tooltip
const tooltip = new Tooltip(document.querySelector('#tooltip'));
const tooltip2 = new Tooltip(document.querySelector('#tooltip2'));
tooltip.init();
tooltip2.init();


// tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();


// dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance =  new Dropdown(dropdown);
  instance.init();
})


// MobileMenu
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-100%';
}


