let amigo = {nome: 'Jose', 
sexo: 'M', 
peso: 85.3, 
engordar(p){
    console.log('Engordou')
    this.peso += p
}}

console.log(amigo)
amigo.engordar(2)
console.log(amigo.nome)
console.log(amigo.peso)