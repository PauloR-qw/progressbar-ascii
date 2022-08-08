const { tipos } = require('./tipos.json')

module.exports = (percentual, tipo = 1, tamanho = 20) => {

    if (typeof percentual != 'number') {

        throw Error('O valor passado por argumento não é um Número! ' + percentual);

    } else if (Number.isInteger(percentual) == false || percentual == undefined || percentual <= 0 || percentual > 100) {

		throw Error('O valor passado é invalido! ' + percentual)

	};

	if (typeof tipo != 'number') {

        throw Error('O valor passado por argumento não é um Número! ' + tipo);

    } else if (Number.isInteger(tipo) == false || tipo == undefined || tipo <= 0 || tipo > Object.keys(tipos).length) {

		throw Error('O valor passado é invalido! ' + tipo)

	};

	if (typeof tamanho != 'number') {

        throw Error('O valor passado por argumento não é um Número! ' + tamanho);

    } else if (Number.isInteger(tamanho) == false || tamanho == undefined || tamanho <= 0) {

		throw Error('O valor passado é invalido! ' + tamanho)

	};

}