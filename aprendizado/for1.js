let contador = 1 

while(contato <= 10){
    console.log('contador = $(contador}')
    contador++
}

for(let i =1; i <= 10; i++){
    console.log('i = $(i) ')
}


const notas = [6.7, 7.4, 9.8, 8.1, 7.7]


// i recebe 0 // .length faz a leitura iniciando em 0, // i recebe + i
for(let i = 0, i < notas.length; i++){  // se colocar let, nao da para acessar fora do array
    console.log('nota = ${notas[i]}')
}