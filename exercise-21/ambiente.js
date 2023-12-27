let num = [5, 8, 2, 9, 3]
console.log(num)

num.sort()

for (let i=0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log(num.indexOf(5))

num.push(1)

num.push(7)

console.log(num)

num.sort()

for( let i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log(num.indexOf(6))