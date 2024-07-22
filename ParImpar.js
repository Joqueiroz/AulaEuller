const num1 = 1
const num2 = 2
const num3 = 3

if(verificar(num1)){
    console.log("Numero é PAR")
}
else{
    console.log("Numero é IMPAR")
}
if(verificar(num2)){
    console.log("Numero é PAR")
}
else{
    console.log("Numero é IMPAR")
}
if(verificar(num3)){
    console.log("Numero é PAR")
}
else{
    console.log("Numero é IMPAR")
}
function verificar(num){
    if(num % 2 === 0){
        return true
    }
}
