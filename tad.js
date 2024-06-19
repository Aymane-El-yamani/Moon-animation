let stars1=document.getElementById('stars1');
let moon2=document.getElementById('moon2');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river5=document.getElementById('river5');
let boat6=document.getElementById('boat6');
let mountains7=document.getElementById('mountains7');
let knowledge=document.querySelector('.knowledge');


window.onscroll = function(){

    let value =scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value + 'px';
    boat6.style.left = value + 'px';
   
}











