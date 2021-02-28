var divGuardado;
var string64;
var contador = 2;
var contModificar;

// DEFINIMOS UNA FUNCIÓN PARA BORRAR EL DIV DEL CONTENIDO DE LA TABLA
function borrarDiv() {
    document.getElementById("imprimir").innerHTML = "";
}

// DEFINIMOS UNA FUNCIÓN PARAMOSTRAR EL FORMULARIO Y ELIMINAR EL VIDEO DEL EVENTO DE TECLADO
function mostrarForm() {
    document.getElementById("ocultar_video").innerHTML = "";
    generarFormulario("guardarForm");
    borrarDiv();
}

// DEFINIMOS UNA FUNCIÓN PARA ELIMINAR EL FORMULARIO
function ocultarForm() {
    document.getElementById("formulario").innerHTML = "";
}

// EN LA FUNCION DEL ONLOAD, GENERAMOS LA TABLA Y LLAMAMOS A LOS ADDEVENTLISTENER
window.onload = function () {
    genera_tabla();
    anadirEventListener();
    let div = document.getElementById("imprimemeEsta");
    if (div.children.length == 0) div.removeAttribute("class");
}

// CREAMOS LA FUNCION DE GENERAR LA TABLA, PARA GENERAR LA PRIMERA ENTRADA DE LA TABLA
function genera_tabla() {
    string64 = "";
    if (!objetoForm[0]) addItems(1, "Skyward Sword", "Link", "500", "Arco", "Lobo", "/img/link.gif", "Saltar", "Bosque Faraone", "Espada Maestra", "Cantico de la Diosa");

    // Obtener la referencia del elemento body
    var div = document.getElementById("imprimir");
    div.setAttribute("class", "contenido")

    let anterior = document.getElementById("imprimemeEsta");
    if (anterior.children.length == 0) anterior.removeAttribute("class");

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    tabla.setAttribute("id", "tabla");

    var tblBody = document.createElement("tbody");
    tblBody.setAttribute("id", "tbody");
    // Crea las celdas
    for (var i = 0; i < objetoForm.length; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
        hilera.setAttribute("id", "tr" + i);
        for (var j = 0; j <= 9; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final de la hilera de la tabla
            var celda = document.createElement("td");
            celda.setAttribute("id", "td" + i + "-" + j);

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
                // DEFINIMOS CON UN BUCLE FOR, QUE SEPARE LOS VALORES IMPRIMIDOS POR COMAS Y ESPACIOS
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
                    textoCelda.setAttribute("width", "210px");
                    textoCelda.setAttribute("height", "170px");
                    textoCelda.setAttribute("src", objetoForm[i].image);
                } else {
                    // DEFINIMOS LA IMAGEN DEFAULT SI EL USUARIO NO INSERTA NINGUNA
                    textoCelda.setAttribute("width", "230px");
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
                textoCelda.innerText = "Borrar entrada";

            } else if (j == 8) {
                textoCelda = document.createElement("button");
                textoCelda.setAttribute("id", "botonModificar" + i);
                textoCelda.setAttribute("name", "botonModificar");
                textoCelda.setAttribute("value", "botonModificar");
                textoCelda.innerText = "Modificar entrada";

            } else if (j == 9) {
                textoCelda = document.createElement("button");
                textoCelda.setAttribute("id", "verSubJson" + i);
                textoCelda.setAttribute("name", "verSubJson");
                textoCelda.setAttribute("value", "verSubJson");
                textoCelda.innerText = "Ver subjson";
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
}

// CREAMOS LA FUNCION PARA GUARDAR EL OBJETO Y TODAS LAS ENTRADAS DEL OBJETO 
function saveObject() {
    let checkedBoxes = document.querySelectorAll('.txtVehiculo1:checked');
    let id = contador;
    let nombreJuego = document.getElementById("txtNameGame").value;
    let nombreJugador = document.getElementById("txtNamePlayer").value;
    let money = document.getElementById("txtRupias").value;
    let menuRadial = document.getElementById("txtMenuRadial").value;
    let veh = checkedBoxes;
    let img = string64;
    let habilidad = document.getElementById("txtHabilidad").value;
    let zona = document.getElementById("txtZona").value;
    let arma = document.getElementById("txtArma").value;
    let melodia = document.getElementById("txtMelodia").value;
    // FINALMENTE AÑADIMOS LOS ITEMS LLAMANDO A LA FUNCIÓN DE ADDITEMS DEL objeto.js
    addItems(id, nombreJuego, nombreJugador, money, menuRadial, veh, img, habilidad, zona, arma, melodia);
    console.log(contador);
    contador++;
}

// CREAMOS UNA FUNCIÓN PARA MODIFICAR EL OBJETO JSON DE LOS VALORES QUE INTRODUCIMOS LA PRIMERA VEZ QUE CREAMOS EL FORMULARIO
function modifyObject(campoEditar, campoObjeto) {
    let checkedBoxes = document.querySelectorAll('.txtVehiculo1:checked');
    let nombreJuego = document.getElementById("txtNameGame").value;
    let nombreJugador = document.getElementById("txtNamePlayer").value;
    let money = document.getElementById("txtRupias").value;
    let menuRadial = document.getElementById("txtMenuRadial").value;
    let veh = checkedBoxes;
    let img = string64;
    let habilidad = document.getElementById("txtHabilidad").value;
    let zona = document.getElementById("txtZona").value;
    let arma = document.getElementById("txtArma").value;
    let melodia = document.getElementById("txtMelodia").value;
    updateItems(campoEditar, campoObjeto, nombreJuego, nombreJugador, money, menuRadial, veh, img, habilidad, zona, arma, melodia);
}

// EN ESTA FUNCIÓN, UTILIZAMOS UN OBJETO FILEREADER PARA PODER UTILIZAR UNA IMAGEN SUBIDA DEL USUARIO 
function previewFile() {
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        string64 = reader.result;
    }
    reader.readAsDataURL(file);
}
// EN ESTA FUNCIÓN, COMPROBAMOS CON UNOS PARAMETROS QUE LOS VALORES DEL FORMULARIO ESTÁN LLENOS
function camposObligatorios(param, param2, param3, campoEditar, campoObjeto) {
    if (document.getElementById("guardarForm")) {
        if (param.value == "" || param2.value == "" || param3.value == "") {
            alert("¡Tienes que rellenar los campos obligatorios!")
        } else {
            validarRegExp();
        }
    } else if (document.getElementById("modificar")) {
        if (param.value == "" || param2.value == "" || param3.value == "") {
            alert("¡Tienes que rellenar los campos obligatorios!");
        } else {
            validarRegExp(campoEditar, campoObjeto);
        }
    }
}

// CREAMOS UNA FUNCIÓN Y COMPROBAMOS CON LAS EXPRESIONES REGULARES CREADAS QUE LOS INPUT TEXTUALES DEL FORM SEAN VALIDOS
function validarRegExp(campoEditar, campoObjeto) {
    let texto;
    let rupias;
    texto = document.getElementById("txtNameGame").value;
    rupias = document.getElementById("txtRupias").value;

    var regexp1 = /[áàÁÀ-éèÉÈ-íìÍÌ-óòÓÒ-úùÚÙ]/
    var regexp2 = /[@$%&+´`]/
    var regexp3 = /^[0-9]{6,}/

    // COMPROBAMOS LOS VALORES CON EL MÉTODO test() PARA LAS REG EXP
    if (document.getElementById("guardarForm")) {
        if (regexp1.test(texto) == true || regexp2.test(texto) == true) {
            alert("¡No puedes escribir acentos ni carácteres especiales!");
        } else if (regexp3.test(rupias) == true) {
            alert("No puedes escribir 6 o más cifras en las rupias, no tenemos ese capital, bobo.");
        } else {
            saveObject();
            ocultarForm();
            genera_tabla();
            sonidoCofre();
            anadirEventListener();
        }
    } else if (document.getElementById("modificar")) {
        if (regexp1.test(texto) == true || regexp2.test(texto) == true) {
            alert("¡No puedes escribir acentos ni carácteres especiales!");
        } else if (regexp3.test(rupias) == true) {
            alert("No puedes escribir 6 o más cifras en las rupias, no tenemos ese capital, bobo.");
        } else {
            modifyObject(campoEditar, campoObjeto);
            ocultarForm();
            genera_tabla();
            sonidoCofre();
            anadirEventListener();
        }
    }
}

// CREAMOS UNA FUNCIÓN PARA UTILIZAR TODOS LOS addEventListener, DE LOS BOTONES DE BORRAR, MODIFICAR, Y BORRAR LA FOTO
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
        });

        // addEventListener PARA MODIFICAR LOS VALORES
        document.getElementById("botonModificar" + i).addEventListener("click", function () {
                console.log("VALOR DE I: " + i);
                if (objetoForm.length == 1 && objetoForm[0].id == 1) {
                    let campoEditar = document.getElementById("tr0");
                    let campoObjeto = objetoForm[0];

                    console.log(campoEditar)
                    console.log(campoObjeto);

                    document.getElementById("imprimir").innerHTML = "";
                    generarFormulario("modificar", campoEditar, campoObjeto);

                } else {
                    let campoEditar = document.getElementById("tr" + i);
                    let campoObjeto = objetoForm[i];

                    console.log(campoEditar)
                    console.log(campoObjeto);


                    document.getElementById("imprimir").innerHTML = "";
                    generarFormulario("modificar", campoEditar, campoObjeto);

                }

            }

        )

        // addEventListener PARA VER LOS VALORES DEL subJson DEL OBJETIVO 3
        document.getElementById("verSubJson" + i).addEventListener("click", function () {
            let campoEditar_json = document.getElementById("tr" + i);
            let campoObjeto_json = objetoForm[i].json;
            console.log(campoEditar_json)
            console.log(campoObjeto_json);
            document.getElementById("imprimir").innerHTML = "";
            genera_tabla_json();
        });


        // addEventListener PARA BORRAR LA FOTO CON UN DOBLE CLICK
        document.getElementById(i + "-6").addEventListener("dblclick", function () {
            delete objetoForm[i].image;
            console.log("Se ha borrado la imagen, dejamos una imagen default");
            document.getElementById(i + "-6").src = "/img/vegeta_meme.png";
            objetoForm[i].image = "/img/vegeta_meme.png";
        });
    }
}

// CREAMOS UNA FUNCIÓN PARA CREAR UN NUEVO OBJETO DE AUDIO Y REPRODUCIRLO CON EL METODO .play()
function sonidoCofre() {
    let audio = new Audio("/sound/chest.mp3");
    audio.play();
}

// CREAMOS UNA FUNCIÓN PARA INICIAR UN VIDEO CON EL EVENTO DE TECLADO keypress
function iniciarVideo() {
    let boton = document.getElementById('teclado');
    boton.addEventListener('keypress', presionarTecla);
}

// CREAMOS UNA FUNCIÓN PARA DEFINIR EL ADDEVENTLISTENER DONDE LA VARIABLE e.key 
// DEFINIMOS QUE LA PULSAR LA TECLA C, REALICE LO SIGUIENTE, Y SE REPRODUZCA EL VIDEO
function presionarTecla(e) {
    if (e.key == "c") {
        let video = document.getElementById('video');
        if (video) {
            video.play();
            document.getElementById("ocultar_video").style.visibility = "visible";
        }
    }
}

// CARGAMOS LA FUNCION DE VIDEO PASANDO EL PARAMETRO load
window.addEventListener('load', iniciarVideo);