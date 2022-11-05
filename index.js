
var contador = 1;

document.querySelector(".menu_bar").addEventListener("click",cambiar)


function cambiar(){
    if(contador==0){
        document.querySelector("#NavMobile").classList.add("visto"),
        contador=1}

    else{
        document.querySelector("#NavMobile").classList.remove("visto"),
        contador=0
    }


}