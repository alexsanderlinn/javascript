function parimp(n) {
    if (n%2==0){
        return 'par'
    }else {
        return 'ímpar'
    }
}

let res = parimp(2)

console.log(res)

function teste(n1=0, n2=0) {
    return n1 + n2
}

let sum = teste(17, 10)

console.log(sum)

let v = function(x) {
    return x*2
}

console.log(v(5))

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

function fatorial2(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial2(5))