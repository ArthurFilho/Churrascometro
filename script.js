let inputAdultos = document.getElementById ("adultos");
let inputCriancas = document.getElementById ("criancas");
let inputDuracao = document.getElementById ("duracao");

let resultado = document.getElementById ("resultado");

function calcular( ) {
console.log("calculando...")

let adultos = inputAdultos.value;
let criancas = inputCriancas.value;
let duracao = inputDuracao.value;


let qdtTotalCarne = CarnePP(duracao) * adultos + (CarnePP(duracao) / 2 * criancas);
let qdtTotalCerveja = CervejaPP(duracao) * adultos;
let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

resultado.innerHTML = `<p>${qdtTotalCarne} g de Carne <img src="./assets/carne.png" alt="carne" width="20px" height="20px">`
resultado.innerHTML += `<p>${qdtTotalCerveja} Ml de Cerveja <img src="./assets/bebida-alcoolica.png" alt="bebidas" width="20px" height="20px">`
resultado.innerHTML += `<p>${qdtTotalBebidas} Ml de bebidas <img src="./assets/lata-de-refrigerante.png" alt="lata-de-refrigerante" width="20px" height="20px">`


}

function CarnePP(duracao){
    if(duracao >=6){ 
     return 650
    } else{
        return 400
    }
    }

    function CervejaPP(duracao){
        if(duracao >=6){ 
         return 1500;
        } else{
            return 1000;
        }
        }

        function bebidasPP(duracao){
            if(duracao >=6){ 
             return 2000;
            } else{
                return 1200;
            }
            }
    