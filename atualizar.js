let residencias = require('./residencias')

function atualizarResidencias(id, novaResidencia) {
    let index = residencias.findIndex(residencia => residencia.id === id);

    if (index !== -1) {
        residencias[index] = {id, ...novaResidencia}
    }
}

module.exports = atualizarResidencias