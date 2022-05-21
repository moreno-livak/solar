"use strict";

// Swup Reload Function
function init() {
  if (document.querySelector('.tooltip')) {
    var tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(function (tooltip) {
      var instance = new Tooltip(tooltip);
      instance.init();
    });
  }

  if (document.querySelector('.tabs')) {
    var tabs = new Tabs(document.querySelector('.tabs'));
    tabs.init();
  }

  if (document.querySelectorAll('.dropdown')) {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
      var instance = new Dropdown(dropdown);
      instance.init();
    });
  }

  if (document.querySelector('.mainMenu')) {
    var show = function show() {
      mainMenu.style.display = 'flex';
      mainMenu.style.top = '0';
    };

    var close = function close() {
      mainMenu.style.top = '-100%';
    };

    var mainMenu = document.querySelector('.mainMenu');
    var closeMenu = document.querySelector('.closeMenu');
    var openMenu = document.querySelector('.openMenu');
    openMenu.addEventListener('click', show);
    closeMenu.addEventListener('click', close);
  }
}
