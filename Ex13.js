var valor = (a,b) => {
    if (a!=null && b==null)
    return a
    else if (a==null && b!=null)
    return b
    else if (a!=null && b!=null)
    return [a,b]
}
console.log(valor(55,null))