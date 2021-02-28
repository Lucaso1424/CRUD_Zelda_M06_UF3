var objetoForm = [];

function addItems(pid, nameGame, player, money, menu, veh, img, skill, zone, weapon, melody) {
    // DEFINIMOS EN newObject TODOS LOS VALORES DEL FORMULARIO PARA MOSTRAR EN LAS TABLAS
    let newObject = {
        id: pid,
        name: nameGame,
        namePlayer: player,
        rupias: money,
        radialMenu: menu,
        vehiculo: veh,
        image: img,
        // DEFINIMOS EL subJson DEL OBJETIVO 3 
        json: [{
            habilidad: skill,
            zona: zone,
            arma: weapon,
            melodia: melody,
        }]

    };
    console.log(newObject);
    // HACEMOS UN PUSH DEL newObject DEL OBJETO FORM
    objetoForm.push(newObject);
}

// CREAMOS UNA FUNCIÓN, PARA ACTUALIZAR LOS OBJETOS DEL JSON MEDIANTE EL BOTON DE ACTUALIZAR
function updateItems(campoEditar, campoObjeto, nameGame, player, money, menu, veh, img, skill, zone, weapon, melody) {
    let imagencita = campoEditar.querySelector("img");
    console.log(campoEditar.querySelector("img"));
    console.log(campoObjeto);
    console.log(campoObjeto.image);
    console.log(imagencita.src)
    console.log(img);

    // AÑADIMOS EN EL CAMPO_OBJETO, LOS VALORES DEL OBJETO JSON PARA DEFINIRLOS DE NUEVO EN EL ACTUALIZAR
    campoObjeto.name = nameGame;
    campoObjeto.namePlayer = player;
    campoObjeto.rupias = money;
    campoObjeto.radialMenu = menu;
    campoObjeto.vehiculo = veh;

    campoObjeto.json.habilidad = skill
    campoObjeto.json.zona = zone
    campoObjeto.json.arma = weapon
    campoObjeto.json.melodia = melody
    console.log(campoObjeto.json.habilidad);

    if (img == "" || img == undefined) {
        campoObjeto.image = campoEditar.querySelector("img").src;
        console.log("Entra");
    } else {
        console.log("No entra");
        campoObjeto.image = img;
    }
}