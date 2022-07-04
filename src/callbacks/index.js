const suma = (num1, num2) => { return num1 + num2; };

const calc = (num1, num2, cb) => {
    return cb(num1, num2)
}


const saludo = (nombre) => {
    console.log(`hola ${nombre}`)
}

setTimeout(() => saludo("thk"), 2000);
console.log(calc(2, 90, suma));