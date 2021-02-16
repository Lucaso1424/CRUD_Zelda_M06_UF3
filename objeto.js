var objetoForm  = [];

function addItems(pid,nameGame,player,menu,diff){

    let newObject ={
        id: pid,
        name: nameGame,
        namePlayer: player,
        radialMenu: menu,
        difficulty: diff
        //image: img

    };
    console.log(newObject);
    objetoForm.push(newObject);

}


