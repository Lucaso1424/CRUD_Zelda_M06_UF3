var divGuardado;
var string64;
var contador = 2;

function borrarDiv() {
    document.getElementById("imprimir").innerHTML = "";
}

function mostrarForm() {
    generarFormulario();
    borrarDiv();
}

function ocultarForm() {
    document.getElementById("formulario").innerHTML = "";
}

window.onload = function () {
    document.getElementById("mostrarForm").addEventListener("click", mostrarForm);


    genera_tabla();
    anadirEventListener();
}


function genera_tabla() {
    if (!objetoForm[0]) addItems(1, "Twiligth Princess", "Link", "500", "Arco", "Lobo", "/img/fondo_zelda.jpg");

    // Obtener la referencia del elemento body
    var div = document.getElementById("guardados");

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
        tabla.setAttribute("id","tabla");

    var tblBody = document.createElement("tbody");
        tblBody.setAttribute("id","tbody")
    // Crea las celdas
    for (var i = 0; i < objetoForm.length; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
            hilera.setAttribute("id","tr"+i);
        for (var j = 0; j <= 7; j++) {
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
                    }
                    else if(objetoForm[i].vehiculo == "Lobo"){
                        textoCelda += objetoForm[i].vehiculo.trim();
                        break;
                    }
                    else {
                        textoCelda += objetoForm[i].vehiculo[j].name.split(" ");
                    }
                }
                textoCelda = document.createTextNode(textoCelda);
            } else if (j == 6) {
                textoCelda = document.createElement("img");
                textoCelda.setAttribute("id", i + "-" + j);

                if (objetoForm[i].image) {
                    textoCelda.setAttribute("width", "120px");
                    textoCelda.setAttribute("heigh", "120px");
                    textoCelda.setAttribute("src", objetoForm[i].image);
                } else {
                    textoCelda.setAttribute("width", "120px");
                    textoCelda.setAttribute("heigh", "120px");
                    textoCelda.setAttribute("src", "/img/noImg.jpg");
                }

            }
         else if (j == 7) {
            textoCelda = document.createElement("button");
            textoCelda.setAttribute("id","botonBorrar"+i);
            textoCelda.setAttribute("name","botonBorrar");
            textoCelda.setAttribute("value","botonBorrar");
            textoCelda.innerText ="botonBorrar";

        }
         

 


            console.log("Valor J: " + j);
            console.log("Valor textoCelda: " + textoCelda);

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
    document.getElementById("mostrarForm").style.visibility = "visible";
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


function generarFormulario() {

    document.getElementById("mostrarForm").style.visibility = "hidden";
    let form = document.createElement("form");


    /* Juego */
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");

    label.setAttribute("for", "Juego");
    label.innerText = "Juego: "

    input.setAttribute("type", "text");
    input.setAttribute("id", "txtNameGame");
    input.setAttribute("placeholder", "Escribe un Juego");

    div.appendChild(label);
    div.appendChild(input);

    /* Jugador */
    let div2 = document.createElement("div");
    let label2 = document.createElement("label");
    let input2 = document.createElement("input");

    label2.setAttribute("for", "Jugador");
    label2.innerText = "Jugador: "

    input2.setAttribute("type", "text");
    input2.setAttribute("id", "txtNamePlayer");
    input2.setAttribute("placeholder", "Escribe un Jugador");

    div2.appendChild(label2);
    div2.appendChild(input2);

    /* RUPIAS */
    let div3 = document.createElement("div");
    let label3 = document.createElement("label");
    let input3 = document.createElement("input");
    label.setAttribute("for", "Rupias");
    label3.innerText = "Rupias: "

    input3.setAttribute("type", "number");
    input3.setAttribute("id", "txtRupias");
    input3.setAttribute("placeholder", "Escribe un numero");


    div3.appendChild(label3);
    div3.appendChild(input3);

    /* Menu RADIAL */
    let div4 = document.createElement("div");
    let label4 = document.createElement("label");
    let select = document.createElement("select");
    let option = document.createElement("option")
    let option2 = document.createElement("option")
    let option3 = document.createElement("option")
    let option4 = document.createElement("option")
    let option5 = document.createElement("option")

    label4.setAttribute("for", "Rupias");
    label4.innerText = "Menu Radial: ";

    select.setAttribute("name", "menuRadial");
    select.setAttribute("id", "txtMenuRadial");

    option.innerText = "Arco";
    option2.innerText = "Arpa";
    option3.innerText = "Bombas";
    option4.innerText = "Beyblade";
    option5.innerText = "Gancho";


    select.appendChild(option);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    select.appendChild(option5);
    // for(let i = 1; i < 4; i++){
    //   select.appendChild(option+""+i);

    // }
    div4.appendChild(label4);
    div4.appendChild(select);

    let div5 = document.createElement("div");
    let texto = document.createElement("label");
    let checkbox = document.createElement("input");
    let checkbox2 = document.createElement("input");
    let checkbox3 = document.createElement("input");
    let checkbox4 = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "txtVehiculo1");
    checkbox.setAttribute("name", "Caballo");

    texto = document.createElement("label");
    texto.setAttribute("class", "vehiculo");
    texto.innerText = checkbox.name;



    checkbox2.setAttribute("type", "checkbox");
    checkbox2.setAttribute("class", "txtVehiculo1");
    checkbox2.setAttribute("name", " Moto");

    let texto2 = document.createElement("label");
    texto2.setAttribute("class", "vehiculo");
    texto2.innerText = checkbox2.name;

    checkbox3.setAttribute("type", "checkbox");
    checkbox3.setAttribute("class", "txtVehiculo1");
    checkbox3.setAttribute("name", " Lobo");


    let texto3 = document.createElement("label");
    texto3.setAttribute("class", "vehiculo");
    texto3.innerText = checkbox3.name;

    checkbox4.setAttribute("type", "checkbox");
    checkbox4.setAttribute("class", "txtVehiculo1");
    checkbox4.setAttribute("name", " Pelicano");



    let texto4 = document.createElement("label");
    texto4.setAttribute("class", "vehiculo");
    texto4.innerText = checkbox4.name;


    div5.appendChild(texto);
    div5.appendChild(checkbox);

    div5.appendChild(texto2);
    div5.appendChild(checkbox2);

    div5.appendChild(texto3);
    div5.appendChild(checkbox3);

    div5.appendChild(texto4);
    div5.appendChild(checkbox4);

    let div6 = document.createElement("div");
    let inputImg = document.createElement("input");
    div6.setAttribute("id", "imagen");
    inputImg.setAttribute("type", "file");
    inputImg.setAttribute("id", "txtImg");

    div6.appendChild(inputImg);



    let submit = document.createElement("input");
    submit.setAttribute("type", "button");
    submit.setAttribute("value", "Send Request");
    submit.setAttribute("id", "guardarForm");

    form.appendChild(div);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(div4);
    form.appendChild(div5);
    form.appendChild(div6);
    form.appendChild(submit);
    document.getElementById("formulario").appendChild(form);



    let btnPulsado = document.getElementById("guardarForm");
    btnPulsado.addEventListener("click", function () {
        camposObligatorios(input, input2, input3)
    });
    document.getElementById("txtImg").addEventListener("change", previewFile);
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


function anadirEventListener(){
    for(let i = 0; i < objetoForm.length; i++){
        console.log(i);

        document.getElementById("botonBorrar"+i).addEventListener("click", function () {

            if(objetoForm.length == 1){
                console.log("entra")
                document.getElementById("imprimir").innerHTML ="";
            }
            else {
                document.getElementById("tr"+i).innerHTML ="";
                console.log(objetoForm);
            
            }
            objetoForm.splice(i,1);
        })

        document.getElementById(i+"-6").addEventListener("mousemove", function() {

        })
    }
}