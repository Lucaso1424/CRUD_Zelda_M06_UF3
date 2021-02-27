var divGuardado;
var string64;
var contador = 2;

function borrarDiv() {
    document.getElementById("imprimir").innerHTML = "";
}

function mostrarForm() {
    document.getElementById("ocultar_video").innerHTML = "";
    generarFormulario();
    borrarDiv();
}

function ocultarForm() {
    document.getElementById("formulario").innerHTML = "";
}

window.onload = function () {
    genera_tabla();
    anadirEventListener();
}


function genera_tabla() {
    string64 = "";
    if (!objetoForm[0]) addItems(1, "Skyward Sword", "Link", "500", "Arco", "Lobo", "/img/link.gif");

    // Obtener la referencia del elemento body
    var div = document.getElementById("imprimir");

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    tabla.setAttribute("id", "tabla");

    var tblBody = document.createElement("tbody");
    tblBody.setAttribute("id", "tbody")
    // Crea las celdas
    for (var i = 0; i < objetoForm.length; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
        hilera.setAttribute("id", "tr" + i);
        for (var j = 0; j <= 8; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final de la hilera de la tabla
            var celda = document.createElement("td");


            var textoCelda = null;
            if (j == 0) {
                textoCelda = document.createTextNode(objetoForm[i].id);
            } else if (j == 1) {
                textoCelda = document.createTextNode(objetoForm[i].name);
            } else if (j == 2) {
                textoCelda = document.createTextNode(objetoForm[i].namePlayer);
            } else if (j == 3) {
                textoCelda = document.createTextNode(objetoForm[i].radialMenu);
            } else if (j == 4) {
                textoCelda = document.createTextNode(objetoForm[i].rupias);
            } else if (j == 5) {
                textoCelda = "";
                for (let j = 0; j < objetoForm[i].vehiculo.length; j++) {
                    if (objetoForm[i].vehiculo[0].name == " Moto" || objetoForm[i].vehiculo[0].name == " Lobo" || objetoForm[i].vehiculo[0].name == " Pelicano") {
                        textoCelda += objetoForm[i].vehiculo[j].name.trim();
                    } else if (objetoForm[i].vehiculo == "Lobo") {
                        textoCelda += objetoForm[i].vehiculo.trim();
                        break;
                    } else {
                        textoCelda += objetoForm[i].vehiculo[j].name.split(" ");
                    }
                }
                textoCelda = document.createTextNode(textoCelda);
            } else if (j == 6) {
                textoCelda = document.createElement("img");
                textoCelda.setAttribute("id", i + "-" + j);

                if (objetoForm[i].image) {
                    textoCelda.setAttribute("width", "190px");
                    textoCelda.setAttribute("height", "170px");
                    textoCelda.setAttribute("src", objetoForm[i].image);
                } else {
                    textoCelda.setAttribute("width", "190px");
                    textoCelda.setAttribute("height", "170px");
                    if (objetoForm[i].image == undefined || objetoForm[i].image == "") {
                        textoCelda.src = "/img/default_links.jpg";
                    }
                }

            } else if (j == 7) {
                textoCelda = document.createElement("button");
                textoCelda.setAttribute("id", "botonBorrar" + i);
                textoCelda.setAttribute("name", "botonBorrar");
                textoCelda.setAttribute("value", "botonBorrar");
                textoCelda.innerText = "botonBorrar";

            } else if (j == 8) {
                textoCelda = document.createElement("button");
                textoCelda.setAttribute("id", "botonModificar" + i);
                textoCelda.setAttribute("name", "botonModificar");
                textoCelda.setAttribute("value", "botonModificar");
                textoCelda.innerText = "botonModificar";

            }





            // console.log("Valor J: " + j);
            // console.log("Valor textoCelda: " + textoCelda);

            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }


    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    div.appendChild(tabla);

    document.getElementById("imprimir").appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
    document.getElementById("formulario").innerHTML = "<input type='button' value='Formulario' id='mostrarForm'><div id='ocultar_video'></div>";

    document.getElementById("mostrarForm").style.visibility = "visible";
    document.getElementById("ocultar_video").innerHTML = "<video id='video' width='700' height='350'><source src = '/video/cagaste.mp4'></video>";
    document.getElementById("mostrarForm").addEventListener("click", mostrarForm);
    document.getElementById("ocultar_video").style.visibility = "hidden";
    //  ocultarForm();
}

function saveObject() {
    let checkedBoxes = document.querySelectorAll('.txtVehiculo1:checked');
    let id = contador;
    let nombreJuego = document.getElementById("txtNameGame").value;
    let nombreJugador = document.getElementById("txtNamePlayer").value;
    let money = document.getElementById("txtRupias").value;
    let menuRadial = document.getElementById("txtMenuRadial").value;
    let veh = checkedBoxes;
    let img = string64;
    //img = document.querySelector("#txtImage").value;
    addItems(id, nombreJuego, nombreJugador, money, menuRadial, veh, img);
    console.log(contador);
    contador++;
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


function camposObligatorios(param, param2, param3) {
    if (param.value == "" || param2.value == "" || param3.value == "") {
        alert("¡Tienes que rellenar los campos obligatorios!")
    } else {
        validarRegExp();
    }

}


function validarRegExp() {
    let texto;
    let rupias;
    texto = document.getElementById("txtNameGame").value;
    rupias = document.getElementById("txtRupias").value;

    var regexp1 = /[áàÁÀ-éèÉÈ-íìÍÌ-óòÓÒ-úùÚÙ]/
    var regexp2 = /[@$%&+´`]/
    var regexp3 = /^[0-9]{6,}/

    if (regexp1.test(texto) == true || regexp2.test(texto) == true) {
        alert("¡No puedes escribir acentos ni carácteres especiales!");
    } else if (regexp3.test(rupias) == true) {
        alert("No puedes escribir 6 o más cifras en las rupias, no tenemos ese capital, bobo.");
    } else {
        saveObject();
        ocultarForm();
        genera_tabla();
        anadirEventListener();
    }
}


function anadirEventListener() {
    for (let i = 0; i < objetoForm.length; i++) {
        console.log(i);

        document.getElementById("botonBorrar" + i).addEventListener("click", function () {

            if (objetoForm.length == 1) {
                console.log("entra")
                document.getElementById("imprimir").innerHTML = "";
            } else {
                document.getElementById("tr" + i).innerHTML = "";
                console.log(objetoForm);

            }
            objetoForm.splice(i, 1);
        })

        document.getElementById("botonModificar"+i).addEventListener("click", function(){
            document.getElementById("imprimir").innerHTML = "";
            generarFormulario("modificar");



        })

        document.getElementById(i + "-6").addEventListener("dblclick", function () {
            delete objetoForm[i].image;
            console.log("Se ha borrado la imagen, dejamos una imagen default");
            document.getElementById(i + "-6").src = "/img/vegeta_meme.png";
            objetoForm[i].image = "/img/vegeta_meme.png";
        })


    }
}

function iniciarVideo() {
    let boton = document.getElementById('teclado');
    boton.addEventListener('keypress', presionarTecla);
}

function presionarTecla(e) {
    if (e.key == "c") {
        let video = document.getElementById('video');
        video.play();
        document.getElementById("ocultar_video").style.visibility = "visible";
    } 
}

window.addEventListener('load', iniciarVideo);