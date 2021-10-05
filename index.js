let menu = document.querySelector('.left_arrow');
let nav = document.querySelector('.right_nav');
let tab = document.querySelector('.right_arrow');


menu.onclick = () =>{
    nav.classList.add('active');
    nav.classList.remove('joy');
}
tab.onclick = () =>{
    nav.classList.toggle('joy');
    nav.classList.remove('active');
}









let enu = document.querySelector('.left_right_arrow');
let gav = document.querySelector('.left_nav');
let fab = document.querySelector('.left_left_arrow');


enu.onclick = () =>{
    gav.classList.add('ctive');
    gav.classList.remove('jy');
}
fab.onclick = () =>{
    gav.classList.toggle('jy');
    gav.classList.remove('ctive');
}
