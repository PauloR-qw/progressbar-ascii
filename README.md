
# Progressbar-ascii

## O que esse pacote faz?

O progressbar-ascii, basicamente, cria e retorna uma barra de progresso, que pode ser utilizada em diverços contextos.

## Sintaxe Geral

> progressbar({percentual [, estilo, tamanho, mostrarPercentual]})

Exempo:

```javascript
progressbar({

    percentual: 88,
    estilo: 9,
    tamanho: 30,
    mostrarPercentual: true

})
```

> Retorna: ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▱ ▱ ▱ ▱  88%

### Parâmetros

| Nome | Requerido | Tipo | Descrição |
| ---- | :--------: | :----: | ------ |
| Percentual | Sim | Número | Diz o quanto deve estar preenchido da barra.
| Estilo | Não | Número | Especifica o estilo da barra.
| Tamanho | Não | Número | Especifica o tamanho da barra.
| Mostrar Percentual | Não | Booleano | Quando false (padrão) não retorna o percentual atual.

## Como usa?

Para utilizar basta importar o pacote e executar a função, como demonstra o exemplo abaixo:

```javascript
const progressbar = require('progressbar-ascii') 
progressbar({percentual: 50})
```

> Retorna: 「███████████████░░░░░░░░░░░░░░░」

### Estilos

| Número | Aparência |
| :------: | --------- |
| 1 | 「███████████████░░░░░░░░░░░░░░░」 |
| 2 | ███████████████░░░░░░░░░░░░░░░ |
| 3 | [===============⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] |
| 4 | [===============∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙] |
| 5 | ===============∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ |
| 6 | {\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} |
| 7 | [###############⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] |
| 8 | [▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫] |
| 9 | ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▱ ▱ ▱ ▱ ▱ ▱ ▱ ▱ ▱ ▱ ▱ ▱ ▱ ▱ ▱  |
| 10 | ▮ ▮ ▮ ▮ ▮ ▮ ▮ ▮ ▮ ▮ ▮ ▮ ▮ ▮ ▮ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯ ▯  |
| 11 | ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▶ ▷ ▷ ▷ ▷ ▷ ▷ ▷ ▷ ▷ ▷ ▷ ▷ ▷ ▷ ▷ |