const progressBar = async (percentual) => {

    if (percentual != Number) {

        throw Error('O valor passado por argumento não é um Número! ' + `${percentual}`);

    }

	let progresso = '';
    
	for (let i = 0; i < 20; i++) {
        
		if (percentual < (i + 1) * 5) {
            
			progresso += '░';
            
		} else {

			progresso += '█';

		}
        
	}

	let bar = `「${progresso}」`;
    
	return bar;

};

module.exports = progressBar;