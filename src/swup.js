
// Swup Reload Function
function init() {

  function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
    
    while (el) {
    if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;
    
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
    
    el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
  }

  function scrollToPlace(){ 
    let myElement = document.querySelector("#need-to-scroll-here"); // Here is the element that we want to scroll to 
    let position = getPosition(myElement);     
    pageWrapper.scrollTo(0, position.y);
  }
  
  if (document.querySelector('.tooltip')) {
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
      const instance = new Tooltip(tooltip);
      instance.init();
    })
  }

  if (document.querySelector('.tabs')) {
    const tabs = new Tabs(document.querySelector('.tabs'));
    tabs.init();
  }

  if (document.querySelectorAll('.dropdown')){
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
      const instance =  new Dropdown(dropdown);
      instance.init();
    })
  }

  if (document.querySelector('.mainMenu')){
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
  }
}