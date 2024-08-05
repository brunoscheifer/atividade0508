let residencias = require('./residencias')

function atualizarResidencias(index, novaResidencia) {
    residencias[index] = novaResidencia
}

module.exports = atualizarResidencias