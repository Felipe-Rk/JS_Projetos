const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)

console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)

// usar .toFixed(Numero de casas decimais) 
//para definir quantas casas decimais aparecer após a virgula

console.log(media.toFixed(2))

//passar para string usando .toString(2) exemplo

console.log(media.toString(2))

console.log(typeof media) // dado sendo numero
console.log(typeof Number) // Função por usar o N grande