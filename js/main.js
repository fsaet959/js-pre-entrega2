nombre = prompt ("Escriba su nombre")

alert("Bienvenido/a al simulador de ahorro, " + nombre)

const contraseñaCorrecta = "123456"
let intentos = 0
let acceso = false

while (intentos < 3 && !acceso){
    const clave = prompt("Escriba su contraseña:")

    if (clave === contraseñaCorrecta){
        acceso = true
        alert ("Validando...")
    }
    else {
        intentos++;
        alert("Contraseña incorrecta.")
    }
}
 if (!acceso) {
    alert ("Cuenta bloqueada")
 }
 
 let saldo = 1000
 console.log("Saldo actual: " + saldo) 
 let objetivo = 15000

 movimiento = parseFloat(prompt("Ingrese el monto que desea modificar:"))

 let saldoactual = saldo + movimiento
 console.log(movimiento)


