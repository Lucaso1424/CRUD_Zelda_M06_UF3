var objetoForm  = [];

function addItems(pid, nameGame, player, menu, veh, money) {
    let newObject = {
        id: pid,
        name: nameGame,
        namePlayer: player,
        radialMenu: menu,
        vehiculo: veh,
        image: img,
        rupias: money
    };
    console.log(newObject);
    objetoForm.push(newObject);
}