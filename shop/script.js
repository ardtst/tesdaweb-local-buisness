let menu = document.ElementById('nav');
let open = document.ElementById('menu-btn');
let close = document.ElementById('close');


function openmenu(){
    menu.style.left="0";
    open.style.display="none";
    close.style.display="block";
}
function closemenu(){
    menu.tsyle.left="-100";
    open.style.display="block"
    close.style.display="none"
}

//nav bg color change

function change(){
    var nav = document.ElementById("navbar")
    var value =window.scrollY;
    if (value > 80) {
        nav.classList.add("nav-change");
    }else{
        nav.classList.remove("nav-change");
    }
}

window.addEventListener("scroll", change);