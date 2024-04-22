const listaLivros = require('../MaterialDasAulas/array');

function encontraMenores(pivo, array){
    let menores = 0;

    for (let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual];

        if (produtoAtual.preco < pivo.preco){
            menores ++;
        }
    }
    return menores;
}

console.log(encontraMenores(listaLivros[2], listaLivros));