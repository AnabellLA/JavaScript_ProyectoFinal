class Productos {
    constructor(nombre, precio, talla) {
        this.nombre = nombre;
        this.precio = precio;
        this.talla = talla;
    }
}

const producto1 = new Productos("Vestido", 70, "Medium")
const producto2 = new Productos("Bandana", 40, "Small")
const producto3 = new Productos("Plaquita", 50, "Standar")
const producto4 = new Productos("Zapatos", 100, "Standar")
const producto5 = new Productos("Correa", 90, "Large")


let arrayProductos = [producto1, producto2, producto3, producto4, producto5]

function Lista(){
    let i= 0
    for(let producto of arrayProductos) {
        producto
        i < arrayProductos.length; i++
        console.log("Producto " + i + "(Nombre, precio, talla):")
        for(let clave in producto) {
            console.log(producto[clave])
        }
    }
}

function Consulta(){
    do{
        consulta = prompt("ingrese el nombre del producto a buscar: Bandana, Plaquita, Correa, Zapatos, Vestido para saber el precio y talla");
        if (consulta === "Bandana" || consulta === "Correa" || consulta === "Plaquita" || consulta === "Zapatos" || consulta === "Vestido"){
            break;
            }
    } while(consulta != "Bandana" || consulta != "Correa" || consulta != "Plaquita" || consulta != "Zapatos" || consulta != "Vestido")
    console.log (arrayProductos.find((producto) => producto.nombre === consulta))
}

function Ordenar(){
    console.log(arrayProductos.sort((producto1, producto2) => {
        if(producto1.nombre < producto2.nombre) {
            return -1
        }
        if(producto1.nombre > producto2.nombre) {
            return 1
        }
        return 0
    }))
}