console.log ("Bienvenido a BK, elegi como queres tu combo")

console.log(Primer Paso:)

let hamburguesa = parseInt(prompt("Selecciona una opcion:"))

switch(hamburguesa) {
    case 1:
        console.log("Hamburguesa simple")
        total += 6
        break
    case 2:
        console.log("Hamburguesa con queso")
        total += 8
        break
    case 3:
        console.log ("Hamburguesa con queso y panceta")
        total += 10
        break
    case 4:
        console.log ("Hamburguesa completa")
        total += 12
        break
}

console.log ("Subtotal: $" + total)




