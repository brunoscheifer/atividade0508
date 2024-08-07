let residencias = require('./residencias');

function adicionarResidencias(residencia) {
    residencia.id = residencias.length + 1

    residencias.push(residencia)
}

module.exports = adicionarResidencias