//Navbar
var topnav = document.getElementById("js-menu"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    topnav.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};

// Back to top
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Contendorpost

let links = document.querySelectorAll(".close");

links.forEach(function(link){

    link.addEventListener("click",function(evento){
        evento.preventDefault();
        let content = document.querySelector('.content');

        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "../page/paginas.html";
        },1000);        
        return false;
    })
})