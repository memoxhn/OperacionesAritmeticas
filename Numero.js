const n1= 10;
const n2= 5;

const resultados={   
    Suma: n1+n2,
    Resta: n1-n2,
    Multiplicacion: n1*n2,
}
console.log(resultados);
const numeros= document.getElementById('myResults')
numeros.innerHTML = `Suma:${resultados.Suma} 
Resta: ${resultados.Resta}
Multiplicacion: ${resultados.Multiplicacion}`