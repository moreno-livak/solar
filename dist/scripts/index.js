"use strict";

// tooltip
var tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(function (tooltip) {
  var instance = new Tooltip(tooltip);
  instance.init();
}); // tabs

var tabs = new Tabs(document.querySelector('.tabs'));
tabs.init(); // dropdown

var dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(function (dropdown) {
  var instance = new Dropdown(dropdown);
  instance.init();
}); // MobileMenu

var mainMenu = document.querySelector('.mainMenu');
var closeMenu = document.querySelector('.closeMenu');
var openMenu = document.querySelector('.openMenu');
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}
