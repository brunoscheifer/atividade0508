let residencias = require('./residencias');

function listarResidencias() {
    for(i = 0; i < residencias.length; i++) {
        const residencia = residencias[i]
    
        console.log(`
        ID: ${residencia.id}
        Rua: ${residencia.rua}
        Bairro: ${residencia.bairro}`)
            
        for (let o = 0; o < residencia.moradores.length; o++) {
            console.log(` ${o + 1}. ${residencia.moradores[o]}`);
        }
        console.log('');
    }
}

module.exports = listarResidencias