const biciclette = [
{
    nome : "Mountainbike",
    peso :  12 
},
{
    nome : "Graziella",
    peso : 10
}
];
let pesoMinore = biciclette[0]
for (let i = 0; i < biciclette.length; i++){
    const bici = biciclette [i]
     
    if(bici.peso < pesoMinore.peso ){
        pesoMinore = bici;
    }
}
console.log("la bici più leggera è:" + " "+  pesoMinore.nome + " "+ pesoMinore.peso + "kg")