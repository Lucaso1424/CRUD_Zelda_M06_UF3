var divGuardado;

window.onload = function () {
  var btnPulsado = document.getElementById("guardarForm");
  btnPulsado.addEventListener("click", saveObject);
  //generarTabla();
  document.getElementById("formulario").style.visibility = "visible";
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
// function generarItems() {
//   let body = document.getElementById("guardados");
//   let tabla = document.createElement("table");
//   let tbody = document.createElement("tbody");

//   for (let i = 0; i < objetoForm.length; i++) {
//     let tr = document.createElement("tr");

//     for (let j = 0; j < objetoForm[i].length; j++) {
//       let objeto = objetoForm[i];
//       let id = objeto.id;
//       let name = objeto.name;
//       let namePlayer = objeto.namePlayer;
//       let radialMenu = objeto.radialMenu;
//       let vehiculo = objeto.vehiculo;
//       console.log(id, name, namePlayer, radialMenu, vehiculo);

//       let celda = document.createElement('td');
//       let textCelda = document.createTextNode(name);
//     }
//   }
// }

function genera_tabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];
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

function saveObject() {
  let checkedBoxes = document.querySelectorAll('.txtVehiculo1:checked');

  console.log(document.getElementById("txtID"));
  let id = document.getElementById("txtID").value,
    nombreJuego = document.getElementById("txtNameGame").value,
    nombreJugador = document.getElementById("txtNamePlayer").value,
    menuRadial = document.getElementById("txtMenuRadial").value
  vehiculo = checkedBoxes;
  //img = document.querySelector("#txtImage").value;
  addItems(id, nombreJuego, nombreJugador, menuRadial, vehiculo);
}

function imprimirObjeto() {
  let imprimir;
  imprimir = document.getElementById("imprimir");
  imprimir.innerHTML = JSON.stringify(objetoForm);
}

// CÓDIGO PARA LAS IMAGENES

function pasarImgBase64(img){
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');

  canvas.width = img.width;
  canvar.heigh = img.heigh;

  ctx.drawImage(img,0,0);
  return canvas.toDataURL('image/jpg');
}


let img = document.querySelector('#guardarForm');
img.addEventListener('load', function(param){
  let dataURL = getDataUrl(param.currentTarget);
  console.log(param.currentTarget);
  console.log(dataURL);

});


function previewFile() {
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}