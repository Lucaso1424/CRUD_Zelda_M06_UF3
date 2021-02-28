function generarFormulario(param, campoEditar, campoObjeto) {
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
    let option = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");
    let option4 = document.createElement("option");
    let option5 = document.createElement("option");

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


    /* Habilidad */
    let div_json = document.createElement("div");
    let label_json = document.createElement("label");
    let input_json = document.createElement("input");

    label_json.setAttribute("for", "Habilidad");
    label_json.innerText = "Habilidad: ";

    input_json.setAttribute("type", "text");
    input_json.setAttribute("id", "txtHabilidad");
    input_json.setAttribute("placeholder", "Escribe una habilidad");

    div_json.appendChild(label_json);
    div_json.appendChild(input_json);

    /* Zona */
    let div_json2 = document.createElement("div");
    let label_json2 = document.createElement("label");
    let input_json2 = document.createElement("input");

    label_json2.setAttribute("for", "Zona");
    label_json2.innerText = "Zona: ";

    input_json2.setAttribute("type", "text");
    input_json2.setAttribute("id", "txtZona");
    input_json2.setAttribute("placeholder", "Escribe una zona de juego");

    div_json2.appendChild(label_json2);
    div_json2.appendChild(input_json2);

    /* Arma */
    let div_json3 = document.createElement("div");
    let label_json3 = document.createElement("label");
    let input_json3 = document.createElement("input");
    label_json3.setAttribute("for", "Arma");
    label_json3.innerText = "Arma: "

    input_json3.setAttribute("type", "text");
    input_json3.setAttribute("id", "txtArma");
    input_json3.setAttribute("placeholder", "Escribe un arma");

    div_json3.appendChild(label_json3);
    div_json3.appendChild(input_json3);

    /* Melodia */
    let div_json4 = document.createElement("div");
    let label_json4 = document.createElement("label");
    let select_json = document.createElement("select");
    let option_json = document.createElement("option")
    let option2_json = document.createElement("option")
    let option3_json = document.createElement("option")
    let option4_json = document.createElement("option")
    let option5_json = document.createElement("option")

    div_json4.setAttribute("for", "Melodia");
    div_json4.innerText = "Melodia: ";

    select_json.setAttribute("name", "Melodia");
    select_json.setAttribute("id", "txtMelodia");

    option_json.innerText = "Cantico de la Diosa";
    option2_json.innerText = "Cantar del Heroe";
    option3_json.innerText = "Sabidura de Nayru";
    option4_json.innerText = "Poder de Din";
    option5_json.innerText = "Cumbion del bazar";


    select_json.appendChild(option_json);
    select_json.appendChild(option2_json);
    select_json.appendChild(option3_json);
    select_json.appendChild(option4_json);
    select_json.appendChild(option5_json);
    // for(let i = 1; i < 4; i++){
    //   select.appendChild(option+""+i);

    // }

    div_json4.appendChild(label_json4);
    div_json4.appendChild(select_json);

    // for(let i = 1; i < 4; i++){
    //   select.appendChild(option+""+i);

    // }

    document.getElementById("formulario_json").appendChild(form);



    let submit = document.createElement("input");
    submit.setAttribute("type", "button");
    submit.setAttribute("value", "Send Request");
    submit.setAttribute("id", param);

    form.appendChild(div);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(div4);
    form.appendChild(div5);
    form.appendChild(div_json);
    form.appendChild(div_json2);
    form.appendChild(div_json3);
    form.appendChild(div_json4);

    form.appendChild(div6);
    form.appendChild(submit);

    document.getElementById("formulario").appendChild(form);

    if (param == "guardarForm") {
        let btnPulsado = document.getElementById("guardarForm");
        btnPulsado.addEventListener("click", function () {
            console.log(input_json, input_json2, input_json3, select_json);
            camposObligatorios(input, input2, input3);
        });

        document.getElementById("txtImg").addEventListener("change", previewFile);
    } else if (param == "modificar") {
        document.getElementById("imprimir").innerHTML = "";
        document.getElementById("ocultar_video").innerHTML = "";

        console.log(campoEditar);
        console.log(campoObjeto);
        input.setAttribute("placeholder", campoObjeto.name);
        input2.setAttribute("placeholder", campoObjeto.namePlayer);
        input3.setAttribute("placeholder", campoObjeto.rupias);

        let btnPulsado = document.getElementById("modificar");
        btnPulsado.addEventListener("click", function () {
            camposObligatorios(input, input2, input3, campoEditar, campoObjeto);

        })
        document.getElementById("txtImg").addEventListener("change", previewFile);

    } else if (param == "verSubJson") {
        document.getElementById("imprimir").innerHTML = "";
        document.getElementById("ocultar_video").innerHTML = "";
    }
}


function generarFormulario_json(param_json, campoEditar_json, campoObjeto_json) {
    document.getElementById("mostrarForm").style.visibility = "hidden";
    let form2 = document.createElement("form2");

    if (param_json == "guardarForm_json") {
        let btnPulsadojson = document.getElementById("guardarForm_json");
        btnPulsadojson.addEventListener("click", function () {
            camposObligatorios(input_json, input_json2, input_json3);
        });
    } else if (param_json == "modificar_json") {
        document.getElementById("imprimir").innerHTML = "";
        document.getElementById("ocultar_video").innerHTML = "";

        for (let i = 0; i < objetoForm.length; i++) {
            input.setAttribute("placeholder", objetoForm[i].habilidad);
            input2.setAttribute("placeholder", objetoForm[i].zona);
            input3.setAttribute("placeholder", objetoForm[i].arma);

            let btnPulsado = document.getElementById("modificar_json");
            btnPulsado.addEventListener("click", function () {
                camposObligatorios(input_json, input_json2, input_json3, campoEditar_json, campoObjeto_json);
            });
            break;
        }
    }
}


function genera_tabla_json() {
    // Obtener la referencia del elemento body
    let div = document.getElementById("imprimir");

    // Crea un elemento <table> y un elemento <tbody>
    let tabla = document.createElement("table");
    tabla.setAttribute("id", "tabla");

    let tblBody = document.createElement("tbody");
    tblBody.setAttribute("id", "tbody");
    // Crea las celdas
    for (let i = 0; i < objetoForm.length; i++) {
        // Crea las hileras de la tabla
        let hilera = document.createElement("tr");
        hilera.setAttribute("id", "tr" + i);
        for (let j = 0; j <= 6; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final de la hilera de la tabla
            let celda = document.createElement("td");
            celda.setAttribute("id", "td" + i + "-" + j);

            let textoCelda = null;
            if (j == 0) {
                textoCelda = document.createTextNode(objetoForm[i].json[0].habilidad);
            } else if (j == 1) {
                textoCelda = document.createTextNode(objetoForm[i].json[0].zona);
            } else if (j == 2) {
                textoCelda = document.createTextNode(objetoForm[i].json[0].arma);
            } else if (j == 3) {
                textoCelda = document.createTextNode(objetoForm[i].json[0].melodia);
            } else if (j == 4) {
                textoCelda = document.createElement("button");
                textoCelda.setAttribute("id", "botonBorrar" + i);
                textoCelda.setAttribute("name", "botonBorrar");
                textoCelda.setAttribute("value", "botonBorrar");
                textoCelda.innerText = "botonBorrar";
            } else if (j == 5) {
                textoCelda = document.createElement("button");
                textoCelda.setAttribute("id", "botonModificar" + i);
                textoCelda.setAttribute("name", "botonModificar");
                textoCelda.setAttribute("value", "botonModificar");
                textoCelda.innerText = "botonModificar";
            } else if (j == 6) {
                textoCelda = document.createElement("button");
                textoCelda.setAttribute("id", "botonVolver_json" + i);
                textoCelda.setAttribute("name", "botonVolver_json");
                textoCelda.setAttribute("value", "botonVolver_json");
                textoCelda.innerText = "boton Volver";
            }
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