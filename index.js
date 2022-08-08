const { tipos } = require('./tipos.json');
const ver = require('./ver');

const progressBar = ({ 

	percentual, 
	tipo = 1, 
	tamanho = 20 

}) => {

    ver(percentual, tipo, tamanho);

	let progresso = '';
    
	for (let i = 0; i < tamanho; i++) {
        
		if (percentual < (i + 1) * (100/tamanho)) {
            
			progresso += tipos[tipo].vazio;
            
		} else {

			progresso += tipos[tipo].preenchimento;

		}

		console.log((i + 1) * (100/tamanho));
        
	}

	let bar = `${tipos[tipo].paredeE}${progresso}${tipos[tipo].paredeD}`;
    
	return bar;

};

module.exports = progressBar;

console.log(progressBar({

	percentual: 99,
	tipo: 3,
	tamanho: 150

}));