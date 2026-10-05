let seguir = "si"
while (seguir === "si") {

alert("Bienvenido a BK")
console.log ("Preparemos tu combo")
console.log("Hamburguesa simple")
console.log("Hamburguesa con queso")
console.log ("Hamburguesa con queso y panceta")
console.log ("Hamburguesa completa")



let hamburguesa = parseInt(prompt("Selecciona una opcion:"))

switch(hamburguesa) {
    case 1:
        console.log("Hamburguesa simple")
        break
    case 2:
        console.log("Hamburguesa con queso")
        break
    case 3:
        console.log ("Hamburguesa con queso y panceta")
        break
    case 4:
        console.log ("Hamburguesa completa")
        break
}


// segunda parte
let guarnicion = prompt("Desea agregar papas?").toLowerCase()

if (guarnicion === "si") {
    console.log ("Agregaste papas")

} else {
    console.log ("Sin guarnicion")
}

// tercera parte

let gaseosa = prompt("Desea agregar gaseosa refill?").toLowerCase()

if (gaseosa === "si") {
    console.log ("Agregaste gaseosa refill")
} else {
    console.log ("sin gaseosa")
}


// ciclo

seguir = prompt("Desea hacer otro pedido?").toLowerCase()
}

console.log("Muchas gracias por elegirnos, vamos a preparar tu pedido...")


