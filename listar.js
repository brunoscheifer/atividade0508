let residencias = require('./residencias');

function listarContatos() {
    residencias.forEach((residencia, index) => {
        console.log(`${index + 1}. Rua: ${residencia.rua}
        Bairro: ${residencia.bairro}
        Numero: ${residencia.numero}
        Moradores: ${residencia.moradores}`)
    })       
}

module.exports = listarContatos