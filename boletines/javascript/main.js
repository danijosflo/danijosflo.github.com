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

        //Para agregar el tiempo en el que se debe de mostrar una animacion
        setTimeout(function(){
            location.href = "../index.html";
        },600);
        //setInterval se ejecurta cada tiempo que se le indique
        
        return false;
    })
})
