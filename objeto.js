var objetoForm  = [];

function addItems(pid, nameGame, player, money, menu,veh,img) {
    let newObject = {
        id: pid,
        name: nameGame,
        namePlayer: player,
        rupias: money,
        radialMenu: menu,
        vehiculo: veh,
        image: img

    };
    console.log(newObject);
    objetoForm.push(newObject);
}


function updateItems(campoEditar,campoObjeto,nameGame, player, money, menu,veh,img){
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

        if(img == "" || img == undefined){
            campoObjeto.image = campoEditar.querySelector("img").src;
            console.log("Entra");
        }
        else {
            console.log("No entra");
            campoObjeto.image = img;
        }

    }

