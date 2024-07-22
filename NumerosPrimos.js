// Definindo limite
const limit = 20;

console.log('Exibindo os numeros primos ate:', limit)
for(let i=2; i<=limit; i++){
    if (primos(i)){
        console.log(i);
    }
}
// Criando a função para verificar se um numero e ou nao primo
function primos(num){
     for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false; // Se um numero(num) e divisivel por qualquer numero(i)
             //entre 2 e a raiz quadrada deste numero(num), entao(num) nao e primo.
        }
    }

    return true; //Se ele for primo, retorna true
}