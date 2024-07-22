// Criando uma constante
const PI = 3.14159

// Criando uma constante
var radius = 5;

function calculateArea(radius){
    // Definindo uma variável como let
    let area;
    //Calculando a area
    area = PI * radius * radius;
    return area;
}

var calculatedArea = calculateArea(radius)

console.log("O radio é igual a: ",radius);
console.log("A area do circulo é:",calculatedArea);