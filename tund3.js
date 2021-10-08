let checkTemp = function randomInteger(min,max){
    return Math.floor(Math.random() * (max - min +1 ) + min)
}
const katlatemperatuur = checkTemp (0,60)
if (katlatemperatuur<=20) 
console.log ("On liiga külm")
else if (katlatemperatuur<=40) console.log("Paras temperatuur")
else if (katlatemperatuur<=60) console.log("Liiga kuum")
