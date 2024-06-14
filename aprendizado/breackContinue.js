const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if (x ==5){ 
        break      //sai do lanço for e finaliza
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y ==5){
        continue // pula a etapa definida e continua na proxima *** pula o 5 e continua no 6
    }

    console.log(`${y} = ${nums[y]} `)
}

externo:
for (a in nums) {
    for (b in nums){
        if(a == 2 && b == 3 ) break externo //para o breack pegar no primeiro for é criado um rotulo
        console.log(`Par = ${a},${b} `)
    }
}

console.log('Fim!')