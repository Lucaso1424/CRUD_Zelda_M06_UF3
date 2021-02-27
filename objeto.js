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


function updateItems(nameGame, player, money, menu,veh,img){

        objetoForm.name = nameGame;
        objetoForm.namePlayer = player;
        objetoForm.rupias = money;
        objetoForm.radialMenu = menu;
        objetoForm.vehiculo = veh;
        objetoForm.image = img;
    }



