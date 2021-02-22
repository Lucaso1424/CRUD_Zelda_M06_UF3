var divGuardado;
var string64; 

window.onload = function () {
  var btnPulsado = document.getElementById("guardarForm");
  btnPulsado.addEventListener("click", saveObject);

  //generarTabla();
  document.getElementById("formulario").style.visibility = "visible";

  document.getElementById("guardarForm").addEventListener("click",recorrer);
}


function generarTabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("div")[0];

  // Crea un elemento <table> y un elemento <tbody>
  var tabla = document.createElement("table");
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
      var textoCelda = document.createTextNode("celda en la hilera " + i + ", columna " + j);
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
function generarItems(){
  let body = document.getElementById("guardados");
  let tabla = document.createElement("table");
  let tbody = document.createElement("tbody");

  for(let i = 0; i < objetoForm.length;i++){
    let tr = document.createElement("tr");

    for(let j = 0; j < objetoForm[i].length;j++){
      let objeto = objetoForm[i];
      let id = objeto.id;
      let name = objeto.name;
      let namePlayer = objeto.namePlayer;
      let radialMenu = objeto.radialMenu;
      let vehiculo = objeto.vehiculo;
      console.log(id,name,namePlayer,radialMenu,vehiculo);

      let celda = document.createElement('td');
      let textCelda = document.createTextNode(name);
  }
}
}
function saveObject() {

  let checkedBoxes = document.querySelectorAll('.txtVehiculo1:checked');


  console.log(document.getElementById("txtID"));
  let id = document.getElementById("txtID").value,
    nombreJuego = document.getElementById("txtNameGame").value,
    nombreJugador = document.getElementById("txtNamePlayer").value,
    menuRadial = document.getElementById("txtMenuRadial").value
    vehiculo = checkedBoxes;
    img = string64;

    //img = document.querySelector("#txtImage").value;

    addItems(id, nombreJuego, nombreJugador, menuRadial, vehiculo,img);
}

function previewFile() {
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

    reader.onloadend = function () {
    string64 = reader.result;
    console.log(string64)
    }
    
    reader.readAsDataURL(file);

}

function recorrer(){

  for(let i = 0; i < objetoForm.length;i++){

      let id = objetoForm[i].id
      let nameGame = objetoForm[i].name
      let namePlayer = objetoForm[i].namePlayer
      let menuRadial = objetoForm[i].radialMenu
      let veh = "";
      for(let j = 0; j < objetoForm[i].vehiculo.length;j++){
        veh += objetoForm[i].vehiculo[j].name;
      }

      let img = objetoForm[i].image
      
      console.log(id,nameGame,namePlayer,menuRadial,veh,img);
}
}