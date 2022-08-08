const { tipos } = require('./tipos.json');
const ver = require('./ver');

const progressBar = ({ 

	percentual, 
	tipo = 1, 
	tamanho = 30,
	mostrarPercentual = false

}) => {

    ver(percentual, tipo, tamanho);

	let progresso = '';
    
	for (let i = 0; i < tamanho; i++) {
        
		if (percentual < (i + 1) * (100/tamanho)) {
            
			progresso += tipos[tipo].vazio;
            
		} else {

			progresso += tipos[tipo].preenchimento;

		}
        
	}

	const porcentagem = mostrarPercentual == true ? `${percentual}%` : ''

	let bar = `${tipos[tipo].paredeE}${progresso}${tipos[tipo].paredeD} ${porcentagem}`;
    
	return bar;

};

module.exports = progressBar;

console.log(progressBar({

	percentual: 80,
	tipo: 9,

}));