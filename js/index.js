let zelda = {
    "nom":"Zelda",
    "id":0,
} 


window.onload = function() {
    recargaLista("guardados");
}

function CreacionTarjeta() {
    let tarjeta = document.createElement("div");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let span = document.createElement("span");  
    
    img.setAttribute("src", "img/trifuerza.jpg", "width", "300", "height", "200");
    div.setAttribute("class", "flex-column center");
    span.innerText = "Trifuerza";
    
    tarjeta.appendChild(img);
    tarjeta.appendChild(div);
    tarjeta.appendChild(span);

    tarjeta.setAttribute("class","flex-row space-between item-activity");
    
    return tarjeta;
}


function recargaLista(menu){
    document.getElementById(menu).innerHTML ="";
    document.getElementById(menu).appendChild(CreacionTarjeta());

}