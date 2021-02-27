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