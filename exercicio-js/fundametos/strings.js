const escola = "Cod3r"

console.log(escola.charAt(4)) // .charAt() serve para acha a letra que esta dentro do indice indicado

console.log(escola.charCodeAt(3)) // .charCodeAt() retorna o valor da tabela unicode

console.log(escola.indexOf("3")) // .indexOf() retorna o valor do indice dentro da variavel 

console.log(escola.substring(1)) // .substring() retorna o valor a partir do indice definido dentro do ()

console.log(escola.substring(0,3)) // vai do indice 0 ate o indice 3 * mas nao vai mostrar o 3

console.log('Escola '.concat(escola).concat('!')) // .concat() adiciona um elemento no final 

console.log(escola.replace(3, 'e')) // .replace() substitui o indice pelo que colocar em seguida

console.log(escola.replace(/\w/g, "e")) // função /\letra/g = global substitui tudo por e

console.log('Ana,Maria,Pedro'.split(',')) // gera um array que defino como quer separar 

