var objetoForm = [];

function addItems(pid, nameGame, player, money, menu, veh, img, skill, zone, weapon, melody) {
    //addItemsJson(skill,zone,weapon,melody);  
    let newObject = {
        id: pid,
        name: nameGame,
        namePlayer: player,
        rupias: money,
        radialMenu: menu,
        vehiculo: veh,
        image: img,
        json: [{
            habilidad: skill,
            zona: zone,
            arma: weapon,
            melodia: melody,
        }]

    };
    console.log(newObject);
    objetoForm.push(newObject);
}

function updateItems(campoEditar, campoObjeto, nameGame, player, money, menu, veh, img, skill, zone, weapon, melody) {
    let imagencita = campoEditar.querySelector("img");
    console.log(campoEditar.querySelector("img"));
    console.log(campoObjeto);
    console.log(campoObjeto.image);
    console.log(imagencita.src)
    console.log(img);

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