var objetoForm  = [];

function addItems(pid, nameGame, player, menu, veh) {
    let newObject = {
        id: pid,
        name: nameGame,
        namePlayer: player,
        radialMenu: menu,
        vehiculo: veh,
        image: img
    };
    console.log(newObject);
    objetoForm.push(newObject);
}