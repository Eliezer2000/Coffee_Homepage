const openbutton = document.getElementById('openbutton')
const close = document.querySelector('.closebutton')
const menu = document.querySelector('.menu-list')
const title = document.getElementById('title')
const section = document.getElementById('section')

/*Definindo uma função no botão, para ao ser acionado abra o menu lateral e adcionando uma classe para ocultar os outros items para que o menu apareça sem interrupções.*/
openbutton.onclick = function(){
    close.classList.remove('invisible')
    openbutton.classList.add('invisible')
    title.classList.add('invisible')
    section.classList.add('invisible')
    menu.classList.remove('invisible')
}

/*Definindo uma função no botão para que ao ser acionado feche o menu e remova a classe adcionada anteriormente para a página.*/
close.onclick = function(){
    close.classList.add('invisible')
    openbutton.classList.remove('invisible')
    title.classList.remove('invisible')
    section.classList.remove('invisible')
    menu.classList.add('invisible')
}

                        /*JavaScript desenvolvido por Eliézer Alves Bernardino.*/

