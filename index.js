const openbutton = document.getElementById('openbutton')
const close = document.querySelector('.closebutton')
const menu = document.querySelector('.menu-list')
const title = document.getElementById('title')
const section = document.querySelector('section')


openbutton.onclick = function(){
    close.classList.remove('invisible')
    openbutton.classList.add('invisible')
    title.classList.add('invisible')
    section.classList.add('invisible')
    menu.classList.remove('invisible')
}

close.onclick = function(){
    close.classList.add('invisible')
    openbutton.classList.remove('invisible')
    title.classList.remove('invisible')
    section.classList.remove('invisible')
    menu.classList.add('invisible')
}
/*
  window.onresize = function(event) {
    if (window.innerWidth >= 1024) {
        menu.classList.remove('invisible')
        title.classList.add('invisible')
    }
    else if(window.innerWidth < 1024) {
        menu.classList.add('invisible')
        title.classList.remove('invisible')
    }
  };

  */

