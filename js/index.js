var divGuardado;
var string64;

function borrarDiv() {
    var borrar;
    borrar = document.getElementById("imprimir").innerHTML = "";
}



window.onload = function () {
    var btnPulsado = document.getElementById("guardarForm");
    btnPulsado.addEventListener("click", saveObject);
    document.getElementById("formulario").style.visibility = "visible";
}


function genera_tabla() {
    var textoCelda;

    // Obtener la referencia del elemento body
    // var body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < objetoForm.length; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 0; j < 6; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla

            if (j == 0) {
                textoCelda = objetoForm[i].id;
            } else if (j == 1) {
                textoCelda = objetoForm[i].name;
            } else if (j == 2) {
                textoCelda = objetoForm[i].namePlayer;
            } else if (j == 3) {
                textoCelda = objetoForm[i].radialMenu;
            } else if (j == 4) {
                textoCelda = "";
                for (let j = 0; j < objetoForm[i].vehiculo.length; j++) {
                    if (objetoForm[i].vehiculo[0].name == " Moto" || objetoForm[i].vehiculo[0].name == " Lobo") {
                        textoCelda += objetoForm[i].vehiculo[j].name.trim();
                    } else {
                        textoCelda += objetoForm[i].vehiculo[j].name.split(" ");
                    }
                }
            } else if (j == 5) {
                textoCelda = objetoForm[i].image;
            }

            var celda = document.createElement("td");
            
            var nepe = document.createTextNode(textoCelda);
            celda.appendChild(nepe);
            hilera.appendChild(celda);
        }
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    document.getElementById("imprimir").appendChild(tabla); 
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
    img = string64;
    //img = document.querySelector("#txtImage").value;
    addItems(id, nombreJuego, nombreJugador, menuRadial, vehiculo, img);
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