var posicion = (a,b) => {
    return (a.length-a.indexOf(b))
}
console.log(posicion('Hola soc en Abel','en'));

var dividir = (a,b) => {
    return b.substr(a,b.length)
}
console.log(dividir(posicion('Hola soc en Abel','en'),'Hola soc en Abel'))

