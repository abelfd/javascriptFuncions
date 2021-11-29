function vocal(str) { 
    const count = str.match(/[aeiou]/gi).length;
    return count;
}

var palabra = 'comer';
const resultado = vocal(palabra);
console.log(resultado);



