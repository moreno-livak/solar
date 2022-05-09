"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Tooltip = /*#__PURE__*/function () {
  function Tooltip(element) {
    _classCallCheck(this, Tooltip);

    this.element = element;
    this.message = element.getAttribute('data-message');
  }

  _createClass(Tooltip, [{
    key: "init",
    value: function init() {
      var tip = document.createElement('div');
      tip.classList.add('tip');
      tip.textContent = this.message;
      this.element.appendChild(tip); // Wenn Maus drüber fährt Klasse hinzügen

      this.element.addEventListener('mouseenter', function () {
        tip.classList.add('active');
      }); // Wenn Maus wegeht wird Klasse entfernt

      this.element.addEventListener('mouseleave', function () {
        tip.classList.remove('active');
      });
    }
  }]);

  return Tooltip;
}();

var Tabs = /*#__PURE__*/function () {
  function Tabs(container) {
    _classCallCheck(this, Tabs);

    this.container = container;
    this.tabs = container.querySelectorAll('.trigger');
  }

  _createClass(Tabs, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.tabs.forEach(function (tab) {
        tab.addEventListener('click', function (e) {
          if (e.target.tagName === 'LI') {
            _this.toggleTabs(e);

            _this.toggleContent(e);
          }
        });
      });
    }
  }, {
    key: "toggleTabs",
    value: function toggleTabs(e) {
      // remove current active classes
      this.tabs.forEach(function (tab) {
        return tab.classList.remove('active');
      }); // add new active class

      e.target.classList.add('active');
    }
  }, {
    key: "toggleContent",
    value: function toggleContent(e) {
      // remove current active classes
      this.container.querySelectorAll('.content').forEach(function (item) {
        item.classList.remove('active');
      }); // add new active class

      var selector = e.target.getAttribute('data-target');
      var content = this.container.querySelector(selector);
      content.classList.add('active');
    }
  }]);

  return Tabs;
}();

var Dropdown = /*#__PURE__*/function () {
  function Dropdown(container) {
    _classCallCheck(this, Dropdown);

    this.container = container;
    this.trigger = container.querySelector('.trigger');
    this.content = container.querySelector('.content');
  }

  _createClass(Dropdown, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.trigger.addEventListener('click', function () {
        _this2.trigger.classList.toggle('active');

        _this2.content.classList.toggle('active');
      });
    }
  }]);

  return Dropdown;
}();

;
