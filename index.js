const { estilos } = require('./estilos.json');
const ver = require('./ver');

const progressBar = ({ 

	percentual, 
	estilo = 1, 
	tamanho = 20,
	mostrarPercentual = false

}) => {

    ver(percentual, estilo, tamanho);

	let progresso = '';
    
	for (let i = 0; i < tamanho; i++) {
        
		if (percentual < (i + 1) * (100/tamanho)) {
            
			progresso += estilos[estilo].vazio;
            
		} else {

			progresso += estilos[estilo].preenchimento;

		}
        
	}

	const porcentagem = mostrarPercentual == true ? `${percentual}%` : ''

	let bar = `${estilos[estilo].paredeE}${progresso}${estilos[estilo].paredeD} ${porcentagem}`;
    
	return bar;

};

module.exports = progressBar;
