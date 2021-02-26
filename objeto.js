var objetoForm  = [];

function addItems(pid, nameGame, player, menu, veh,money,img) {
    let newObject = {
        id: pid,
        name: nameGame,
        namePlayer: player,
        radialMenu: menu,
        vehiculo: veh,
        rupias: money,
        image: img

    };
    console.log(newObject);
    objetoForm.push(newObject);
}