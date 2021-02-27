function generarFormulario(param) {

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
    submit.setAttribute("id", param);

    form.appendChild(div);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(div4);
    form.appendChild(div5);
    form.appendChild(div6);
    form.appendChild(submit);
    document.getElementById("formulario").appendChild(form);


    if (param == "guardarForm") {
        let btnPulsado = document.getElementById("guardarForm");
        btnPulsado.addEventListener("click", function () {
            camposObligatorios(input, input2, input3)
        });

        document.getElementById("txtImg").addEventListener("change", previewFile);
    }

    else if(param == "modificar"){
        document.getElementById("imprimir").innerHTML ="";
        document.getElementById("ocultar_video").innerHTML = "";
        for(let i = 0; i < objetoForm.length;i++){
            input.setAttribute("placeholder",objetoForm[i].name);
            input2.setAttribute("placeholder",objetoForm[i].namePlayer);
            input3.setAttribute("placeholder",objetoForm[i].rupias);
        }
        let btnPulsado = document.getElementById("modificar");
        btnPulsado.addEventListener("click", function(){
            camposObligatorios(input, input2, input3);
        })

    }
}