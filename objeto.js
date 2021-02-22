<<<<<<< HEAD
var objetoForm = [];
=======
var objetoForm  = [];

function addItems(pid,nameGame,player,menu,veh,img){
>>>>>>> b7cfec8c05aa075676c58edc43342c359d1903ec

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