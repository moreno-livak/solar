"use strict";

function init() {
  if (document.querySelector('.tooltip')) {
    var _tooltips = document.querySelectorAll('.tooltip');

    _tooltips.forEach(function (tooltip) {
      var instance = new Tooltip(tooltip);
      instance.init();
    });
  }

  if (document.querySelector('.tabs')) {
    var _tabs = new Tabs(document.querySelector('.tabs'));

    _tabs.init();
  }

  if (document.querySelector('.dropdown')) {
    var _dropdowns = document.querySelectorAll('.dropdown');

    _dropdowns.forEach(function (dropdown) {
      var instance = new Dropdown(dropdown);
      instance.init();
    });
  }

  if (document.querySelector('.mainMenu')) {
    var _show = function _show() {
      _mainMenu.style.display = 'flex';
      _mainMenu.style.top = '0';
    };

    var _close = function _close() {
      _mainMenu.style.top = '-100%';
    };

    var _mainMenu = document.querySelector('.mainMenu');

    var _closeMenu = document.querySelector('.closeMenu');

    var _openMenu = document.querySelector('.openMenu');

    _openMenu.addEventListener('click', _show);

    _closeMenu.addEventListener('click', _close);
  }
} // tooltip


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
