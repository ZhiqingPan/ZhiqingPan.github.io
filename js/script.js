let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    sideBar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
}

document.getElementById("onoffswitch").onclick = function() {
    if (this.checked) {
        console.log("在ON的状态下");
    } else {
        console.log("在OFF的状态下");
    }
};

