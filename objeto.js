var objetoForm  = [];

function addItems(pid, nameGame, player, menu, money,veh,img) {
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