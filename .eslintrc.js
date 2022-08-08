module.exports = {
	'env': {
		'browser': true,
		'node': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single',
			{ 
				'allowTemplateLiterals': true 
			}
		],
		'semi': [
			'error',
			'always'
		],
		'semi-spacing': [
			'error',
			{
				'before': false, 'after': true
			}
		],
		'semi-style': [
			'error',
			'last'
		],
		'array-bracket-spacing': [
			'error',
			'always',
			{
				'singleValue': true,
				'objectsInArrays': false,
				'arraysInArrays': true
			}
		],
		'arrow-spacing': 'error',
		'brace-style': 'error',
		'comma-dangle': [
			'error', 'never'
		],
		'comma-spacing': [
			'error', 
			{
				'before': false, 'after': true
			}],
		'comma-style': [
			'error', 'last'
		],
		'dot-location': [
			'error', 'property'
		],
		'eol-last': [
			'error',
			'never'
		],
		'func-call-spacing': 'error',
		'function-call-argument-newline': [ 
			'error', 
			'consistent' 
		],
		'key-spacing': 'error',
		'keyword-spacing': [
			'error', 
			{
				'before': true,
				'after': true
			}
		],
		'no-mixed-spaces-and-tabs': 'error',
		'no-whitespace-before-property': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 1,
				'maxEOF': 0
			}
		],
		'object-curly-spacing': [
			'error',
			'always',
			{
				'arraysInObjects': true,
				'objectsInObjects': true
			}
		],
		'padded-blocks': [
			'error',
			'always',
			{
				'allowSingleLineBlocks': true
			}
		],
		'space-before-function-paren': [
			'error',
			'always'
		],
		'space-in-parens': 'error'

	}
};