//Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){

    //Agregar un evento click a cada uno de ellos

    link.addEventListener("click",function(evento){
        evento.preventDefault();
        let content = document.querySelector('.content');

        //Quitarle las clases de animacion que ya tiene

        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar clases para animar su salida fadeOutUp

        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "../page/paginas.html";
        },1000);
        //setInterval se ejecurta cada tiempo que se le indique
        
        return false;
    })
})