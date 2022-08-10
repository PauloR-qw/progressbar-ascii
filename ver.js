const { estilos } = require('./estilos.json')

module.exports = (percentual, estilo, tamanho) => {

    if (typeof percentual != 'number') {

        throw Error('O valor passado por argumento não é um Número! ' + percentual);

    } else if (Number.isInteger(percentual) == false || percentual == undefined || percentual <= 0 || percentual > 100) {

		throw Error('O valor passado é invalido! ' + percentual)

	};

	if (typeof estilo != 'number') {

        throw Error('O valor passado por argumento não é um Número! ' + estilo);

    } else if (Number.isInteger(estilo) == false || estilo == undefined || estilo <= 0 || estilo > Object.keys(estilos).length) {

		throw Error('O valor passado é invalido! ' + estilo)

	};

	if (typeof tamanho != 'number') {

        throw Error('O valor passado por argumento não é um Número! ' + tamanho);

    } else if (Number.isInteger(tamanho) == false || tamanho == undefined || tamanho <= 0) {

		throw Error('O valor passado é invalido! ' + tamanho)

	};

}