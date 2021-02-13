
 /*

window.onload = function(){
   // recargaLista("guardados");
   document.getElementById("formulario").style.visibility = "hidden";
}



function esVisible(id,id2){
        document.getElementById(id2).style.visibility ="hidden";
        document.getElementById(id).style.visibility = "visible";
}


function CreacionTarjeta(){
    let tarjeta = document.createElement("div");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let span = document.createElement("span");  
    
    img.setAttribute("src", "img/trifuerza.jpg");
    div.setAttribute("class", "flex-column center");
    span.innerText = "Trifuerza";
    
    tarjeta.appendChild(img);
    tarjeta.appendChild(div);
    tarjeta.appendChild(span);

    tarjeta.setAttribute("class","flex-row space-between item-activity");
    
    return tarjeta;
}


function recargaLista(menu){
    document.getElementById("formulario").style.visibility = "hidden";
    document.getElementById("guardados").style.visibility = "visible";
    document.getElementById(menu).innerHTML ="";
    document.getElementById(menu).appendChild(CreacionTarjeta());

}


*/

var btnPulsado = document.getElementById("guardarForm");
btnPulsado.querySelector("guardarForm").addEventListener("click",saveObject);

var divGuardado;
window.onload =  function(){


    generarTabla();
    document.getElementById("formulario").style.visibility = "visible";
  

}


function generarTabla(){
// Obtener la referencia del elemento body
var body = document.getElementsByTagName("div")[0];

// Crea un elemento <table> y un elemento <tbody>
var tabla   = document.createElement("table");
var tblBody = document.createElement("tbody");

// Crea las celdas
for (var i = 0; i < 2; i++) {
  // Crea las hileras de la tabla
  var hilera = document.createElement("tr");

  for (var j = 0; j < 2; j++) {
    // Crea un elemento <td> y un nodo de texto, haz que el nodo de
    // texto sea el contenido de <td>, ubica el elemento <td> al final
    // de la hilera de la tabla
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
    celda.appendChild(textoCelda);
    hilera.appendChild(celda);
  }

  // agrega la hilera al final de la tabla (al final del elemento tblbody)
  tblBody.appendChild(hilera);
}

// posiciona el <tbody> debajo del elemento <table>
tabla.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tabla);
// modifica el atributo "border" de la tabla y lo fija a "2";
tabla.setAttribute("border", "2");
}

/* AÑADIR VALORES FORM AL JSON  */ 


function saveObject(){
  let id = document.querySelector("#txtId").value,
    nombreJuego = document.querySelector("#txtNameGame").value,
    nombreJugador = document.querySelector("#txtNamePlayer").value,
    menuRadial = document.querySelector("#txtMenuradial").value,
    dificultad = document.querySelector("#txtDifficulty").value;
    //img = document.querySelector("#txtImage").value;

    addItems(id,nombreJuego,nombreJugador,menuRadial,dificultad);
}