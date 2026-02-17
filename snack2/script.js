const squadre  = [
    {
        nome : 'Roma',
        punti : 0,
        falli : 0
    },
    {
        nome : 'Lazio',
        punti : 0,
        falli : 0
    },
    {
        nome : 'Napoli',
        punti : 0,
        falli : 0
    },
    {
        nome : 'Milan',
        punti : 0,
        falli : 0
    }
];
for (let i = 0; i < squadre.length; i++){
    squadre [i].punti = Math.floor(Math.random()*10)+1;
    squadre [i].falli = Math.floor(Math.random()*5)+1;
}

const falliSquadre = []
for(let i = 0; i < squadre.length; i++){
    if(squadre[i].falli > 0){
        falliSquadre.push(squadre[i])
    }
}
console.log("Squadre con i suoi falli:")
for (let i = 0; i < falliSquadre.length; i++) {
  console.log(falliSquadre[i].nome + ": " + falliSquadre[i].falli + " falli")
}

