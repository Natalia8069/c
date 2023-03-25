//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto 
        menu.style.display = "block";
        menu_visible = true;

    }
    else{
        menu.style.display = "none"
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opcion 
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono  todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);



//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra,cantidad, indice, _interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
         let elementos = id_barra.getElementByIdClassName("e");
         elementos[x].style.backgroundColor = "#940253";
    }else{
        crearInterval(Interval)
    }
}

