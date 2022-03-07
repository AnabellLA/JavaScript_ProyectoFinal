/*Hazlo tu mismo*/
class Registro {
    constructor(accesorio, talla, nombre, correo, telefono) {
        this.accesorio = accesorio;
        this.talla = talla;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
    }
}

let formRegistro = document.getElementById('formRegistro')

let registros = []

if(localStorage.getItem('Registro')) {
    registros = JSON.parse(localStorage.getItem('Registro'))
} else {
    localStorage.setItem('Registro', JSON.stringify(registros))
}

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()

    let accesorio = document.getElementById('accesorio').value
    let talla = document.getElementById('talla').value
    let nombre = document.getElementById('nombre').value
    let correo = document.getElementById('email').value
    let telefono = document.getElementById('number').value

    const registro = new Registro(accesorio, talla, nombre, correo, telefono)
    registros.push(registro)
    
    localStorage.setItem('Registros', JSON.stringify(registros))
    formRegistro.reset()
})

